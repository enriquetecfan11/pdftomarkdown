
# Convertidor de PDF a Markdown

Este proyecto es una aplicación web que convierte archivos PDF a formato Markdown (.md). La aplicación permite a los usuarios subir un archivo PDF y descargar el contenido convertido de cada página individualmente en un archivo Markdown. Además, los usuarios pueden descargar todas las páginas como archivos Markdown comprimidos en un archivo ZIP o descargar todo el contenido combinado en un solo archivo Markdown.

## Características

- Subida de archivos PDF
- Conversión de PDF a Markdown por página
- Descarga de cada página como un archivo Markdown individual
- Descarga de todas las páginas como un archivo ZIP
- Descarga de todo el contenido combinado en un solo archivo Markdown

## Tecnologías Utilizadas

- React
- pdfjs-dist
- jszip
- lucide-react
- react-drag-drop-files

## Instalación

Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno local.

### Prerrequisitos

Asegúrate de tener instalado Node.js (recomendado v18.x LTS).

### Clonar el Repositorio

```bash
git clone https://github.com/enriquetecfan11/pdftomarkdown.git
cd pdf-to-markdown-converter
```

### Instalar Dependencias

```bash
npm install
```

### Ejecutar la Aplicación

```bash
npm start
```

La aplicación debería estar disponible en `http://localhost:3000`.

## Uso

1. **Subir un archivo PDF**: Arrastra tu archivo PDF a la zona de subida o haz clic para seleccionar el archivo.
2. **Convertir el PDF**: Haz clic en el botón "Convertir a Markdown" para iniciar la conversión.
3. **Descargar las páginas**:
   - **Descargar todas las páginas en ZIP**: Descarga un archivo ZIP que contiene archivos Markdown individuales para cada página.
   - **Descargar todo el contenido combinado**: Descarga un archivo Markdown que contiene todo el contenido combinado.

## Estructura del Proyecto

```plaintext
pdf-to-markdown-converter/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── PDFToMarkdownConverter.js
│   │   └── Footer.js
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   ├── index.js
│   └── ...
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

## Contribución

¡Las contribuciones son bienvenidas! Si tienes alguna mejora o has encontrado un error, por favor, abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para obtener más detalles.

## Contacto

Para cualquier consulta o comentario, puedes contactarme en [kikerodrivela@gmail.com](mailto:kikerodrivela@gmail.com).

---

¡Gracias por usar el Convertidor de PDF a Markdown! Si te gusta este proyecto, considera darle una estrella ⭐ en GitHub.
