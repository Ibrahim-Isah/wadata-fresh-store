import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Search, X, ArrowLeft, Leaf } from 'lucide-react';
import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import WhatsAppButton from '@/components/WhatsAppButton';
import ProductCard from '@/components/ProductCard';
import LazyImage from '@/components/LazyImage';
import { allProducts } from '@/assets/data/all-products';
import SEO from '@/components/SEO';

// Re-exported for backwards compatibility with existing imports
export { LazyImage };

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  // Ensure scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const categories = useMemo(
    () => ['all', ...Array.from(new Set(allProducts.map((product) => product.category)))],
    []
  );

  // Filter products based on search term and category
  const filteredProducts = useMemo(() => {
    let products = allProducts;

    if (activeCategory !== 'all') {
      products = products.filter((product) => product.category === activeCategory);
    }

    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase();
      products = products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchLower) ||
          product.category.toLowerCase().includes(searchLower) ||
          product.description.toLowerCase().includes(searchLower)
      );
    }

    return products;
  }, [searchTerm, activeCategory]);

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
      <header className='sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/60 shadow-sm'>
        <div className='container mx-auto px-4 py-4'>
          <div className='flex items-center justify-between mb-4'>
            <Link
              to='/'
              className='group flex items-center gap-2 text-foreground hover:text-primary transition-colors'>
              <ArrowLeft className='h-5 w-5 transition-transform group-hover:-translate-x-1' />
              <span className='text-base sm:text-lg font-semibold'>Back to Home</span>
            </Link>
            <div className='flex items-center gap-2'>
              <div className='p-1.5 bg-gradient-fresh rounded-lg'>
                <Leaf className='h-4 w-4 text-white' />
              </div>
              <h1 className='font-display text-xl sm:text-2xl font-bold text-transparent bg-gradient-fresh bg-clip-text'>
                All Products
              </h1>
            </div>
          </div>

          {/* Search Bar */}
          <div className='relative max-w-md mx-auto'>
            <div className='relative'>
              <Search className='absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground' />
              <input
                type='text'
                placeholder='Search products, categories, or descriptions...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='w-full pl-11 pr-11 py-2.5 rounded-full border border-border bg-muted/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary focus:bg-background transition-all'
              />
              {searchTerm && (
                <button
                  onClick={clearSearch}
                  aria-label='Clear search'
                  className='absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors'>
                  <X className='h-4 w-4' />
                </button>
              )}
            </div>
          </div>

          {/* Category filter chips */}
          <div className='mt-4 flex gap-2 overflow-x-auto pb-1 justify-start sm:justify-center [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-semibold capitalize transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground shadow-fresh'
                    : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
                }`}>
                {category === 'all' ? 'All' : category}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Products Section */}
      <section className='py-12 bg-muted/40'>
        <div className='container mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-center mb-12'>
            <h2 className='section-title mb-4'>
              Our Complete{' '}
              <span className='text-transparent bg-gradient-fresh bg-clip-text'>Collection</span>
            </h2>
            <p className='text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto'>
              Browse through our extensive selection of fresh vegetables, fruits, and herbs. All
              sourced daily for maximum freshness.
            </p>
            <p className='mt-3 text-sm font-medium text-muted-foreground'>
              Showing {filteredProducts.length} of {allProducts.length} products
            </p>
          </motion.div>

          {filteredProducts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className='text-center py-16'>
              <div className='text-6xl mb-4'>🔍</div>
              <h3 className='font-display text-2xl font-bold text-foreground mb-2'>
                No products found
              </h3>
              <p className='text-muted-foreground mb-6'>
                Try adjusting your search terms or browse all products.
              </p>
              <Button
                onClick={() => {
                  clearSearch();
                  setActiveCategory('all');
                }}
                variant='outline'
                className='rounded-full border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-colors'>
                Clear Filters
              </Button>
            </motion.div>
          ) : (
            <motion.div
              key={`${activeCategory}-${searchTerm}`}
              variants={containerVariants}
              initial='hidden'
              animate='visible'
              className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
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
