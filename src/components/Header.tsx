import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, ShoppingCart, Phone, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { openWhatsApp } from '@/lib/whatsapp';

const navItems = [
  { name: 'Home', link: '#home' },
  { name: 'All Products', link: '/products' },
  { name: 'About', link: '#about' },
  { name: 'Team', link: '#team' },
  { name: 'Contact', link: '#contact' },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleCallUs = () => {
    const message =
      "Hi! I'd like to speak with someone about your fresh vegetables. Can you help me?";
    openWhatsApp({ message });
  };

  const handleOrderNow = () => {
    const message = "Hi! I'd like to place an order for fresh vegetables. Can you assist me?";
    openWhatsApp({ message });
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className='fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/60 shadow-sm'>
      <div className='container mx-auto px-4 py-3 flex items-center justify-between'>
        <motion.a href='/' className='flex items-center gap-2.5' whileHover={{ scale: 1.03 }}>
          <div className='p-2 bg-gradient-fresh rounded-xl shadow-fresh'>
            <Leaf className='h-5 w-5 text-white' />
          </div>
          <span className='font-display text-base sm:text-xl font-bold tracking-tight text-foreground whitespace-nowrap'>
            Wadata <span className='text-primary'>Vegetables</span>
          </span>
        </motion.a>

        <nav className='hidden lg:flex items-center gap-1 rounded-full border border-border/60 bg-muted/50 px-2 py-1.5'>
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.link}
              className='rounded-full px-4 py-1.5 text-sm font-semibold text-muted-foreground hover:text-primary hover:bg-background transition-colors'
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.08 }}>
              {item.name}
            </motion.a>
          ))}
        </nav>

        <motion.div
          className='flex items-center gap-2 sm:gap-3'
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}>
          <Button
            variant='outline'
            size='sm'
            onClick={handleCallUs}
            className='hidden md:inline-flex items-center gap-2 rounded-full border-primary/30 text-primary hover:bg-primary/5 hover:text-primary'>
            <Phone className='h-4 w-4' />
            <span>Call Us: 08149556915</span>
          </Button>
          <Button
            variant='default'
            size='sm'
            onClick={handleOrderNow}
            className='rounded-full bg-gradient-fresh px-4 sm:px-5 hover:shadow-glow transition-all duration-300'>
            <ShoppingCart className='h-4 w-4 mr-2' />
            Order Now
          </Button>
          <button
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((open) => !open)}
            className='lg:hidden inline-flex items-center justify-center h-9 w-9 rounded-full border border-border/60 bg-muted/50 text-foreground hover:text-primary transition-colors'>
            {mobileOpen ? <X className='h-5 w-5' /> : <Menu className='h-5 w-5' />}
          </button>
        </motion.div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className='lg:hidden overflow-hidden border-t border-border/60 bg-background/95 backdrop-blur-xl'>
            <div className='container mx-auto px-4 py-4 flex flex-col gap-1'>
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  onClick={() => setMobileOpen(false)}
                  className='rounded-xl px-4 py-3 text-base font-semibold text-foreground hover:bg-muted hover:text-primary transition-colors'>
                  {item.name}
                </a>
              ))}
              <button
                onClick={() => {
                  setMobileOpen(false);
                  handleCallUs();
                }}
                className='mt-2 flex items-center gap-2 rounded-xl border border-primary/30 px-4 py-3 text-base font-semibold text-primary hover:bg-primary/5 transition-colors'>
                <Phone className='h-4 w-4' />
                Call Us: 08149556915
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
