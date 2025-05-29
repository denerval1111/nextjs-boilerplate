import React from 'react';



export default function GerenciamentoPesoPage() {
  return (
    <>
     
      <main className="min-h-screen py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-cinza-escuro">
              Gerenciamento de Peso
            </h1>
            <p className="text-xl text-cinza-medio max-w-3xl mx-auto">
              Estratégias personalizadas para composição corporal saudável e metabolismo otimizado
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-cinza-escuro">
              Abordagem de Gerenciamento de Peso do Desafio Vitalidade
            </h2>
            <p className="text-lg text-cinza-medio mb-6">
              Nossa abordagem para gerenciamento de peso vai além da simples perda de quilos, focando na 
              composição corporal ideal, metabolismo saudável e hábitos sustentáveis para o longo prazo.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              <div className="border-l-4 border-verde-vitalidade pl-4">
                <h3 className="text-xl font-medium mb-3 text-cinza-escuro">Metabolismo Otimizado</h3>
                <p className="text-cinza-medio">
                  Estratégias nutricionais e comportamentais para melhorar a eficiência metabólica 
                  e a utilização de energia pelo corpo.
                </p>
              </div>
              
              <div className="border-l-4 border-verde-vitalidade pl-4">
                <h3 className="text-xl font-medium mb-3 text-cinza-escuro">Composição Corporal</h3>
                <p className="text-cinza-medio">
                  Foco na redução de gordura e preservação ou aumento de massa muscular para 
                  um corpo mais funcional e saudável.
                </p>
              </div>
              
              <div className="border-l-4 border-verde-vitalidade pl-4">
                <h3 className="text-xl font-medium mb-3 text-cinza-escuro">Hábitos Sustentáveis</h3>
                <p className="text-cinza-medio">
                  Desenvolvimento de rotinas alimentares e de atividade física que podem ser 
                  mantidas a longo prazo, evitando o efeito sanfona.
                </p>
              </div>
              
              <div className="border-l-4 border-verde-vitalidade pl-4">
                <h3 className="text-xl font-medium mb-3 text-cinza-escuro">Abordagem Personalizada</h3>
                <p className="text-cinza-medio">
                  Reconhecimento das diferenças individuais em metabolismo, genética e estilo de vida 
                  para criar estratégias verdadeiramente eficazes.
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
    
    </>
  );
}
