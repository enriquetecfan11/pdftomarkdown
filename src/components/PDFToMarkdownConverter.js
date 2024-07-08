import React, { useState } from 'react';
import { FileUploader } from "react-drag-drop-files";
import { Upload, Download } from 'lucide-react';
import * as pdfjsLib from 'pdfjs-dist/webpack';
import JSZip from 'jszip';

const PDFToMarkdownConverter = () => {
  const [file, setFile] = useState(null);
  const [converting, setConverting] = useState(false);
  const [converted, setConverted] = useState(false);
  const [markdownContents, setMarkdownContents] = useState([]);

  const handleChange = (file) => {
    setFile(file);
    setConverted(false);
    setMarkdownContents([]);
  };

  const handleConversion = async () => {
    if (!file) return;
    setConverting(true);

    const markdownPages = await convertPDFToMarkdown(file);
    
    setConverting(false);
    setConverted(true);
    setMarkdownContents(markdownPages);
  };

  const convertPDFToMarkdown = async (pdfFile) => {
    const arrayBuffer = await pdfFile.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    let markdownPages = [];

    for (let i = 0; i < pdf.numPages; i++) {
      const page = await pdf.getPage(i + 1);
      const textContent = await page.getTextContent();
      
      const pageText = textContent.items.map(item => item.str).join(' ');
      const cleanedText = cleanText(pageText);

      markdownPages.push({ pageNumber: i + 1, content: cleanedText });
    }

    return markdownPages;
  };

  const cleanText = (text) => {
    let lines = text.split(/(?:\r\n|\r|\n)/g);
    let markdownLines = lines.map(line => {
      // Detect potential headers
      if (/^#/.test(line)) {
        return `# ${line.trim()}`;
      }
      // Detect lists
      if (/^\d+\./.test(line)) {
        return `1. ${line.trim()}`;
      }
      if (/^[-*]/.test(line)) {
        return `- ${line.trim()}`;
      }
      // Default paragraph
      return line.trim();
    });

    // Join cleaned lines with a double newline for Markdown
    return markdownLines.join('\n\n');
  };

  const handleDownloadZip = async () => {
    const zip = new JSZip();
    markdownContents.forEach(page => {
      zip.file(`pagina-${page.pageNumber}.md`, page.content);
    });

    const content = await zip.generateAsync({ type: 'blob' });
    const element = document.createElement("a");
    element.href = URL.createObjectURL(content);
    element.download = "pdf-to-markdown.zip";
    document.body.appendChild(element); // Requerido para Firefox
    element.click();
  };

  const handleDownloadCombined = () => {
    const combinedContent = markdownContents.map(page => page.content).join('\n\n---\n\n');
    const element = document.createElement("a");
    const file = new Blob([combinedContent], { type: 'text/markdown' });
    element.href = URL.createObjectURL(file);
    element.download = "combined.md";
    document.body.appendChild(element); // Requerido para Firefox
    element.click();
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      {!file && (
        <FileUploader
          handleChange={handleChange}
          name="file"
          types={["PDF"]}
          classes="w-full"
        >
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-10 text-center cursor-pointer hover:border-blue-500 transition-colors">
            <Upload className="mx-auto mb-4 text-gray-600" size={48} />
            <p className="text-gray-600">Arrastra tu archivo aquí o haz clic para seleccionar</p>
          </div>
        </FileUploader>
      )}

      {file && !converting && !converted && (
        <button
          onClick={handleConversion}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors w-full"
        >
          Convertir a Markdown
        </button>
      )}

      {converting && (
        <div className="mt-4 text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-2 text-gray-600">Procesando tu archivo, por favor espera...</p>
        </div>
      )}

      {converted && (
        <div className="mt-4 text-center">
          <p className="text-green-600 font-bold mb-2">¡Conversión completada!</p>
          <button
            onClick={handleDownloadZip}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors flex items-center justify-center w-full mb-2"
          >
            <Download className="mr-2" size={20} />
            Descargar todas las páginas en ZIP
          </button>
          <button
            onClick={handleDownloadCombined}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors flex items-center justify-center w-full"
          >
            <Download className="mr-2" size={20} />
            Descargar todo el contenido combinado
          </button>
        </div>
      )}
    </div>
  );
};

export default PDFToMarkdownConverter;
