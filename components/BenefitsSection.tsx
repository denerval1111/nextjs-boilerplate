import React from 'react';

export default function BenefitsSection() {
  const benefits = [
    {
      title: "Abordagem Multidisciplinar",
      description: "Combinamos medicina regenerativa, nutrologia e saúde mental para uma transformação completa.",
      extendedDescription: "Nossa abordagem integra diferentes especialidades médicas para tratar o corpo como um todo."
    },
    {
      title: "Baseado em Ciência",
      description: "Protocolos fundamentados em pesquisas científicas recentes sobre longevidade e bem-estar.",
      extendedDescription: "Todos os nossos protocolos são baseados em estudos científicos publicados em revistas de alto impacto."
    }
    // outros benefícios...
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Título e subtítulo centralizados */}
        <h2 className="titulo-principal">Benefícios do Desafio Vitalidade</h2>
        <p className="subtitulo-principal">
          Transforme sua saúde e bem-estar com nosso programa de 30 dias cientificamente desenvolvido.
        </p>
        
        {/* Grid de cards */}
        <div className="cards-container">
          {benefits.map((benefit, index) => (
            <div key={index} className="card-padrao">
              <h3 className="titulo-card">{benefit.title}</h3>
              <p className="texto-card">{benefit.description}</p>
              <p className="texto-secundario">{benefit.extendedDescription}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
