# Mulholland Brand · Astro

Conversión local de `index (5).html` a Astro, con el estimador interactivo de cinco pasos conservado como componente React. La página se genera como HTML durante la compilación; no necesita Babel en el navegador, un desempaquetador ni enlaces temporales `blob:`.

## Abrir el proyecto

Requiere Node.js 22.12 o posterior y npm.

```sh
npm ci
npm run dev
```

Abrir la dirección que muestra Astro, normalmente `http://127.0.0.1:4321`.

```sh
npm run build
npm run preview
```

La compilación queda en `dist/`.

## Archivos principales

- `src/pages/index.astro`: documento, metadatos y carga del componente interactivo.
- `src/components/EstimatorPage.jsx`: diseño y estimador migrados del archivo original; cálculos originales conservados.
- `src/components/design-system.jsx`: componentes visuales extraídos y adaptados para renderizado en Astro.
- `src/components/mobile.jsx`: detección móvil, carruseles, imágenes responsivas, accesibilidad del modal y envío de formularios.
- `src/styles/brand.css`: fuentes locales y variables originales.
- `src/styles/mobile.css`: adaptaciones aisladas bajo 768 px.
- `public/assets/`: recursos extraídos del HTML original.
- `public/responsive/` y `src/data/images.json`: variantes WebP con `srcSet` y `sizes`.

## Reglas móviles aplicadas

- Encabezado de 56 px, logo de hasta 24 px, CTA compacto sin flecha y texto corto hasta 340 px.
- Sin desplazamiento horizontal en la página.
- Hero con foto limpia arriba, altura controlada, titular de 28–36 px, oferta, subtítulo breve y autoridad integrada.
- Llamada de ancho completo y acceso al estimador.
- Productos y estilos con deslizamiento táctil, flechas, contador y puntos.
- Pasos y testimonios con avance automático, pausa al interactuar y control de reproducción.
- Galería simétrica de dos columnas, separación de 8 px y proporción 4:3.
- Menor movimiento cuando el visitante lo solicita; modal con Escape, control de foco y restauración del foco al cerrar.

## Imágenes y material original

Se extrajeron las imágenes incrustadas y se generaron 187 variantes para 67 recursos, sin ampliar artificialmente los originales pequeños. La imagen del hero corresponde ahora a la fotografía al atardecer incluida en `index (6).html`.

Las seis fotos de galería señaladas se restauraron con IA a partir de sus miniaturas originales y usan variantes responsivas. Los archivos originales se conservan. Ver [detalles y prompt](docs/image-updates.md). Algunas miniaturas de otras tarjetas conservan la resolución del exportado.

Para regenerar variantes después de actualizar `public/assets/`:

```sh
npm run images:optimize
```

## Formularios

El original únicamente mostraba una confirmación local. Ahora los formularios envían nombre, teléfono, email, ZIP, consentimiento opcional, producto/estilo y estimación cuando corresponde, URL completa, título, UTMs, fechas de Los Ángeles e ISO, zona horaria y resolución.

**Falta configurar el webhook real:** el HTML recibido no proporciona una conexión operativa. Definir `ZAPIER_WEBHOOK_URL` únicamente en el servidor; `.env.example` enumera la variable sin incluir credenciales.

- **Cloudflare Pages:** compilar con `npm run build`, publicar `dist/` y conservar `functions/` en la raíz del proyecto. El servicio procesa `functions/api/submit-lead.js`. Configurar la variable en el entorno de Cloudflare.
- **Hosting con PHP:** publicar el contenido de `dist/` en un servidor que ejecute PHP con cURL y tenga definida la misma variable. El archivo `api/submit-lead.php` se incluye en la compilación.
- **Astro local o hosting exclusivamente estático:** el diseño y el estimador funcionan; el formulario necesita uno de los servidores anteriores para entregar consultas. `astro dev` no ejecuta Cloudflare Functions ni PHP.

El navegador intenta `/api/submit-lead` y utiliza el proxy PHP si la primera ruta no existe. La URL privada del webhook no se envía al navegador. Los ejemplos Base64 de los documentos adjuntos no se utilizaron como credenciales: fragmentar una cadena pública no mantiene secreto un webhook.

Solo se redirige a `https://lp.mulhollandbrand.com/thanks-page` cuando el servidor confirma el envío. Si falla o falta configuración, se muestra un aviso y se permite reintentar. No se crean archivos públicos con datos personales de consultas.

Las tarifas y fórmulas provienen del estimador adjunto, cuyo código las identifica como valores de ejemplo. Validarlas comercialmente antes de publicar.

## Verificación

```sh
npm test
npm run dev
# En otra terminal, con Chrome instalado:
npm run test:browser
```

Verificado: compilación estática, validación y envío del proxy con servicios simulados, anchos de 320/340/390/430/767/768/1440 px, 16 recorridos completos del estimador (ocho productos en móvil y escritorio), controles del carrusel, errores del formulario y redirección tras confirmación. No se enviaron consultas reales. El proxy PHP se entrega para el hosting alternativo; requiere comprobarse allí con PHP y el webhook configurado.

No se publicó ni se modificó el HTML de Descargas.
