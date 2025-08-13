import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { createWhatsAppUrl } from '@/lib/whatsapp';

const WhatsAppButton = () => {
  const message = "Hi! I'm interested in ordering fresh vegetables. Can you help me?";
  const whatsappUrl = createWhatsAppUrl({ message });

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className='fixed bottom-6 left-6 z-50'>
      <motion.a
        href={whatsappUrl}
        target='_blank'
        rel='noopener noreferrer'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className='flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl transition-all duration-300 group'>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3,
          }}>
          <MessageCircle className='h-8 w-8' />
        </motion.div>

        {/* Pulse effect */}
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.7, 0, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className='absolute inset-0 bg-green-500 rounded-full -z-10'
        />
      </motion.a>

      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileHover={{ opacity: 1, x: 0 }}
        className='absolute left-20 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg pointer-events-none'>
        Chat with us on WhatsApp!
        <div className='absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-gray-800'></div>
      </motion.div>
    </motion.div>
  );
};

export default WhatsAppButton;
