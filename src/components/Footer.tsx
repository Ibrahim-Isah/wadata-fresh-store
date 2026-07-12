import { motion } from 'framer-motion';
import { Leaf, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='relative bg-[hsl(162_35%_8%)] text-white py-16 overflow-hidden'>
      {/* Decorative glow */}
      <div
        className='pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[36rem] rounded-full bg-primary-glow/10 blur-3xl'
        aria-hidden='true'
      />
      <div className='container mx-auto px-4 relative'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-10'>
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='space-y-4'>
            <div className='flex items-center gap-2.5'>
              <div className='p-2 bg-gradient-fresh rounded-xl'>
                <Leaf className='h-5 w-5 text-white' />
              </div>
              <span className='font-display text-xl font-bold'>Wadata Fresh Store</span>
            </div>
            <p className='text-white/70 leading-relaxed text-sm'>
              Abuja's premier fresh vegetables delivery service. Your trusted partner for organic,
              farm-fresh produce delivered straight from Nigerian farms to your table across FCT.
            </p>
            <div className='flex gap-3'>
              {[
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Twitter, label: 'Twitter' },
              ].map(({ Icon, label }) => (
                <motion.a
                  key={label}
                  href='#'
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className='flex h-9 w-9 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-primary-glow hover:border-primary-glow/40 transition-colors'>
                  <Icon className='h-4 w-4' />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className='space-y-4'>
            <h3 className='font-display text-lg font-bold text-primary-glow'>Quick Links</h3>
            <ul className='space-y-2.5'>
              {['Home', 'Products', 'About Us', 'Contact', 'FAQ', 'Blog'].map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '')}`}
                    className='text-white/70 text-sm hover:text-primary-glow transition-colors'>
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className='space-y-4'>
            <h3 className='font-display text-lg font-bold text-primary-glow'>Categories</h3>
            <ul className='space-y-2.5'>
              {[
                'Leafy Greens',
                'Root Vegetables',
                'Herbs',
                'Tomatoes',
                'Peppers',
                'Seasonal Produce',
              ].map((category, index) => (
                <motion.li key={index} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <a
                    href='#'
                    className='text-white/70 text-sm hover:text-primary-glow transition-colors'>
                    {category}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className='space-y-4'>
            <h3 className='font-display text-lg font-bold text-primary-glow'>Contact Info</h3>
            <div className='space-y-3'>
              <div className='flex items-start gap-3'>
                <MapPin className='h-5 w-5 text-primary-glow mt-0.5 shrink-0' />
                <div className='text-white/70 text-sm'>
                  <p>No 5 Gano close, Yoruba mosque</p>
                  <p>Medical centre gate</p>
                  <p>Abuja, Nigeria</p>
                </div>
              </div>
              <div className='flex items-center gap-3'>
                <Phone className='h-5 w-5 text-primary-glow shrink-0' />
                <span className='text-white/70 text-sm'>08032892443 / 08149556915</span>
              </div>
              <div className='flex items-center gap-3'>
                <Mail className='h-5 w-5 text-primary-glow shrink-0' />
                <span className='text-white/70 text-sm'>Wadaataa@gmail.com</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className='border-t border-white/10 mt-12 pt-8 text-center'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-white/50 text-sm'>
              © {currentYear} Wadata Vegetables. All rights reserved.
            </p>
            <div className='flex gap-6 text-sm'>
              <a href='#' className='text-white/50 hover:text-primary-glow transition-colors'>
                Privacy Policy
              </a>
              <a href='#' className='text-white/50 hover:text-primary-glow transition-colors'>
                Terms of Service
              </a>
              <a href='#' className='text-white/50 hover:text-primary-glow transition-colors'>
                Cookie Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
