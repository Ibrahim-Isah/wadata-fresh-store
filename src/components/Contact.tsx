import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { openWhatsApp } from '@/lib/whatsapp';

// Tailwind can't compile dynamically-built class names, so map colors to full class strings
const colorStyles = {
  'vegetable-green': { bg: 'bg-vegetable-green/10', text: 'text-vegetable-green' },
  'vegetable-orange': { bg: 'bg-vegetable-orange/10', text: 'text-vegetable-orange' },
  'vegetable-red': { bg: 'bg-vegetable-red/10', text: 'text-vegetable-red' },
  'vegetable-yellow': { bg: 'bg-vegetable-yellow/10', text: 'text-vegetable-yellow' },
} as const;

const contactInfo = [
  {
    icon: MapPin,
    title: 'Our Location',
    details: ['No 5 Gano close, Yoruba mosque', 'Medical centre gate', 'Abuja FCT, Nigeria'],
    color: 'vegetable-green',
  },
  {
    icon: Phone,
    title: 'Phone Number',
    details: ['08032892443', '08149556915', 'WhatsApp Available 24/7'],
    color: 'vegetable-orange',
  },
  {
    icon: Mail,
    title: 'Email Address',
    details: ['Wadaataa@gmail.com', 'Orders & Inquiries', 'Customer Support Nigeria'],
    color: 'vegetable-red',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    details: ['Monday - Friday: 7AM - 7PM', 'Saturday: 8AM - 6PM', 'Sunday: 9AM - 5PM WAT'],
    color: 'vegetable-yellow',
  },
] as const;

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const handleOrderOnWhatsApp = () => {
    const message =
      "Hi! I'm ready to place an order for fresh vegetables. Can you assist me with the ordering process?";
    openWhatsApp({ message });
  };

  return (
    <section id='contact' className='py-24 bg-background'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-16'>
          <span className='section-badge mb-4'>Get In Touch</span>
          <h2 className='section-title mb-4'>
            Contact{' '}
            <span className='text-transparent bg-gradient-fresh bg-clip-text'>
              Wadata Fresh Store
            </span>
          </h2>
          <p className='text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto'>
            Ready to order fresh vegetables in Abuja? Contact Nigeria's premier organic vegetable
            delivery service through any of these convenient methods.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16'>
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            const colors = colorStyles[info.color];
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}>
                <Card className='group h-full rounded-2xl bg-card border-border/60 shadow-card hover:shadow-fresh hover:border-primary/30 transition-all duration-300'>
                  <CardContent className='p-7 text-center'>
                    <div
                      className={`inline-flex items-center justify-center w-14 h-14 ${colors.bg} rounded-2xl mb-4 transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className={`h-7 w-7 ${colors.text}`} />
                    </div>
                    <h3 className='font-display text-lg font-bold text-foreground mb-3'>
                      {info.title}
                    </h3>
                    <div className='space-y-1.5'>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className='text-muted-foreground text-sm'>
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className='text-center'>
          <div className='relative overflow-hidden bg-gradient-fresh rounded-3xl p-10 md:p-14 text-white'>
            {/* Decorative circles */}
            <div
              className='pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-white/10'
              aria-hidden='true'
            />
            <div
              className='pointer-events-none absolute -bottom-20 -left-12 h-64 w-64 rounded-full bg-white/10'
              aria-hidden='true'
            />
            <div className='relative'>
              <h3 className='font-display text-2xl md:text-3xl font-bold mb-4'>Ready to Order?</h3>
              <p className='text-white/90 mb-8 max-w-md mx-auto text-lg'>
                Contact us on WhatsApp for instant ordering and customer support. We're here to
                help!
              </p>
              <Button
                size='lg'
                variant='secondary'
                onClick={handleOrderOnWhatsApp}
                className='rounded-full bg-white text-primary hover:bg-white/90 hover:-translate-y-0.5 transition-all duration-300 px-8 py-6 text-lg font-semibold shadow-lg'>
                <Phone className='h-5 w-5 mr-2' />
                Order on WhatsApp
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
