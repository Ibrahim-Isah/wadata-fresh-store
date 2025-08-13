import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Star } from 'lucide-react';
import { openWhatsApp, createProductInquiryMessage } from '@/lib/whatsapp';
import tomatoesImage from '@/assets/tomatoes.jpg';
import carrotsImage from '@/assets/carrots.jpg';
import lettuceImage from '@/assets/lettuce.jpg';
import peppersImage from '@/assets/peppers.jpg';
import broccoliImage from '@/assets/broccoli.jpg';
import onionsImage from '@/assets/onions.jpg';

const products = [
  {
    id: 1,
    name: 'Fresh Tomatoes',
    rating: 4.8,
    image: tomatoesImage,
    description: 'Juicy red tomatoes',
    category: 'fruits',
  },
  {
    id: 2,
    name: 'Organic Carrots',
    rating: 4.9,
    image: carrotsImage,
    description: 'Sweet orange carrots',
    category: 'roots',
  },
  {
    id: 3,
    name: 'Green Lettuce',
    rating: 4.7,
    image: lettuceImage,
    description: 'Crispy fresh lettuce',
    category: 'leafy',
  },
  {
    id: 4,
    name: 'Bell Peppers',
    rating: 4.6,
    image: peppersImage,
    description: 'Colorful bell peppers',
    category: 'fruits',
  },
  {
    id: 5,
    name: 'Fresh Broccoli',
    rating: 4.8,
    image: broccoliImage,
    description: 'Nutritious green broccoli',
    category: 'cruciferous',
  },
  {
    id: 6,
    name: 'White Onions',
    rating: 4.5,
    image: onionsImage,
    description: 'Fresh white onions',
    category: 'alliums',
  },
];

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
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}>
              <Card className='overflow-hidden bg-card border-border/50 hover:shadow-fresh transition-all duration-300'>
                <div className='relative overflow-hidden'>
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    src={product.image}
                    alt={product.name}
                    className='w-full h-64 object-cover'
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
                    <ShoppingCart className='h-4 w-4 mr-2' />
                    Order Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductGrid;
