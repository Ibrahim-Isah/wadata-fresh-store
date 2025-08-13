import { motion } from 'framer-motion';
import { Leaf, ShoppingCart, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className='fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border'>
      <div className='container mx-auto px-4 py-4 flex items-center justify-between'>
        <motion.div className='flex items-center space-x-2' whileHover={{ scale: 1.05 }}>
          <div className='p-2 bg-gradient-fresh rounded-lg shadow-fresh'>
            <Leaf className='h-6 w-6 text-white' />
          </div>
          <span className='text-xl font-bold text-vegetable-green'>Fresh Veggies</span>
        </motion.div>

        <nav className='hidden md:flex items-center space-x-8'>
          {['Home', 'Products', 'About', 'Team', 'Contact'].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className='text-foreground hover:text-vegetable-green transition-colors font-medium'
              whileHover={{ y: -2 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}>
              {item}
            </motion.a>
          ))}
        </nav>

        <motion.div
          className='flex items-center space-x-4'
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}>
          <Button variant='outline' size='sm' className='hidden sm:flex items-center space-x-2'>
            <Phone className='h-4 w-4' />
            <span>Call Us</span>
          </Button>
          <Button
            variant='default'
            size='sm'
            className='bg-gradient-fresh hover:shadow-glow transition-all duration-300'>
            <ShoppingCart className='h-4 w-4 mr-2' />
            Order Now
          </Button>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
