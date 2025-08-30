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
import SEO from '@/components/SEO';

const Index = () => {
  const homePageSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Wadata Fresh Store',
    alternateName: 'Fresh Vegetables Abuja',
    url: 'https://wadata-fresh-store.vercel.app',
    logo: '/hero-vegetables.jpg',
    description:
      'Premium fresh vegetables and organic produce delivery service in Abuja, Nigeria. We deliver farm-fresh tomatoes, lettuce, carrots, peppers, onions, and more across FCT.',
    foundingDate: '2019',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'No 5 Gano close, Yoruba mosque, Medical centre gate',
      addressLocality: 'Abuja',
      addressRegion: 'FCT',
      addressCountry: 'Nigeria',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+234-803-289-2443',
      contactType: 'customer service',
      availableLanguage: ['English', 'Hausa'],
    },
    sameAs: ['https://wa.me/2348032892443'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Fresh Vegetables',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: 'Fresh Tomatoes',
            description: 'Locally grown fresh tomatoes from Nigerian farms',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: 'Fresh Lettuce',
            description: 'Crisp organic lettuce perfect for salads',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: 'Fresh Carrots',
            description: 'Sweet and crunchy carrots rich in vitamins',
          },
        },
      ],
    },
  };

  return (
    <div className='min-h-screen'>
      <SEO
        title='Fresh Vegetables Abuja | Wadata Fresh Store - Premium Organic Produce Nigeria'
        description='Premium fresh vegetables delivered in Abuja, Nigeria. 100% organic produce from local farms. Order tomatoes, lettuce, carrots, peppers & more. Fast delivery across FCT.'
        keywords='fresh vegetables Abuja, organic vegetables Nigeria, vegetables delivery Abuja, fresh produce FCT, tomatoes Abuja, lettuce Nigeria, carrots delivery, peppers Abuja, organic farming Nigeria, Wadata fresh store, vegetables online Abuja, farm fresh Nigeria'
        url='https://wadata-fresh-store.vercel.app/'
        image='/hero-vegetables.jpg'
        schema={homePageSchema}
      />
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
