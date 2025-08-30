import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Star, Search, X } from 'lucide-react';
import { useState, useEffect, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { createProductInquiryMessage, openWhatsApp } from '@/lib/whatsapp';
import WhatsAppButton from '@/components/WhatsAppButton';
import { allProducts } from '@/assets/data/all-products';
import SEO from '@/components/SEO';

// Lazy loading image component
export const LazyImage = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className: string;
}) => {
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
  const [searchTerm, setSearchTerm] = useState('');

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

  // Filter products based on search term
  const filteredProducts = useMemo(() => {
    if (!searchTerm.trim()) {
      return allProducts;
    }

    const searchLower = searchTerm.toLowerCase();
    return allProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(searchLower) ||
        product.category.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower)
    );
  }, [searchTerm]);

  const handleOrderNow = (productName: string) => {
    const message = createProductInquiryMessage(productName);
    openWhatsApp({ message });
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  const productsPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Fresh Vegetables Products - Abuja Nigeria',
    description:
      'Browse our complete collection of fresh vegetables available for delivery in Abuja, Nigeria. Tomatoes, lettuce, carrots, peppers, onions and more organic produce.',
    url: 'https://wadata-fresh-store.vercel.app/products',
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: allProducts.length,
      itemListElement: allProducts.slice(0, 10).map((product, index) => ({
        '@type': 'Product',
        position: index + 1,
        name: product.name,
        description: product.description,
        image: product.image,
        category: product.category,
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          priceCurrency: 'NGN',
        },
      })),
    },
  };

  return (
    <div className='min-h-screen bg-background'>
      <SEO
        title='Fresh Vegetables Products Abuja | Tomatoes, Lettuce, Carrots Delivery Nigeria'
        description='Browse our complete collection of fresh vegetables available for delivery in Abuja, Nigeria. Order tomatoes, lettuce, carrots, peppers, onions and more organic produce online.'
        keywords='fresh vegetables Abuja, tomatoes Abuja, lettuce Nigeria, carrots delivery, peppers Abuja, onions Nigeria, organic vegetables FCT, vegetables online Abuja, farm fresh produce Nigeria'
        url='https://wadata-fresh-store.vercel.app/products'
        image='/tomatoes.jpg'
        schema={productsPageSchema}
      />
      {/* Header */}
      <header className='sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border'>
        <div className='container mx-auto px-4 py-4'>
          <div className='flex items-center justify-between mb-4'>
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

          {/* Search Bar */}
          <div className='relative max-w-md mx-auto'>
            <div className='relative'>
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground' />
              <input
                type='text'
                placeholder='Search products, categories, or descriptions...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='w-full pl-10 pr-10 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-vegetable-green focus:border-vegetable-green transition-colors'
              />
              {searchTerm && (
                <button
                  onClick={clearSearch}
                  className='absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground hover:text-foreground transition-colors'>
                  <X className='h-4 w-4' />
                </button>
              )}
            </div>
            {searchTerm && (
              <div className='absolute top-full left-0 right-0 mt-1 text-sm text-muted-foreground text-center'>
                {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
              </div>
            )}
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

          {filteredProducts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className='text-center py-12'>
              <div className='text-6xl mb-4'>🔍</div>
              <h3 className='text-2xl font-bold text-foreground mb-2'>No products found</h3>
              <p className='text-muted-foreground mb-4'>
                Try adjusting your search terms or browse all products.
              </p>
              <Button
                onClick={clearSearch}
                variant='outline'
                className='hover:bg-vegetable-green hover:text-white transition-colors'>
                Clear Search
              </Button>
            </motion.div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial='hidden'
              animate='visible'
              className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}>
                  <Card className='overflow-hidden bg-card border-border/50 hover:shadow-fresh transition-all duration-300'>
                    <div className='relative overflow-hidden h-48'>
                      <LazyImage
                        src={
                          product.image ||
                          'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        }
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

                      <div className='flex items-center justify-between mb-4'>
                        <span className='text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full capitalize'>
                          {product.category}
                        </span>
                      </div>

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
          )}
        </div>
      </section>
      <WhatsAppButton />
    </div>
  );
};

export default Products;
