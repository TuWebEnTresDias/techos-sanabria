# Guías 03 y 04 — estado editorial

Preparadas el 30/10/2026. La guía 03 está incluida en el paquete de publicación; la guía 04 permanece como borrador. El HTML es la fuente del texto y `guias-03-04.json` conserva las fichas editoriales.

| Guía | Tema | Archivo | Estado | Lectura estimada |
|---|---|---|---|---|
| 03 | Qué información enviar para consultar por una filtración | `../../blogs/que-enviar-para-consultar-por-una-filtracion/index.html` | Publicada | 7 min |
| 04 | Qué puede incluir una revisión profesional del techo | `../../blogs/revision-profesional-del-techo/index.html` | Borrador | 8 min |

## Decisiones editoriales

- Ambas páginas reutilizan la navegación, tipografía, contenedores y componentes de `blogs/guides.css`; no se cambia CSS compartido.
- La guía 03 enseña a construir un mensaje y sostener el intercambio, sin volver a enumerar señales de humedad.
- La guía 04 enseña a acordar el alcance y entender límites/devolución. No describe un protocolo propio del negocio ni promete visita, informe, prueba, precio o plazo.
- La guía 03 no agrega fotos repetidas ni descargas; mantiene la apertura textual y componentes compartidos.
- Cada artículo tiene un CTA contextual a WhatsApp. No se inventan fechas de publicación ni prestaciones.

## Publicación de la guía 03

- Se retiraron `noindex, nofollow`, la etiqueta visible de borrador y el valor `creativeWorkStatus: Draft` únicamente de la guía 03.
- Se agregó un enlace interno con título, resumen y tiempo de lectura a la sección de guías de la home y al índice `/blogs/`.
- Se añadió únicamente la URL de la guía 03 a `sitemap.xml`. La guía 04 permanece sin enlaces y sin URL en el sitemap.
- No se agregó una fecha de publicación hasta verificar el despliegue efectivo.
- La publicación no se programa automáticamente. La rama `main` requiere confirmación del manifiesto exacto antes del commit/push.

## Revisión prevista

Antes de publicar, validar metadatos, canonical, JSON-LD, enlaces, WhatsApp, menú y vista móvil/escritorio con herramientas disponibles. Diferenciar validación estática del sitio realmente servido; un cambio en el repo no prueba que el despliegue haya terminado.
