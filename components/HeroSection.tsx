import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative min-h-[600px] flex items-center text-white">
      {/* Imagem de fundo com overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-background.jpg" 
          alt="Desafio Vitalidade - Transforme sua saúde"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-verde-vitalidade/70"></div>
      </div>
      
      {/* Conteúdo - aumentando o z-index para garantir que apareça sobre a imagem */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-3xl mx-auto md:mx-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Envelheça com Vitalidade: Transforme sua Saúde em 30 Dias
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Um programa multidisciplinar baseado em ciência para longevidade saudável, 
            combinando medicina regenerativa, nutrologia e saúde mental.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/inscricao" className="btn-primary-light px-8 py-4 text-center text-lg font-medium">
              Inscreva-se Agora
            </Link>
            <Link href="/sobre/programa" className="btn-outline-light px-8 py-4 text-center text-lg font-medium">
              Saiba Mais
            </Link>
          </div>
          
          {/* Estatísticas ou destaques */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">30</div>
              <div className="text-sm md:text-base text-white/80">Dias de Programa</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">4</div>
              <div className="text-sm md:text-base text-white/80">Pilares Integrados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">20</div>
              <div className="text-sm md:text-base text-white/80">Alunos por Turma</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">100%</div>
              <div className="text-sm md:text-base text-white/80">Online</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
