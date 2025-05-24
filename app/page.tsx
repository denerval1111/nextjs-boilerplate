import React from 'react';
import Footer from '@/components/Footer';
import HeroWithBenefits from '@/components/HeroWithBenefits';
import PillarsSection from '@/components/PillarsSection';

export default function HomePage() {
  return (
    <>
      <HeroWithBenefits 
        title="Envelheça com Vitalidade: Transforme sua Saúde em 30 Dias"
        subtitle="Um programa multidisciplinar baseado em ciência para longevidade saudável"
        ctaText="Inscreva-se Agora"
        ctaLink="/inscricao"
        secondaryCtaText="Saiba Mais"
        secondaryCtaLink="/sobre/programa"
        backgroundImage="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=1920&auto=format&fit=crop"
      />
      <PillarsSection />
    </>
   );
}
