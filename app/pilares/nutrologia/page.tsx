import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NutrologiaPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-cinza-escuro">
              Nutrologia
            </h1>
            <p className="text-xl text-cinza-medio max-w-3xl mx-auto">
              Alimentação personalizada e suplementação baseada em evidências para otimização metabólica
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-cinza-escuro">
              Abordagem Nutricional do Desafio Vitalidade
            </h2>
            <p className="text-lg text-cinza-medio mb-6">
              Nossa abordagem nutricional combina os princípios das culinárias mediterrânea e asiática, 
              adaptados às necessidades individuais, com foco na otimização metabólica e suplementação estratégica.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              <div className="border-l-4 border-verde-vitalidade pl-4">
                <h3 className="text-xl font-medium mb-3 text-cinza-escuro">Culinária Mediterrânea</h3>
                <p className="text-cinza-medio">
                  Padrão alimentar rico em azeite de oliva, peixes, vegetais, legumes e grãos integrais, 
                  associado à longevidade e saúde cardiovascular.
                </p>
              </div>
              
              <div className="border-l-4 border-verde-vitalidade pl-4">
                <h3 className="text-xl font-medium mb-3 text-cinza-escuro">Culinária Asiática</h3>
                <p className="text-cinza-medio">
                  Incorporação de alimentos fermentados, chás, algas e especiarias com propriedades 
                  anti-inflamatórias e antioxidantes.
                </p>
              </div>
              
              <div className="border-l-4 border-verde-vitalidade pl-4">
                <h3 className="text-xl font-medium mb-3 text-cinza-escuro">Suplementação Estratégica</h3>
                <p className="text-cinza-medio">
                  Recomendações personalizadas de suplementos baseadas em evidências científicas 
                  para otimização metabólica e celular.
                </p>
              </div>
              
              <div className="border-l-4 border-verde-vitalidade pl-4">
                <h3 className="text-xl font-medium mb-3 text-cinza-escuro">Atividade Física Integrada</h3>
                <p className="text-cinza-medio">
                  Protocolos de exercícios adaptados ao perfil individual, combinados com a 
                  nutrição para maximizar resultados metabólicos.
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
