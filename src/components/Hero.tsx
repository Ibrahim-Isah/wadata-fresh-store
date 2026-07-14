import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Leaf, Star, Truck } from 'lucide-react';
import { useState, useEffect } from 'react';
import { openWhatsApp } from '@/lib/whatsapp';

import heroImage from '@/assets/hero-vegetables.jpg';
import carrots from '@/assets/carrots.jpg';
import lettuce from '@/assets/lettuce.jpg';
import brococoli from '@/assets/broccoli.jpg';
import { useNavigate } from 'react-router-dom';

const heroImages = [heroImage, carrots, brococoli, lettuce];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1,
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const handleShopNow = () => {
    navigate('/products');
    return;
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
      {/* Decorative background */}
      <div className='pointer-events-none absolute inset-0' aria-hidden='true'>
        <div className='absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl' />
        <div className='absolute bottom-0 -left-32 h-96 w-96 rounded-full bg-vegetable-orange/10 blur-3xl' />
      </div>

      <div className='container mx-auto px-4 py-20 pt-32 relative'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='space-y-8'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}>
              <span className='inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary'>
                <Leaf className='h-4 w-4' />
                100% Organic &amp; Fresh from Nigerian Farms
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className='font-display text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.05]'>
              Fresh Vegetables
              <br />
              <span className='text-transparent bg-gradient-fresh bg-clip-text'>
                Abuja Delivery
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className='text-lg md:text-xl text-muted-foreground max-w-md leading-relaxed'>
              Premium farm-fresh vegetables delivered across Abuja and FCT, Nigeria. Experience the
              taste of nature's finest organic produce from local Nigerian farms.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className='flex flex-col sm:flex-row gap-4'>
              <Button
                size='lg'
                onClick={handleShopNow}
                className='rounded-full bg-gradient-fresh hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300 text-lg px-8 py-6'>
                <ShoppingCart className='h-5 w-5 mr-2' />
                View Products
              </Button>
              <Button
                variant='outline'
                size='lg'
                onClick={handleLearnMore}
                className='rounded-full text-lg px-8 py-6 border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 bg-transparent'>
                Learn More
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className='flex items-center gap-6 pt-4'>
              <div className='flex items-center gap-1'>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className='h-5 w-5 fill-vegetable-yellow text-vegetable-yellow' />
                ))}
              </div>
              <div className='text-sm text-muted-foreground'>
                <span className='font-bold text-foreground'>10000+</span> Happy Customers
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
              <div className='relative w-full h-auto rounded-[2rem] overflow-hidden ring-1 ring-border/60 shadow-2xl'>
                {heroImages.map((image, index) => (
                  <motion.img
                    key={index}
                    src={image}
                    alt='Fresh Vegetables'
                    className='w-full h-auto absolute top-0 left-0 object-cover'
                    initial={{ opacity: index === 0 ? 1 : 0 }}
                    animate={{
                      opacity: index === currentImageIndex ? 1 : 0,
                      scale: index === currentImageIndex ? 1 : 1.05,
                      zIndex: index === currentImageIndex ? 2 : 1,
                    }}
                    transition={{ duration: 1.2, ease: 'easeInOut' }}
                  />
                ))}
                {/* Spacer to maintain container height */}
                <img
                  src={heroImages[0] || '/placeholder.svg'}
                  alt=''
                  className='w-full h-auto opacity-0'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-foreground/25 via-transparent to-transparent z-10'></div>

                {/* Carousel dots */}
                <div className='absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2'>
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      aria-label={`Show image ${index + 1}`}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex
                          ? 'w-6 bg-white'
                          : 'w-2 bg-white/50 hover:bg-white/80'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Floating badge — same-day delivery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className='absolute -bottom-5 -left-4 sm:-left-8 z-20 flex items-center gap-3 rounded-2xl border border-border/60 bg-card/95 backdrop-blur px-4 py-3 shadow-card'>
              <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10'>
                <Truck className='h-5 w-5 text-primary' />
              </div>
              <div>
                <div className='text-sm font-bold text-foreground'>Same-Day Delivery</div>
                <div className='text-xs text-muted-foreground'>Across Abuja &amp; FCT</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className='absolute -top-4 -right-4 z-20 bg-gradient-warm text-white p-4 rounded-full shadow-warm'>
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
