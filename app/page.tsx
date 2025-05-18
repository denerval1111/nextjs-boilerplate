import Header from '../components/Header';
import HeroSection from '../components/HeroSection';

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16">
        <h1 className="text-center text-3xl font-bold mt-8">Desafio Vitalidade</h1>
      <HeroSection />
      <main>
        {/* Outras seções virão aqui */}
      </main>
    </>
  );
}
