# Fotos por estilo del estimador

Se incorporaron 55 imágenes específicas del sitio original https://mulhollandbrand.com/, descargadas a `public/assets/site/` con variantes locales en `public/responsive/site/`.

La causa era una sustitución automática: al faltar la imagen de un estilo, se usaba la imagen general del producto para todas las tarjetas. Esa sustitución se eliminó. Cada opción ahora tiene una imagen explícita y el resumen conserva la del estilo seleccionado.

- Wall Toppers, Railings, Walk Gates y Driveway Gates: ocho estilos por producto.
- Pergolas: nueve estilos.
- Garage Doors y Equipment Enclosures: siete estilos por producto.

Fencing conserva sus opciones e imágenes. No se cambiaron tarifas, fórmulas, campos de contacto ni condiciones de consentimiento.

`src/data/estimator-style-images.json` registra para cada foto el producto, estilo, ruta local, URL original, dimensiones y hash del archivo. Son las imágenes originales del catálogo, no restauraciones generadas por IA. Las fuentes tienen 720 px de ancho y se sirven en variantes de 600 y 720 px sin ampliarlas artificialmente.

## Aplicar al repositorio existente

`estimator-images-update.zip` contiene únicamente los archivos de esta corrección. El componente se preparó sobre la versión actual de `Mulholland-landing/estimate-fencing` (blob base `244b549e4231121a0343cbe7dc9dcfb52bc111ba`) para conservar sus ajustes recientes. No sustituir `package.json`, la configuración de Astro ni el proceso de publicación existente.

Integrar estos archivos en la rama de trabajo del repositorio, ejecutar sus pruebas y compilación, y publicar con el proceso de Cloudflare ya configurado.

## Verificación realizada

- Archivos originales y variantes existentes para los 55 estilos.
- Sin URLs ni fotografías duplicadas dentro de una categoría.
- Los 55 estilos recorridos en móvil y escritorio: selección, medidas y resumen final.
- Sin imágenes rotas ni desplazamiento horizontal en esos recorridos.
- Compilación y pruebas de datos correctas. No se enviaron consultas reales.

La conexión disponible de GitHub tiene lectura, pero no escritura (`push: false`). Esta actualización está preparada localmente; requiere publicarse con una cuenta autorizada.
