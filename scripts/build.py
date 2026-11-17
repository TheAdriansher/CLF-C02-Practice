#!/usr/bin/env python3
"""Valida data/questions.json y genera docs/questions.js y banco/*.md.

Uso:  python3 scripts/build.py
"""
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "data" / "questions.json"
OUT_JS = ROOT / "docs" / "questions.js"
OUT_MD = ROOT / "banco"

DOMINIOS = {
    1: ("D1", "Conceptos de la nube", 24),
    2: ("D2", "Seguridad y cumplimiento", 30),
    3: ("D3", "Tecnología y servicios", 34),
    4: ("D4", "Facturación, precios y soporte", 12),
}
SLUG = {
    1: "D1-conceptos-de-la-nube",
    2: "D2-seguridad-y-cumplimiento",
    3: "D3-tecnologia-y-servicios",
    4: "D4-facturacion-precios-y-soporte",
}
LETRAS = "ABCDEFGH"


def validar(preguntas):
    errores = []
    ids = set()
    for p in preguntas:
        pid = p.get("id", "?")
        if pid in ids:
            errores.append(f"{pid}: id repetido")
        ids.add(pid)
        for campo in ("id", "domain", "q", "options", "answer", "explain", "ref"):
            if campo not in p:
                errores.append(f"{pid}: falta el campo '{campo}'")
        if errores and pid == "?":
            continue
        if p.get("domain") not in DOMINIOS:
            errores.append(f"{pid}: dominio inválido")
        if not pid.startswith(f"D{p.get('domain')}-"):
            errores.append(f"{pid}: el id no coincide con el dominio")
        opciones = p.get("options", [])
        if not 4 <= len(opciones) <= 6:
            errores.append(f"{pid}: debe tener entre 4 y 6 opciones")
        if len(set(opciones)) != len(opciones):
            errores.append(f"{pid}: opciones repetidas")
        resp = p.get("answer", [])
        if not resp or any((not isinstance(i, int)) or i < 0 or i >= len(opciones) for i in resp):
            errores.append(f"{pid}: respuesta fuera de rango")
        if len(set(resp)) != len(resp):
            errores.append(f"{pid}: respuesta repetida")
        if not str(p.get("ref", "")).startswith("https://"):
            errores.append(f"{pid}: el enlace debe empezar con https://")
    return errores


def escribir_js(preguntas):
    cuerpo = json.dumps(preguntas, ensure_ascii=False, indent=1)
    OUT_JS.write_text(
        "// Archivo generado por scripts/build.py a partir de data/questions.json. No editar a mano.\n"
        f"window.QUESTIONS = {cuerpo};\n",
        encoding="utf-8",
    )


def escribir_md(preguntas):
    OUT_MD.mkdir(exist_ok=True)
    for dom, (cod, nombre, peso) in DOMINIOS.items():
        del_dom = [p for p in preguntas if p["domain"] == dom]
        lineas = [
            f"# {cod}. {nombre}",
            "",
            f"Peso aproximado en el examen: {peso} %. Preguntas: {len(del_dom)}.",
            "",
            "> Preguntas originales y no oficiales. La respuesta está al final de cada una, dentro de un bloque desplegable.",
            "",
        ]
        for n, p in enumerate(del_dom, 1):
            multi = len(p["answer"]) > 1
            lineas.append(f"### {n}. {p['q']}")
            if multi:
                lineas.append("")
                lineas.append(f"*Selecciona {len(p['answer'])}.*")
            lineas.append("")
            for i, o in enumerate(p["options"]):
                lineas.append(f"- **{LETRAS[i]}.** {o}")
            correcta = ", ".join(LETRAS[i] for i in p["answer"])
            lineas += [
                "",
                "<details><summary>Ver respuesta</summary>",
                "",
                f"**Respuesta: {correcta}.** {p['explain']}",
                "",
                f"Referencia: <{p['ref']}>",
                "",
                "</details>",
                "",
            ]
        (OUT_MD / f"{SLUG[dom]}.md").write_text("\n".join(lineas), encoding="utf-8")


def main():
    preguntas = json.loads(DATA.read_text(encoding="utf-8"))
    errores = validar(preguntas)
    if errores:
        print("Errores en el banco de preguntas:")
        for e in errores:
            print(" -", e)
        sys.exit(1)
    escribir_js(preguntas)
    escribir_md(preguntas)
    conteo = {d: sum(1 for p in preguntas if p["domain"] == d) for d in DOMINIOS}
    multi = sum(1 for p in preguntas if len(p["answer"]) > 1)
    print(f"OK: {len(preguntas)} preguntas ({multi} de selección múltiple). Por dominio: {conteo}")


if __name__ == "__main__":
    main()
