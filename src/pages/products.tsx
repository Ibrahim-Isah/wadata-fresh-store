import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Star } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { createProductInquiryMessage, openWhatsApp } from '@/lib/whatsapp';
import WhatsAppButton from '@/components/WhatsAppButton';
import { allProducts } from '@/assets/data/all-products';

// Product data for all 61 products

// Lazy loading image component
const LazyImage = ({ src, alt, className }: { src: string; alt: string; className: string }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className={className}>
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsLoaded(true)}
        />
      )}
      {!isLoaded && isInView && (
        <div className='w-full h-full bg-muted/50 animate-pulse flex items-center justify-center'>
          <div className='text-muted-foreground text-sm'>Loading...</div>
        </div>
      )}
    </div>
  );
};

const Products = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const handleOrderNow = (productName: string) => {
    const message = createProductInquiryMessage(productName);
    openWhatsApp({ message });
  };

  return (
    <div className='min-h-screen bg-background'>
      {/* Header */}
      <header className='sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border'>
        <div className='container mx-auto px-4 py-4'>
          <div className='flex items-center justify-between'>
            <Link
              to='/'
              className='flex items-center space-x-2 text-foreground hover:text-vegetable-green transition-colors'>
              <ArrowLeft className='h-5 w-5' />
              <span className='text-lg font-semibold'>Back to Home</span>
            </Link>
            <h1 className='text-2xl font-bold text-transparent bg-gradient-fresh bg-clip-text'>
              All Products
            </h1>
          </div>
        </div>
      </header>

      {/* Products Section */}
      <section className='py-12 bg-muted/30'>
        <div className='container mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-center mb-12'>
            <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-4'>
              Our Complete{' '}
              <span className='text-transparent bg-gradient-fresh bg-clip-text'>Collection</span>
            </h2>
            <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
              Browse through our extensive selection of fresh vegetables, fruits, and herbs. All
              sourced daily for maximum freshness.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {allProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}>
                <Card className='overflow-hidden bg-card border-border/50 hover:shadow-fresh transition-all duration-300'>
                  <div className='relative overflow-hidden h-48'>
                    <LazyImage
                      src={product.image || ''}
                      alt={product.name}
                      className='w-full h-full'
                    />
                    <div className='absolute top-4 right-4 bg-vegetable-green text-white px-3 py-1 rounded-full text-sm font-medium'>
                      Fresh
                    </div>
                  </div>

                  <CardContent className='p-6'>
                    <div className='flex items-center justify-between mb-2'>
                      <h3 className='text-xl font-bold text-foreground'>{product.name}</h3>
                      <div className='flex items-center space-x-1'>
                        <Star className='h-4 w-4 fill-vegetable-yellow text-vegetable-yellow' />
                        <span className='text-sm text-muted-foreground'>{product.rating}</span>
                      </div>
                    </div>

                    <p className='text-muted-foreground mb-4'>{product.description}</p>

                    <Button
                      size='sm'
                      onClick={() => handleOrderNow(product.name)}
                      className='bg-gradient-fresh hover:shadow-glow transition-all duration-300 w-full'>
                      <ShoppingCart className='h-4 w-4 mr-1' />
                      Order Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <WhatsAppButton />
    </div>
  );
};

export default Products;
