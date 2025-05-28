import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-8">
      <div className="container-custom">
        {/* Conteúdo do footer... */}
        
        <div className="col-span-1">
          <h3 className="text-lg font-semibold mb-4">Contato</h3>
          <p className="mb-2">Email: contato@desafiovitalidade.com.br</p>
          <p className="mb-4">Telefone: (11) 9999-9999</p>
          
          <h3 className="text-lg font-semibold mb-2">Redes Sociais</h3>
          <div className="flex space-x-4">
            <Link href="#" aria-label="Instagram">
              <FaInstagram className="text-gray-600 hover:text-verde-vitalidade text-xl" />
            </Link>
            <Link href="#" aria-label="Facebook">
              <FaFacebook className="text-gray-600 hover:text-verde-vitalidade text-xl" />
            </Link>
            <Link href="#" aria-label="YouTube">
              <FaYoutube className="text-gray-600 hover:text-verde-vitalidade text-xl" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <FaLinkedin className="text-gray-600 hover:text-verde-vitalidade text-xl" />
            </Link>
          </div>
        </div>
        
        {/* Resto do footer... */}
      </div>
    </footer>
  );
}
