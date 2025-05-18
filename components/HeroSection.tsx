import React from 'react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-[600px] flex items-center bg-verde-vitalidade text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold mb-6">
            Envelheça com Vitalidade: Transforme sua Saúde em 30 Dias
          </h1>
          <p className="text-xl mb-8">
            Um programa multidisciplinar baseado em ciência para longevidade saudável
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/inscricao" className="bg-white text-verde-vitalidade px-8 py-4 text-center font-medium rounded">
              Inscreva-se Agora
            </Link>
            <Link href="/sobre/programa" className="border-2 border-white px-8 py-4 text-center font-medium rounded">
              Saiba Mais
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
