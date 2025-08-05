import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ProductGrid from '@/components/ProductGrid';
import About from '@/components/About';
import Contact from '@/components/Contact';
import WhatsAppButton from '@/components/WhatsAppButton';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className='min-h-screen'>
      <Header />
      <Hero />
      <Features />
      <ProductGrid />
      <About />
      <Contact />
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Index;
