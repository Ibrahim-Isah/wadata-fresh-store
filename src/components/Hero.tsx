import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Leaf, Star } from 'lucide-react';
import { useState, useEffect } from 'react';
import { openWhatsApp } from '@/lib/whatsapp';

import heroImage from '@/assets/hero-vegetables.jpg';
import carrots from '@/assets/carrots.jpg';
import lettuce from '@/assets/lettuce.jpg';
import brococoli from '@/assets/broccoli.jpg';

const heroImages = [heroImage, carrots, brococoli, lettuce];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const handleShopNow = () => {
    const message =
      "Hi! I'd like to browse your fresh vegetables and place an order. Can you help me?";
    openWhatsApp({ message });
  };

  const handleLearnMore = () => {
    const message =
      "Hi! I'd like to learn more about your fresh vegetables and services. Can you provide more information?";
    openWhatsApp({ message });
  };

  return (
    <section
      id='home'
      className='relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden'>
      <div className='container mx-auto px-4 py-20 pt-32'>
        <div className='grid lg:grid-cols-2 gap-4 items-center'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='space-y-8'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='flex items-center space-x-2 text-vegetable-green'>
              <Leaf className='h-5 w-5' />
              <span className='text-sm font-medium'>100% Organic & Fresh</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className='text-5xl md:text-7xl font-bold text-foreground leading-tight'>
              FRESH
              <br />
              <span className='text-transparent bg-gradient-fresh bg-clip-text'>VEGETABLES</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className='text-xl text-muted-foreground max-w-md'>
              Farm-fresh vegetables delivered straight to your door. Experience the taste of
              nature's finest produce.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className='flex flex-col sm:flex-row gap-4'>
              <Button
                size='lg'
                onClick={handleShopNow}
                className='bg-gradient-fresh hover:shadow-glow transition-all duration-300 text-lg px-8 py-6'>
                <ShoppingCart className='h-5 w-5 mr-2' />
                Shop Now
              </Button>
              <Button
                variant='outline'
                size='lg'
                onClick={handleLearnMore}
                className='text-lg px-8 py-6 border-vegetable-green text-vegetable-green hover:bg-vegetable-green hover:text-white transition-all duration-300 bg-transparent'>
                Learn More
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className='flex items-center space-x-6 pt-4'>
              <div className='flex items-center space-x-1'>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className='h-5 w-5 fill-vegetable-yellow text-vegetable-yellow' />
                ))}
              </div>
              <div className='text-sm text-muted-foreground'>
                <span className='font-semibold text-foreground'>500+</span> Happy Customers
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='relative'>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
              className='relative'>
              <div className='relative w-full h-auto rounded-3xl overflow-hidden'>
                {heroImages.map((image, index) => (
                  <motion.img
                    key={index}
                    src={image}
                    alt='Fresh Vegetables'
                    className='w-full h-auto rounded-3xl shadow-2xl absolute top-0 left-0'
                    initial={{ opacity: index === 0 ? 1 : 0 }}
                    animate={{
                      opacity: index === currentImageIndex ? 1 : 0,
                      zIndex: index === currentImageIndex ? 2 : 1,
                    }}
                    transition={{ duration: 1.2, ease: 'easeInOut' }}
                  />
                ))}
                {/* Spacer to maintain container height */}
                <img
                  src={heroImages[0] || '/placeholder.svg'}
                  alt=''
                  className='w-full h-auto rounded-3xl opacity-0'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-vegetable-green/20 to-transparent rounded-3xl z-10'></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className='absolute -top-4 -right-4 bg-vegetable-orange text-white p-4 rounded-full shadow-warm'>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: 'linear' }}>
                <Leaf className='h-8 w-8' />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
