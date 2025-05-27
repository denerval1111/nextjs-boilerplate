import React from 'react';
import Link from 'next/link';

export default function Footer() {
  // Verificamos se o footer já foi renderizado para evitar duplicação
  const footerId = 'main-footer';
  
  // Se já existir um footer com este ID no DOM, não renderizamos outro
  if (typeof window !== 'undefined' && document.getElementById(footerId)) {
    return null;
  }
  
  return (
    <footer id={footerId} className="bg-white border-t border-gray-200 pt-12 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link href="/" className="text-xl font-bold text-verde-vitalidade">
              Desafio Vitalidade
            </Link>
            <p className="mt-4 text-gray-600">
              Transforme sua saúde e bem-estar com nosso programa multidisciplinar baseado em ciência.
            </p>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-verde-vitalidade">Início</Link></li>
              <li><Link href="/sobre/programa" className="hover:text-verde-vitalidade">O Programa</Link></li>
              <li><Link href="/depoimentos" className="hover:text-verde-vitalidade">Depoimentos</Link></li>
              <li><Link href="/blog" className="hover:text-verde-vitalidade">Blog</Link></li>
              <li><Link href="/contato" className="hover:text-verde-vitalidade">Contato</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Nossos Pilares</h3>
            <ul className="space-y-2">
              <li><Link href="/pilares/medicina-regenerativa" className="hover:text-verde-vitalidade">Medicina Regenerativa</Link></li>
              <li><Link href="/pilares/nutrologia" className="hover:text-verde-vitalidade">Nutrologia</Link></li>
              <li><Link href="/pilares/saude-mental" className="hover:text-verde-vitalidade">Saúde Mental</Link></li>
              <li><Link href="/pilares/gerenciamento-peso" className="hover:text-verde-vitalidade">Gerenciamento de Peso</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <p className="mb-2">Email: contato@desafiovitalidade.com.br</p>
            <p className="mb-4">Telefone: (11) 9999-9999</p>
            
            <h3 className="text-lg font-semibold mb-2">Redes Sociais</h3>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Instagram" className="text-gray-600 hover:text-verde-vitalidade">
                Instagram
              </Link>
              <Link href="#" aria-label="Facebook" className="text-gray-600 hover:text-verde-vitalidade">
                Facebook
              </Link>
              <Link href="#" aria-label="YouTube" className="text-gray-600 hover:text-verde-vitalidade">
                YouTube
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">© {new Date().getFullYear()} Desafio Vitalidade. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
