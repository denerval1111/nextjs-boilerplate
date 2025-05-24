import React from 'react';
import Image from 'next/image';
<section className="bg-white" style={{ marginTop: '-2px' }}>

export default function BenefitsSection( ) {
  const benefits = [
    {
      title: "Abordagem Multidisciplinar",
      description: "Combinamos medicina regenerativa, nutrologia e saúde mental para uma transformação completa.",
      extendedDescription: "Nossa abordagem integra diferentes especialidades médicas para tratar o corpo como um todo. Combinamos o melhor da medicina regenerativa para otimizar funções celulares, nutrologia para adequar sua alimentação às necessidades metabólicas, e saúde mental para garantir equilíbrio emocional durante o processo de transformação.",
      icon: "/images/icon-multidisciplinar.svg",
      bgImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop"
    },
    {
      title: "Baseado em Ciência",
      description: "Protocolos fundamentados em pesquisas científicas recentes sobre longevidade e bem-estar.",
      extendedDescription: "Todos os nossos protocolos são baseados em estudos científicos publicados em revistas de alto impacto. Acompanhamos as mais recentes descobertas em longevidade, metabolismo e medicina preventiva para oferecer intervenções com eficácia comprovada, sempre priorizando a segurança e resultados mensuráveis.",
      icon: "/images/icon-ciencia.svg",
      bgImage: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&auto=format&fit=crop"
    },
    {
      title: "Personalizado",
      description: "Adaptamos o programa às suas necessidades específicas e objetivos de saúde individuais.",
      extendedDescription: "Reconhecemos que cada pessoa possui necessidades únicas. Através de avaliações detalhadas e acompanhamento contínuo, personalizamos cada aspecto do programa para atender suas metas específicas, considerando seu histórico médico, condição atual, preferências pessoais e objetivos de longo prazo.",
      icon: "/images/icon-personalizado.svg",
      bgImage: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&auto=format&fit=crop"
    },
    {
      title: "Resultados Duradouros",
      description: "Focamos em mudanças sustentáveis de estilo de vida, não apenas soluções temporárias.",
      extendedDescription: "Diferente de programas que prometem resultados rápidos mas temporários, nosso foco está em criar mudanças sustentáveis que se integram naturalmente ao seu estilo de vida. Trabalhamos com educação, formação de hábitos e acompanhamento contínuo para garantir que os benefícios conquistados permaneçam ao longo do tempo.",
      icon: "/images/icon-resultados.svg",
      bgImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cinza-escuro">
            Benefícios do Desafio Vitalidade
          </h2>
          <p className="text-xl text-cinza-medio max-w-3xl mx-auto">
            Transforme sua saúde e bem-estar com nosso programa de 30 dias cientificamente desenvolvido.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {benefits.map((benefit, index ) => (
            <div 
              key={index} 
              className="rounded-lg overflow-hidden shadow-lg transition-transform hover:transform hover:scale-102 flex flex-col h-full"
              style={{
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${benefit.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-verde-vitalidade/20 rounded-full flex items-center justify-center mr-4">
                    <div className="w-10 h-10 bg-verde-vitalidade/40 rounded-full"></div>
                  </div>
                  <h3 className="text-2xl font-semibold text-cinza-escuro">
                    {benefit.title}
                  </h3>
                </div>
                
                <p className="text-lg font-medium text-cinza-escuro mb-4">
                  {benefit.description}
                </p>
                
                <p className="text-cinza-medio">
                  {benefit.extendedDescription}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
