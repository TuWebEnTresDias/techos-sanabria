# Guías 03 y 04 — borradores locales

Preparadas el 30/10/2026. **No publicadas ni autorizadas para publicar.** El HTML completo es la fuente del texto. `guias-03-04.json` registra las fichas editoriales; `BLOG.md` conserva el calendario general.

| Guía | Tema | Archivo | Lectura estimada |
|---|---|---|---|
| 03 | Qué información enviar para consultar por una filtración | `../../blogs/que-enviar-para-consultar-por-una-filtracion/index.html` | 7 min |
| 04 | Qué puede incluir una revisión profesional del techo | `../../blogs/revision-profesional-del-techo/index.html` | 8 min |

## Decisiones de preparación

- Ambas páginas reutilizan la navegación, tipografía, contenedores y componentes de `blogs/guides.css`. No hay cambios en CSS compartido ni en páginas ya publicadas.
- Apertura textual con resumen lateral: sin fotos repetidas ni descargas. Las futuras tarjetas pueden ser textuales; no hace falta incorporar una imagen para publicar estas guías.
- La guía 03 enseña a construir un mensaje y sostener el intercambio, no vuelve a enumerar señales de humedad.
- La guía 04 enseña a acordar el alcance y entender límites/devolución. No describe un protocolo propio de Techos Sanabria ni promete visita, informe, prueba, precio o plazo.
- Cada página tiene un solo CTA final a WhatsApp con mensaje propio, enlaces únicamente a artículos ya publicados y FAQs nativas sin datos estructurados FAQ.
- Metadatos únicos y canonical final preparados; JSON-LD con `creativeWorkStatus: Draft`, sin fechas inventadas.
- `noindex, nofollow` y etiqueta visible `data-draft-status`; sin enlaces entrantes desde home/índice/sitemap. No subirlas a `main` hasta autorizar su publicación: noindex no protege el acceso por URL.

## Lista breve para publicar una guía

La publicación no es solo añadir un enlace: hay que retirar sus marcas de borrador. No está programada ni automatizada.

1. Hacer revisión editorial final y confirmar que el contacto y los destinos publicados siguen vigentes. Las notas son generales; si se agrega una prestación concreta del negocio, validarla antes.
2. Retirar `<meta name="robots" content="noindex, nofollow">` y el `<span data-draft-status>…</span>` **solo de la guía aprobada**.
3. Cambiar `creativeWorkStatus` de `Draft` a `Published` en su JSON-LD y actualizar su estado en `guias-03-04.json` y `BLOG.md`. Si se muestran fechas, usar la publicación efectiva, no la preparación.
4. Incorporar su tarjeta textual al índice `/blogs/` y a la sección de la home con título, extracto y lectura estimada de la ficha. No reutilizar fotos de otras notas. Ajustar el rótulo «próxima guía» que corresponda.
5. Añadir únicamente esa URL al sitemap. Mantener la otra guía como borrador, sin enlaces ni indexación.
6. Validar enlaces, metadatos, JSON-LD y vista móvil/escritorio con herramientas disponibles. No descargar herramientas sin autorización.
7. Preparar manifiesto exacto de archivos y hashes, solicitar confirmación para commit/push y comprobar el despliegue efectivo. No subir `BLOG.md` local automáticamente.

## Verificación actual

Revisión editorial y comprobaciones estáticas locales: estructura de encabezados, enlaces, recursos, CTA contextual, JSON-LD y aislamiento de los borradores. No se ejecutó render en navegador; no hay capturas ni publicación.
