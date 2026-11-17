# Cómo contribuir

Gracias por ayudar a mejorar el banco. Este proyecto no es oficial y **no acepta preguntas copiadas del examen real ni de "brain dumps"** (violan el acuerdo de confidencialidad de AWS). Todas las preguntas deben ser originales.

## Proponer o corregir una pregunta

1. Edita `data/questions.json` (no los archivos de `banco/` ni `docs/questions.js`: se generan solos).
2. Usa este formato:

```json
{
  "id": "D3-31",
  "domain": 3,
  "q": "Enunciado con un escenario de negocio.",
  "options": ["Opción A", "Opción B", "Opción C", "Opción D"],
  "answer": [0],
  "explain": "Por qué la correcta es mejor y en qué se distingue de los distractores.",
  "ref": "https://docs.aws.amazon.com/..."
}
```

- `domain`: 1 Conceptos de la nube, 2 Seguridad y cumplimiento, 3 Tecnología y servicios, 4 Facturación, precios y soporte.
- `id`: `D<dominio>-<número>`, único y con el prefijo del dominio.
- `answer`: índices (desde 0) de las opciones correctas. Para "selecciona DOS", pon dos índices e indícalo en el enunciado.
- `options`: entre 4 y 6, sin repetidas. Los distractores deben ser plausibles.
- `ref`: enlace `https` a la documentación oficial de AWS que respalda la respuesta.

3. Valida y regenera los archivos:

```
python3 scripts/build.py
```

Debe terminar con `OK: N preguntas`. Incluye en tu PR los archivos generados.

## Reglas de calidad

- Una sola respuesta defendible según la documentación vigente de AWS.
- Nada de datos que cambian seguido (precios exactos, límites, nombres de planes) sin una referencia.
- Español neutro y sin ambigüedades.

## Reportar un error

Abre un issue con la plantilla "Reportar pregunta incorrecta" e incluye el `id` y el enlace a la documentación.

Al contribuir aceptas que tu aportación se publique bajo las licencias del repo (MIT para el código y CC BY-SA 4.0 para el contenido).
