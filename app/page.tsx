import React from 'react';
import Footer from '@/components/Footer';
import PillarsSection from '@/components/PillarsSection';

export default function HomePage() {
  return (
    <div style={{ overflow: 'hidden' }}>
      {/* Hero Section inline */}
      <div 
        style={{
          position: 'relative',
          width: '100%',
          height: '100vh',
          minHeight: '600px',
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=1920&auto=format&fit=crop )',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
          margin: 0,
          padding: 0,
          borderBottom: '5px solid #333'
        }}
      >
        <div style={{ maxWidth: '800px', padding: '20px' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            Envelheça com Vitalidade: Transforme sua Saúde em 30 Dias
          </h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
            Um programa multidisciplinar baseado em ciência para longevidade saudável
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
            <a 
              href="/inscricao" 
              style={{
                backgroundColor: '#4CAF50',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.375rem',
                fontWeight: 'bold',
                textDecoration: 'none',
                display: 'inline-block'
              }}
            >
              Inscreva-se Agora
            </a>
            <a 
              href="/sobre/programa" 
              style={{
                backgroundColor: 'transparent',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.375rem',
                fontWeight: 'bold',
                textDecoration: 'none',
                border: '1px solid white',
                display: 'inline-block'
              }}
            >
              Saiba Mais
            </a>
          </div>
        </div>
      </div>
      
      {/* Benefits Section inline */}
      <div style={{ backgroundColor: 'white', padding: '2rem 0', margin: 0 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem', color: '#333' }}>
              Benefícios do Desafio Vitalidade
            </h2>
            <p style={{ fontSize: '1.25rem', color: '#666', maxWidth: '800px', margin: '0 auto' }}>
              Transforme sua saúde e bem-estar com nosso programa de 30 dias cientificamente desenvolvido.
            </p>
          </div>
          
          {/* Benefícios em grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {/* Benefício 1 */}
            <div style={{ backgroundColor: '#fff', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', borderTop: '4px solid #4CAF50', padding: '2rem' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>Abordagem Multidisciplinar</h3>
              <p style={{ color: '#666', marginBottom: '1rem' }}>Combinamos medicina regenerativa, nutrologia e saúde mental para uma transformação completa.</p>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>Nossa abordagem integra diferentes especialidades médicas para tratar o corpo como um todo.</p>
            </div>
            
            {/* Benefício 2 */}
            <div style={{ backgroundColor: '#fff', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', borderTop: '4px solid #4CAF50', padding: '2rem' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>Baseado em Ciência</h3>
              <p style={{ color: '#666', marginBottom: '1rem' }}>Protocolos fundamentados em pesquisas científicas recentes sobre longevidade e bem-estar.</p>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>Todos os nossos protocolos são baseados em estudos científicos publicados em revistas de alto impacto.</p>
            </div>
          </div>
        </div>
      </div>
      
      <PillarsSection />
    </div>
  );
}
