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
  <div className="w-full relative" style={{ margin: 0, padding: 0 }}>
  {/* Container externo com altura fixa */}
 <div 
  style={{
    position: 'relative',
    width: '100%',
    height: '100vh',
    minHeight: '600px',
    margin: 0,
    padding: 0,
    overflow: 'hidden'
  }}
>
        {/* Imagem de fundo com posição absoluta para cobrir todo o container */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: 0
          }}
        ></div>
        
        {/* Conteúdo centralizado */}
        <div 
          style={{
            position: 'relative',
            zIndex: 1,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
        >
          <div style={{ maxWidth: '800px', textAlign: 'center', color: 'white' }}>
            <h1 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 'bold', 
              marginBottom: '1rem'
            }}>
              {title}
            </h1>
            <p style={{ 
              fontSize: '1.25rem', 
              marginBottom: '2rem'
            }}>
              {subtitle}
            </p>
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '1rem',
              alignItems: 'center'
            }}>
              <a 
                href={ctaLink} 
                style={{
                  backgroundColor: '#4CAF50',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.375rem',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  display: 'inline-block',
                  textAlign: 'center'
                }}
              >
                {ctaText}
              </a>
              {secondaryCtaText && secondaryCtaLink && (
                <a 
                  href={secondaryCtaLink} 
                  style={{
                    backgroundColor: 'transparent',
                    color: 'white',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '0.375rem',
                    fontWeight: 'bold',
                    textDecoration: 'none',
                    border: '1px solid white',
                    display: 'inline-block',
                    textAlign: 'center'
                  }}
                >
                  {secondaryCtaText}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
