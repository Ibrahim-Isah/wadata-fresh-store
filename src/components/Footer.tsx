import { motion } from 'framer-motion';
import { Leaf, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-gray-900 text-white py-16'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='space-y-4'>
            <div className='flex items-center space-x-2'>
              <div className='p-2 bg-gradient-fresh rounded-lg'>
                <Leaf className='h-6 w-6 text-white' />
              </div>
              <span className='text-xl font-bold'>Fresh Veggies</span>
            </div>
            <p className='text-gray-300 leading-relaxed'>
              Your trusted partner for fresh, organic vegetables delivered straight from the farm to
              your table.
            </p>
            <div className='flex space-x-4'>
              {[Facebook, Instagram, Twitter].map((Icon, index) => (
                <motion.a
                  key={index}
                  href='#'
                  whileHover={{ scale: 1.2, y: -2 }}
                  className='text-gray-400 hover:text-green-400 transition-colors'>
                  <Icon className='h-5 w-5' />
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
            <h3 className='text-lg font-bold text-green-400'>Quick Links</h3>
            <ul className='space-y-2'>
              {['Home', 'Products', 'About Us', 'Contact', 'FAQ', 'Blog'].map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '')}`}
                    className='text-gray-300 hover:text-green-400 transition-colors'>
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
            <h3 className='text-lg font-bold text-green-400'>Categories</h3>
            <ul className='space-y-2'>
              {[
                'Leafy Greens',
                'Root Vegetables',
                'Herbs',
                'Tomatoes',
                'Peppers',
                'Seasonal Produce',
              ].map((category, index) => (
                <motion.li key={index} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <a href='#' className='text-gray-300 hover:text-green-400 transition-colors'>
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
            <h3 className='text-lg font-bold text-green-400'>Contact Info</h3>
            <div className='space-y-3'>
              <div className='flex items-start space-x-3'>
                <MapPin className='h-5 w-5 text-green-400 mt-0.5' />
                <div className='text-gray-300 text-sm'>
                  <p>123 Green Valley Street</p>
                  <p>Fresh Market District</p>
                  <p>City, State 12345</p>
                </div>
              </div>
              <div className='flex items-center space-x-3'>
                <Phone className='h-5 w-5 text-green-400' />
                <span className='text-gray-300 text-sm'>+1 (555) 123-4567</span>
              </div>
              <div className='flex items-center space-x-3'>
                <Mail className='h-5 w-5 text-green-400' />
                <span className='text-gray-300 text-sm'>info@freshveggies.com</span>
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
          className='border-t border-gray-700 mt-12 pt-8 text-center'>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
            <p className='text-gray-400 text-sm'>
              © {currentYear} Fresh Veggies. All rights reserved.
            </p>
            <div className='flex space-x-6 text-sm'>
              <a href='#' className='text-gray-400 hover:text-green-400 transition-colors'>
                Privacy Policy
              </a>
              <a href='#' className='text-gray-400 hover:text-green-400 transition-colors'>
                Terms of Service
              </a>
              <a href='#' className='text-gray-400 hover:text-green-400 transition-colors'>
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
