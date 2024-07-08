import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-2 text-center">
      <p>Enrique Rodríguez Vela</p>
      <p>2024 © Todos los derechos reservados</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="https://twitter.com" className="text-white hover:text-blue-400">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://linkedin.com" className="text-white hover:text-blue-400">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com" className="text-white hover:text-gray-400">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
