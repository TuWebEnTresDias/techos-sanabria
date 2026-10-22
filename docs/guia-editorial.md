# Guías para tu casa — Techos Sanabria

## Crear el siguiente artículo

1. Copiar `blogs/senales-de-filtracion-en-el-techo/index.html` a `blogs/<slug>/index.html`.
2. Mantener las hojas compartidas `../../style.css` y `../guides.css`. No copiar las hojas históricas `blog.<hash>.css`.
3. Actualizar título, descripción, canonical, Open Graph, Twitter y JSON-LD. Usar datos reales; no inventar fechas, profesionales revisores, testimonios ni proyectos.
4. Actualizar categoría, número de guía, autor organizacional, tiempo de lectura estimado, portada y bajada.
5. Elegir los módulos según el tema y actualizar el índice para que coincida con las secciones. Mantener un solo H1 y la secuencia H2/H3.
6. Actualizar el mensaje contextual de WhatsApp en ambos llamados a consultar. Número: 5491128985042.
7. Descargar las fotos a `images/blog/`, verificar sus licencias, comprimir a WebP/AVIF y conservar sus dimensiones de origen. Especificar width/height reales. La portada carga inmediatamente; las otras imágenes usan loading="lazy" y decoding="async".
8. Documentar fuente, autor, licencia y transformaciones. Actualizar los créditos visibles del artículo y, cuando corresponda, de la landing. Las fotos ilustrativas no deben presentarse como trabajos del negocio.
9. Al publicar, agregar el artículo a la landing con los componentes de `guides-preview.css`. Los próximos temas son texto informativo sin enlaces hasta existir.
10. Actualizar sitemap.xml con la nueva URL canónica y, si se agrega fecha, usar la fecha efectiva de publicación. Revisar robots y navegación.

## Componentes compartidos

| Clase | Uso |
|---|---|
| guide-hero / guide-hero-grid | Portada, categoría, título, bajada, metadatos y foto |
| guide-index | Navegación por anclas: lateral en escritorio, compacta en móvil |
| guide-summary | Tres conclusiones rápidas, antes del desarrollo |
| guide-sign / guide-sign-number | Señales o pasos numerados con explicación y qué registrar |
| guide-detail-photo | Fotografía de apoyo con leyenda |
| guide-safety | Precaución específica del tema, concentrada en un bloque |
| guide-comparison | Dos alternativas o un error frecuente y una mejor primera acción |
| guide-checklist | Información para preparar una consulta |
| guide-faq | Preguntas frecuentes con details/summary nativos |
| guide-contact | Cierre con CTA y mensaje contextual de WhatsApp |
| guide-related | Enlaces a servicios o artículos realmente disponibles |
| guide-credits | Créditos de fotos y licencias |
| guide-feature | Artículo publicado destacado en la landing |
| guide-preview-bottom | Próximos temas, sin apariencia de enlaces |

## Ritmo de lectura

Mantener una apertura narrativa y párrafos de desarrollo fuera de las tarjetas. Usar `guide-prose` para texto corrido y `guide-interlude` para transiciones. Las tarjetas resumen o acompañan la explicación; no deben reemplazarla. Alternar contexto, ejemplos cotidianos y componentes visuales. Recalcular el tiempo estimado de lectura al ampliar el contenido y actualizar también la landing.

## Criterio editorial

Escribir con voseo y frases concretas. La introducción debe responder qué aprenderá el lector. Evitar repetir precauciones en todos los párrafos; incluirlas junto a la acción pertinente y en el bloque de seguridad. Diferenciar observar de diagnosticar. No indicar subirse al techo ni manipular instalaciones. Adaptar los ejemplos al servicio real y no prometer tiempos, resultados ni diagnósticos por foto.

## Verificaciones antes de publicar

- Probar artículo y landing a 390, 768 y 1440 px, y comprobar ausencia de scroll horizontal.
- Revisar navegación, índice, menú móvil, preguntas frecuentes, WhatsApp y todos los enlaces locales.
- Comprobar imágenes sin solicitudes a servidores de imágenes externos.
- Validar JSON-LD, metadatos y un solo H1 por página.
- Mantener el bloque de analítica existente de la landing sin duplicarlo; cualquier expansión de analítica al blog se trata como un cambio independiente.
