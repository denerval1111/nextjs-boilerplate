import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function SaudeMentalPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-cinza-escuro">
              Saúde Mental
            </h1>
            <p className="text-xl text-cinza-medio max-w-3xl mx-auto">
              Equilíbrio emocional e bem-estar psicológico para uma vida plena
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-cinza-escuro">
              Abordagem Psiquiátrica do Desafio Vitalidade
            </h2>
            <p className="text-lg text-cinza-medio mb-6">
              Nossa abordagem de saúde mental integra técnicas de psiquiatria moderna com práticas de bem-estar 
              emocional e espiritual, focando no enfrentamento dos desafios da vida moderna.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              <div className="border-l-4 border-verde-vitalidade pl-4">
                <h3 className="text-xl font-medium mb-3 text-cinza-escuro">Técnicas de Motivação</h3>
                <p className="text-cinza-medio">
                  Estratégias baseadas em psicologia positiva e neurociência para aumentar a motivação 
                  e manter o engajamento com hábitos saudáveis.
                </p>
              </div>
              
              <div className="border-l-4 border-verde-vitalidade pl-4">
                <h3 className="text-xl font-medium mb-3 text-cinza-escuro">Controle da Ansiedade</h3>
                <p className="text-cinza-medio">
                  Técnicas de respiração, mindfulness e regulação emocional para reduzir a ansiedade 
                  e melhorar a qualidade de vida.
                </p>
              </div>
              
              <div className="border-l-4 border-verde-vitalidade pl-4">
                <h3 className="text-xl font-medium mb-3 text-cinza-escuro">Combate à Procrastinação</h3>
                <p className="text-cinza-medio">
                  Métodos práticos para superar a procrastinação e desenvolver disciplina consistente 
                  para alcançar objetivos de saúde.
                </p>
              </div>
              
              <div className="border-l-4 border-verde-vitalidade pl-4">
                <h3 className="text-xl font-medium mb-3 text-cinza-escuro">Bem-estar Espiritual</h3>
                <p className="text-cinza-medio">
                  Práticas que promovem conexão com propósito e significado, essenciais para 
                  a saúde mental e longevidade.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="/inscricao" 
              className="bg-verde-vitalidade text-white px-8 py-3 rounded-md font-medium hover:bg-verde-vitalidade-dark transition-colors inline-block"
            >
              Participe do Desafio Vitalidade
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
