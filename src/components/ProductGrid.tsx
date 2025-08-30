import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { openWhatsApp, createProductInquiryMessage } from '@/lib/whatsapp';
import { getRandomProducts } from '@/assets/data/all-products';
import { LazyImage } from '@/pages/products';

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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const handleOrderNow = (productName: string) => {
    const message = createProductInquiryMessage(productName);
    openWhatsApp({ message });
  };

  return (
    <section id='products' className='py-20 bg-muted/30'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-4'>
            Fresh <span className='text-transparent bg-gradient-fresh bg-clip-text'>Products</span>
          </h2>
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
            Discover our wide selection of farm-fresh vegetables, picked daily for maximum freshness
            and flavor.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {products.map((product) => (
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

        {/* View All Products Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className='text-center mt-12'>
          <Link to='/products'>
            <Button
              size='lg'
              variant='outline'
              className='group border-vegetable-green text-vegetable-green hover:bg-vegetable-green hover:text-white transition-all duration-300 px-8 py-3'>
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
