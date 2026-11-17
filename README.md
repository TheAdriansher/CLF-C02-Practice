# Quiz CLF-C02 (no oficial)

Banco de **120 preguntas originales en español** para practicar el examen **AWS Certified Cloud Practitioner (CLF-C02)**, con un quiz web sin dependencias.

> Proyecto no oficial y sin afiliación con Amazon Web Services. Las preguntas fueron escritas para este repositorio: **no son preguntas del examen real**. Los servicios, límites y precios cambian; verifica siempre en la documentación oficial de AWS.

## Qué incluye

- **Quiz en HTML** (`docs/index.html`): **simulacro de 65 preguntas** con el peso del examen y 90 minutos, modo práctica (explicación después de cada pregunta) y modo examen (resultado al final, con cronómetro opcional), filtro por dominio, mezcla con el peso del examen, resultados por dominio y repetición de fallos. Funciona en el celular.
- **Banco por dominio** en Markdown (`banco/`), con la respuesta desplegable.
- **Acordeón** de pares de servicios que más se confunden (`acordeon.md`).
- **Fuente de datos** en JSON (`data/questions.json`).

| Dominio | Peso en el examen | Preguntas |
| --- | --- | --- |
| D1 Conceptos de la nube | 24 % | 30 |
| D2 Seguridad y cumplimiento | 30 % | 30 |
| D3 Tecnología y servicios | 34 % | 30 |
| D4 Facturación, precios y soporte | 12 % | 30 |

## Cómo usarlo

**En línea (GitHub Pages):** en el repositorio ve a *Settings → Pages*, elige la rama principal y la carpeta `/docs`, y guarda. El quiz quedará en `https://theadriansher.github.io/CLF-C02-Practice/`.

**Local:** abre `docs/index.html` en el navegador. No necesita servidor ni instalación.

## Cómo agregar o corregir preguntas

1. Edita `data/questions.json`. Cada pregunta tiene:
   - `id`: dominio y número, por ejemplo `D3-25`.
   - `domain`: 1 a 4.
   - `q`: enunciado.
   - `options`: de 4 a 6 opciones.
   - `answer`: índices (desde 0) de las correctas. Con más de una, el quiz pide «selecciona N».
   - `explain`: por qué es correcta y en qué se diferencia de las otras.
   - `ref`: enlace a la documentación oficial.
2. Ejecuta `python3 scripts/build.py`. Valida el banco y regenera `docs/questions.js` y los archivos de `banco/`.
3. Abre el quiz y comprueba la pregunta.

Para colaborar, escribe preguntas originales y cita la documentación de AWS. **No publiques preguntas reales del examen ni material de «brain dumps»**: va contra el acuerdo de confidencialidad de AWS y no se aceptará.

## Licencia

- Código (`docs/app.js`, `docs/index.html`, `scripts/`): MIT, ver `LICENSE`.
- Contenido (preguntas, explicaciones y acordeón): CC BY-SA 4.0, ver `CONTENT_LICENSE.md`.

«AWS», «Amazon Web Services» y los nombres de sus servicios son marcas de Amazon.com, Inc. o sus afiliadas.
