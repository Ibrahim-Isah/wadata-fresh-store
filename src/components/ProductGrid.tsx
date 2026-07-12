import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getRandomProducts } from '@/assets/data/all-products';
import ProductCard from '@/components/ProductCard';

const products = getRandomProducts();

const ProductGrid = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id='products' className='py-24 bg-muted/40'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-16'>
          <span className='section-badge mb-4'>Our Produce</span>
          <h2 className='section-title mb-4'>
            Fresh <span className='text-transparent bg-gradient-fresh bg-clip-text'>Products</span>
          </h2>
          <p className='text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto'>
            Discover our wide selection of farm-fresh vegetables, picked daily for maximum freshness
            and flavor.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8'>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>

        {/* View All Products Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className='text-center mt-14'>
          <Link to='/products'>
            <Button
              size='lg'
              variant='outline'
              className='group rounded-full border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8 py-6'>
              View All Products
              <ArrowRight className='h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300' />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductGrid;
