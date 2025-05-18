import React from 'react';
import Link from 'next/link';

export default function PillarsSection() {
  const pillars = [
    {
      title: "Medicina Regenerativa",
      description: "Abordagens não intervencionistas para estimular a regeneração celular, focando em autofagia, telômeros e células-tronco.",
      link: "/pilares/medicina-regenerativa",
      image: "/images/hero-background.jpg" // Usando imagem que sabemos que existe
    },
    {
      title: "Nutrologia",
      description: "Protocolos nutricionais baseados nas culinárias mediterrânea e asiática, otimizando seu metabolismo com suplementação personalizada.",
      link: "/pilares/nutrologia",
      image: "/images/testimonial_1.jpg" // Usando imagem que sabemos que existe
    },
    {
      title: "Saúde Mental",
      description: "Técnicas de motivação e enfrentamento da ansiedade, procrastinação e sintomas depressivos relacionados ao estresse moderno.",
      link: "/pilares/saude-mental",
      image: "/images/testimonial_2.jpg" // Usando imagem que sabemos que existe
    },
    {
      title: "Gerenciamento de Peso",
      description: "Estratégias para emagrecer sem sofrimento, integrando nutrição, atividade física e abordagens comportamentais.",
      link: "/pilares/gerenciamento-peso",
      image: "/images/testimonial_3.jpg" // Usando imagem que sabemos que existe
    }
  ];

  return (
    <section className="py-20 bg-cinza-claro">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cinza-escuro">
            Os Quatro Pilares do Desafio Vitalidade
          </h2>
          <p className="text-xl text-cinza-medio max-w-3xl mx-auto">
            Nossa abordagem multidisciplinar integra quatro áreas essenciais para uma transformação completa da sua saúde.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg">
              <div className="relative h-48">
                {/* Fallback sempre visível, ficará atrás da imagem */}
                <div className="absolute inset-0 bg-verde-vitalidade/20 flex items-center justify-center">
                  <div className="text-verde-vitalidade text-5xl font-light">{pillar.title.charAt(0)}</div>
                </div>
                
                {/* Usando tag img comum em vez do componente Image do Next.js */}
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-verde-vitalidade">
                  {pillar.title}
                </h3>
                <p className="text-cinza-medio mb-4">
                  {pillar.description}
                </p>
                <Link href={pillar.link} className="text-verde-vitalidade font-medium hover:underline inline-flex items-center">
                  Saiba mais
                  {/* SVG com estilo inline para controlar o tamanho */}
                  <svg 
                    style={{ width: '16px', height: '16px', maxWidth: '16px', maxHeight: '16px', marginLeft: '4px' }} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
           ))}
        </div>
      </div>
    </section>
  );
}
