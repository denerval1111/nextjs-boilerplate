import React from 'react';

export default function SobreProgramaPage() {
  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* Cabeçalho da página */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-cinza-escuro mb-4">O Programa Desafio Vitalidade</h1>
          <p className="text-xl text-cinza-medio max-w-3xl mx-auto">
            Um programa multidisciplinar de 30 dias baseado em ciência para transformar sua saúde e longevidade.
          </p>
        </div>
        
        {/* Visão geral do programa */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-verde-vitalidade mb-6">Visão Geral</h2>
            <p className="text-cinza-medio mb-4">
              O Desafio Vitalidade é um programa de transformação de 30 dias que integra os mais recentes avanços científicos em medicina regenerativa não intervencionista, nutrologia, saúde mental e gerenciamento de peso.
            </p>
            <p className="text-cinza-medio mb-4">
              Desenvolvido por uma equipe multidisciplinar de especialistas, o programa oferece uma abordagem completa para melhorar sua saúde, aumentar sua energia e promover longevidade saudável.
            </p>
            <p className="text-cinza-medio">
              Ao longo de 30 dias, você receberá orientações personalizadas, materiais educativos, planos alimentares, exercícios específicos e técnicas de gerenciamento de estresse, tudo baseado em evidências científicas e adaptado às suas necessidades individuais.
            </p>
          </div>
        </div>
        
        {/* Como funciona */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-cinza-escuro text-center mb-8">Como Funciona</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-verde-vitalidade/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-verde-vitalidade text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-cinza-escuro mb-3">Avaliação Inicial</h3>
              <p className="text-cinza-medio">
                Começamos com uma avaliação completa do seu estado atual de saúde, objetivos e necessidades específicas para personalizar o programa.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-verde-vitalidade/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-verde-vitalidade text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-cinza-escuro mb-3">Implementação Guiada</h3>
              <p className="text-cinza-medio">
                Durante 30 dias, você seguirá um plano personalizado com orientações diárias, suporte contínuo e ajustes conforme necessário.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-verde-vitalidade/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-verde-vitalidade text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-cinza-escuro mb-3">Acompanhamento Contínuo</h3>
              <p className="text-cinza-medio">
                Após o período inicial, você receberá orientações para manter e aprimorar os resultados alcançados a longo prazo.
              </p>
            </div>
          </div>
        </div>
        
        {/* O que está incluído */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-cinza-escuro text-center mb-8">O Que Está Incluído</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-verde-vitalidade/20 flex items-center justify-center mr-4">
                <svg className="h-5 w-5 text-verde-vitalidade" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium text-cinza-escuro">Plano Alimentar Personalizado</h3>
                <p className="mt-1 text-cinza-medio">Baseado nas culinárias mediterrânea e asiática, adaptado às suas necessidades e preferências.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-verde-vitalidade/20 flex items-center justify-center mr-4">
                <svg className="h-5 w-5 text-verde-vitalidade" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium text-cinza-escuro">Protocolos de Exercícios</h3>
                <p className="mt-1 text-cinza-medio">Atividades físicas adaptadas ao seu nível de condicionamento e objetivos específicos.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-verde-vitalidade/20 flex items-center justify-center mr-4">
                <svg className="h-5 w-5 text-verde-vitalidade" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium text-cinza-escuro">Técnicas de Saúde Mental</h3>
                <p className="mt-1 text-cinza-medio">Práticas de mindfulness, gerenciamento de estresse e melhoria do sono.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-verde-vitalidade/20 flex items-center justify-center mr-4">
                <svg className="h-5 w-5 text-verde-vitalidade" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium text-cinza-escuro">Suporte da Comunidade</h3>
                <p className="mt-1 text-cinza-medio">Acesso a um grupo exclusivo de participantes para compartilhar experiências e motivação.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-verde-vitalidade/20 flex items-center justify-center mr-4">
                <svg className="h-5 w-5 text-verde-vitalidade" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium text-cinza-escuro">Material Educativo</h3>
                <p className="mt-1 text-cinza-medio">Vídeos, e-books e guias práticos sobre todos os aspectos do programa.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-verde-vitalidade/20 flex items-center justify-center mr-4">
                <svg className="h-5 w-5 text-verde-vitalidade" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium text-cinza-escuro">Acompanhamento Profissional</h3>
                <p className="mt-1 text-cinza-medio">Suporte de especialistas para esclarecer dúvidas e ajustar o programa conforme necessário.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="bg-cinza-claro rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-cinza-escuro mb-4">Pronto para Transformar sua Saúde?</h2>
          <p className="text-lg text-cinza-medio mb-6 max-w-2xl mx-auto">
            Junte-se a milhares de pessoas que já transformaram sua saúde e qualidade de vida com o Desafio Vitalidade.
          </p>
          <a 
            href="/inscricao" 
            className="inline-block bg-verde-vitalidade text-white py-3 px-8 rounded-md font-medium hover:bg-verde-vitalidade/90 transition-colors"
          >
            Inscreva-se Agora
          </a>
        </div>
      </div>
    </div>
  );
}
