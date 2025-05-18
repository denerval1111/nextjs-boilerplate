import React from 'react';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundImage?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title = "Envelheça com Vitalidade: Transforme sua Saúde em 30 Dias",
  subtitle = "Um programa multidisciplinar baseado em ciência para longevidade saudável",
  ctaText = "Inscreva-se Agora",
  ctaLink = "/inscricao",
  secondaryCtaText,
  secondaryCtaLink,
  backgroundImage = "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=1920&auto=format&fit=crop", // URL externa padrão
}) => {
  // Garantir que sempre temos uma imagem de fundo, mesmo se não for passada
  const bgImage = backgroundImage || "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=1920&auto=format&fit=crop";
  
  return (
    <section 
      className="w-full h-screen relative flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '500px', // Altura mínima para garantir visibilidade em telas pequenas
        width: '100%'
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">
            {title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-slideUp">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={ctaLink} className="btn-primary text-center">
              {ctaText}
            </a>
            {secondaryCtaText && secondaryCtaLink && (
              <a href={secondaryCtaLink} className="btn-secondary text-center">
                {secondaryCtaText}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
