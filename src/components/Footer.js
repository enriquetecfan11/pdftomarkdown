import React from 'react';
import { Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-4">
      <p className="mb-2">Enrique Rodriguez Vela</p>
      <p className="mb-2">2024 © Todos los derechos reservados</p>
      <div className="flex justify-center space-x-4">
        <a href="https://twitter.com/kikerodrivela" target="_blank" rel="noopener noreferrer">
          <Twitter className="text-blue-400 hover:text-blue-600" />
        </a>
        <a href="https://www.linkedin.com/in/enrique-rodriguez-vela/" target="_blank" rel="noopener noreferrer">
          <Linkedin className="text-blue-700 hover:text-blue-900" />
        </a>
        <a href="https://www.github.com/enriquetecfan11" target="_blank" rel="noopener noreferrer">
          <Github className="text-gray-700 hover:text-gray-900" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
