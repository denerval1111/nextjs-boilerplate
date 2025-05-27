import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function MedicinaRegenerativaPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-cinza-escuro">
              Medicina Regenerativa
            </h1>
            <p className="text-xl text-cinza-medio max-w-3xl mx-auto">
              Abordagem não intervencionista para otimização celular e longevidade
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-cinza-escuro">
              O que é Medicina Regenerativa?
            </h2>
            <p className="text-lg text-cinza-medio mb-6">
              A medicina regenerativa não intervencionista foca em estimular os mecanismos naturais do corpo para 
              reparação e regeneração celular, promovendo a longevidade saudável através de protocolos cientificamente validados.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              <div className="border-l-4 border-verde-vitalidade pl-4">
                <h3 className="text-xl font-medium mb-3 text-cinza-escuro">Autofagia</h3>
                <p className="text-cinza-medio">
                  Processo natural de limpeza celular que remove componentes danificados e toxinas, 
                  essencial para a saúde celular e longevidade.
                </p>
              </div>
              
              <div className="border-l-4 border-verde-vitalidade pl-4">
                <h3 className="text-xl font-medium mb-3 text-cinza-escuro">Telômeros</h3>
                <p className="text-cinza-medio">
                  Proteção das extremidades dos cromossomos, cujo comprimento está associado ao 
                  envelhecimento celular e longevidade.
                </p>
              </div>
              
              <div className="border-l-4 border-verde-vitalidade pl-4">
                <h3 className="text-xl font-medium mb-3 text-cinza-escuro">Células-tronco</h3>
                <p className="text-cinza-medio">
                  Estímulo natural à ativação e funcionamento das células-tronco do próprio corpo, 
                  fundamentais para regeneração tecidual.
                </p>
              </div>
              
              <div className="border-l-4 border-verde-vitalidade pl-4">
                <h3 className="text-xl font-medium mb-3 text-cinza-escuro">Metabolismo Celular</h3>
                <p className="text-cinza-medio">
                  Otimização das funções mitocondriais e processos energéticos celulares para 
                  melhor desempenho e longevidade.
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
