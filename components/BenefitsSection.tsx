import React from 'react';
import Image from 'next/image';

export default function BenefitsSection() {
 const benefits = [
  {
    title: "Abordagem Multidisciplinar",
    description: "Combinamos medicina regenerativa, nutrologia e saúde mental para uma transformação completa.",
    extendedDescription: "Nossa abordagem integra diferentes especialidades médicas para tratar o corpo como um todo. Combinamos o melhor da medicina regenerativa para otimizar funções celulares, nutrologia para adequar sua alimentação às necessidades metabólicas, e saúde mental para garantir equilíbrio emocional durante o processo de transformação.",
    icon: "/images/icon-multidisciplinar.svg",
    bgImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop"
  },
  // Outros benefícios com estrutura similar
];
    {
      title: "Baseado em Ciência",
      description: "Protocolos fundamentados em pesquisas científicas recentes sobre longevidade e bem-estar.",
      icon: "/images/icon-ciencia.svg"
    },
    {
      title: "Personalizado",
      description: "Adaptamos o programa às suas necessidades específicas e objetivos de saúde individuais.",
      icon: "/images/icon-personalizado.svg"
    },
    {
      title: "Resultados Duradouros",
      description: "Focamos em mudanças sustentáveis de estilo de vida, não apenas soluções temporárias.",
      icon: "/images/icon-resultados.svg"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cinza-escuro">
            Benefícios do Desafio Vitalidade
          </h2>
          <p className="text-xl text-cinza-medio max-w-3xl mx-auto">
            Transforme sua saúde e bem-estar com nosso programa de 30 dias cientificamente desenvolvido.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-cinza-claro p-6 rounded-lg transition-transform hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-verde-vitalidade/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                {/* Você pode substituir isso por um ícone SVG real ou uma imagem */}
                <div className="text-verde-vitalidade text-2xl">
                  {/* Placeholder para ícone */}
                  <div className="w-8 h-8 bg-verde-vitalidade/30 rounded-full"></div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-cinza-escuro">
                {benefit.title}
              </h3>
              <p className="text-cinza-medio text-center">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
