import { motion } from 'framer-motion';
import { MapPin, MessageCircle } from 'lucide-react';
import { createWhatsAppUrl } from '@/lib/whatsapp';

const WhatsAppButton = () => {
  const message = "Hi! I'm interested in ordering fresh vegetables. Can you help me?";
  const whatsappUrl = createWhatsAppUrl({ message });

  // Replace with your actual shop coordinates
  const latitude = '9.027142'; // Replace with your shop's latitude
  const longitude = '7.610164'; // Replace with your shop's longitude
  const mapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className='fixed bottom-6 left-6 z-50 flex flex-col gap-4'>
      {/* Map Locator Button */}
      <motion.a
        href={mapsUrl}
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Find us on Google Maps'
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className='group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-xl ring-4 ring-blue-500/20 transition-colors duration-300'>
        <MapPin className='h-6 w-6' />

        {/* Tooltip */}
        <span className='pointer-events-none absolute left-full ml-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-xl bg-foreground text-background px-3 py-2 text-sm font-medium opacity-0 translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 shadow-lg hidden sm:block'>
          Find us on Google Maps!
        </span>
      </motion.a>

      {/* WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Chat with us on WhatsApp'
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className='group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#1ebe5b] text-white shadow-xl ring-4 ring-[#25D366]/25 transition-colors duration-300'>
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 8, -8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3,
          }}>
          <MessageCircle className='h-7 w-7 sm:h-8 sm:w-8' />
        </motion.div>

        {/* Pulse effect */}
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.6, 0, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className='absolute inset-0 bg-[#25D366] rounded-full -z-10'
        />

        {/* Tooltip */}
        <span className='pointer-events-none absolute left-full ml-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-xl bg-foreground text-background px-3 py-2 text-sm font-medium opacity-0 translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 shadow-lg hidden sm:block'>
          Chat with us on WhatsApp!
        </span>
      </motion.a>
    </motion.div>
  );
};

export default WhatsAppButton;
