import React from 'react';
import './App.css';
import PDFToMarkdownConverter from './components/PDFToMarkdownConverter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App min-h-screen bg-gray-50 flex flex-col">
      <header className="w-full bg-gray-800 text-white py-4">
        <h1 className="text-4xl font-extrabold text-center">Convertidor de PDF a Markdown</h1>
        <h2 className="text-2xl font-semibold text-center mt-2">Convierte tus documentos PDF para usarlos con tus GPTs personalizados</h2>
      </header>
      
      <main className="flex-grow w-full max-w-4xl mx-auto p-4 flex flex-col items-center justify-center">
        <p className="text-lg my-4 text-center text-gray-700 max-w-xl">
          Está herramienta está diseñada para ayudarte a convertir tus archivos PDF en un formato Markdown (.md) fácil de usar. El formato Markdown es ampliamente utilizado en plataformas de desarrollo y documentación, y es ideal para integrar contenido en tus modelos de lenguaje GPT personalizados.
        </p>
        <PDFToMarkdownConverter />
      </main>
      
      <Footer className="w-full bg-gray-800 text-white py-2 text-center" />
    </div>
  );
}

export default App;
