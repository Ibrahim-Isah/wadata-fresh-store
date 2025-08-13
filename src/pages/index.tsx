import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ProductGrid from '@/components/ProductGrid';
import About from '@/components/About';
import Contact from '@/components/Contact';
import WhatsAppButton from '@/components/WhatsAppButton';
import Footer from '@/components/Footer';
import TeamSection from '@/components/TeamsSection';
import CertificationSection from '@/components/CertificationSection';

const Index = () => {
  return (
    <div className='min-h-screen'>
      <Header />
      <Hero />
      <ProductGrid />
      <Features />
      <About />
      <CertificationSection />
      <TeamSection />
      <Contact />
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Index;
