import React from 'react';
import Header from '../components/Header';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16">
        <section className="bg-verde-vitalidade/10 py-16">
          <div className="container-custom mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-verde-vitalidade">
                Envelheça com Vitalidade: Transforme sua Saúde em 30 Dias
              </h1>
              <p className="text-xl text-cinza-medio mb-8">
                Um programa multidisciplinar baseado em ciência para longevidade saudável
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/inscricao" className="btn-primary px-6 py-3 text-center">
                  Inscreva-se Agora
                </a>
                <a href="/sobre/programa" className="btn-secondary px-6 py-3 text-center">
                  Saiba Mais
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
