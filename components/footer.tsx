"use client";

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-cinza-escuro text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 footer-grid">
          {/* Coluna 1 - Logo e Sobre */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-white">Desafio Vitalidade</span>
            </Link>
            <p className="text-cinza-claro mb-4">
              Programa de 30 dias para envelhecimento com vitalidade, focado em longevidade saudável e prevenção de doenças crônicas.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://instagram.com/desafiovitalidade" target="_blank" rel="noopener noreferrer" className="text-white hover:text-verde-vitalidade">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://facebook.com/desafiovitalidade" target="_blank" rel="noopener noreferrer" className="text-white hover:text-verde-vitalidade">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://youtube.com/desafiovitalidade" target="_blank" rel="noopener noreferrer" className="text-white hover:text-verde-vitalidade">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/company/desafiovitalidade" target="_blank" rel="noopener noreferrer" className="text-white hover:text-verde-vitalidade">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Coluna 2 - Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-cinza-claro hover:text-verde-vitalidade transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/sobre/programa" className="text-cinza-claro hover:text-verde-vitalidade transition-colors">
                  Sobre o Programa
                </Link>
              </li>
              <li>
                <Link href="/depoimentos" className="text-cinza-claro hover:text-verde-vitalidade transition-colors">
                  Depoimentos
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-cinza-claro hover:text-verde-vitalidade transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/inscricao" className="text-cinza-claro hover:text-verde-vitalidade transition-colors">
                  Inscrição
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-cinza-claro hover:text-verde-vitalidade transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Coluna 3 - Pilares */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Pilares do Programa</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/pilares/medicina-regenerativa" className="text-cinza-claro hover:text-verde-vitalidade transition-colors">
                  Medicina Regenerativa
                </Link>
              </li>
              <li>
                <Link href="/pilares/nutrologia" className="text-cinza-claro hover:text-verde-vitalidade transition-colors">
                  Nutrologia
                </Link>
              </li>
              <li>
                <Link href="/pilares/saude-mental" className="text-cinza-claro hover:text-verde-vitalidade transition-colors">
                  Saúde Mental
                </Link>
              </li>
              <li>
                <Link href="/pilares/gerenciamento-peso" className="text-cinza-claro hover:text-verde-vitalidade transition-colors">
                  Gerenciamento de Peso
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Coluna 4 - Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-verde-vitalidade mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span className="text-cinza-claro">contato@desafiovitalidade.com.br</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-verde-vitalidade mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span className="text-cinza-claro">(11) 3456-7890</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-verde-vitalidade mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                <span className="text-cinza-claro">WhatsApp: (11) 98765-4321</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-verde-vitalidade mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-cinza-claro">Segunda a Sexta: 9h às 18h</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-cinza-medio/30">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-cinza-claro text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Desafio Vitalidade. Todos os direitos reservados.
            </p>
            <div className="flex space-x-4 text-sm">
              <Link href="/termos" className="text-cinza-claro hover:text-verde-vitalidade transition-colors">
                Termos de Uso
              </Link>
              <Link href="/privacidade" className="text-cinza-claro hover:text-verde-vitalidade transition-colors">
                Política de Privacidade
              </Link>
              <Link href="/cookies" className="text-cinza-claro hover:text-verde-vitalidade transition-colors">
                Política de Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
