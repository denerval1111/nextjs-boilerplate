import React from 'react';

export default function ContatoPage() {
  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* Cabeçalho da página */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-cinza-escuro mb-4">Entre em Contato</h1>
          <p className="text-xl text-cinza-medio max-w-3xl mx-auto">
            Estamos aqui para responder suas dúvidas e ajudar você a iniciar sua jornada de transformação.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Formulário de contato */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold text-cinza-escuro mb-6">Envie uma mensagem</h2>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-cinza-escuro mb-1">Nome completo</label>
                  <input 
                    type="text" 
                    id="nome" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-verde-vitalidade focus:border-verde-vitalidade"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-cinza-escuro mb-1">E-mail</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-verde-vitalidade focus:border-verde-vitalidade"
                    placeholder="seu.email@exemplo.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="assunto" className="block text-sm font-medium text-cinza-escuro mb-1">Assunto</label>
                  <select 
                    id="assunto" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-verde-vitalidade focus:border-verde-vitalidade"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="duvidas">Dúvidas sobre o programa</option>
                    <option value="inscricao">Problemas com inscrição</option>
                    <option value="parcerias">Propostas de parceria</option>
                    <option value="outros">Outros assuntos</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-cinza-escuro mb-1">Mensagem</label>
                  <textarea 
                    id="mensagem" 
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-verde-vitalidade focus:border-verde-vitalidade"
                    placeholder="Digite sua mensagem aqui..."
                  ></textarea>
                </div>
                
                <div className="pt-2">
                  <button 
                    type="submit" 
                    className="w-full bg-verde-vitalidade text-white py-3 px-6 rounded-md font-medium hover:bg-verde-vitalidade/90 transition-colors"
                  >
                    Enviar Mensagem
                  </button>
                </div>
              </form>
            </div>
            
            {/* Informações de contato */}
            <div>
              <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                <h2 className="text-2xl font-semibold text-cinza-escuro mb-6">Informações de Contato</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-verde-vitalidade/20 flex items-center justify-center mr-3">
                      <svg className="h-5 w-5 text-verde-vitalidade" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-cinza-escuro">E-mail</h3>
                      <p className="mt-1 text-cinza-medio">contato@desafiovitalidade.com.br</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-verde-vitalidade/20 flex items-center justify-center mr-3">
                      <svg className="h-5 w-5 text-verde-vitalidade" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-cinza-escuro">Telefone</h3>
                      <p className="mt-1 text-cinza-medio">(11) 9999-9999</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-verde-vitalidade/20 flex items-center justify-center mr-3">
                      <svg className="h-5 w-5 text-verde-vitalidade" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-cinza-escuro">Horário de Atendimento</h3>
                      <p className="mt-1 text-cinza-medio">Segunda a Sexta: 9h às 18h</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* FAQ */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-semibold text-cinza-escuro mb-6">Perguntas Frequentes</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-cinza-escuro">Quanto tempo dura o programa?</h3>
                    <p className="mt-1 text-cinza-medio">O Desafio Vitalidade tem duração de 30 dias, com acompanhamento completo durante todo o período.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-cinza-escuro">Preciso ter experiência prévia?</h3>
                    <p className="mt-1 text-cinza-medio">Não, o programa é adequado para todos os níveis, desde iniciantes até pessoas com experiência em cuidados com a saúde.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-cinza-escuro">Como funciona o acompanhamento?</h3>
                    <p className="mt-1 text-cinza-medio">Você terá acesso a materiais, vídeos e um grupo de suporte. No plano premium, também há consultas individuais.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
