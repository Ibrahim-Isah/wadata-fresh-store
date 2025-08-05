import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Our Location',
    details: ['123 Green Valley Street', 'Fresh Market District', 'City, State 12345'],
    color: 'vegetable-green',
  },
  {
    icon: Phone,
    title: 'Phone Number',
    details: ['+1 (555) 123-4567', 'WhatsApp Available', 'Call or Text Anytime'],
    color: 'vegetable-orange',
  },
  {
    icon: Mail,
    title: 'Email Address',
    details: ['info@freshveggies.com', 'orders@freshveggies.com', 'support@freshveggies.com'],
    color: 'vegetable-red',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    details: ['Monday - Friday: 7AM - 8PM', 'Saturday: 8AM - 6PM', 'Sunday: 9AM - 5PM'],
    color: 'vegetable-yellow',
  },
];

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

  return (
    <section id='contact' className='py-20 bg-background'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-4'>
            Get In <span className='text-transparent bg-gradient-fresh bg-clip-text'>Touch</span>
          </h2>
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
            Ready to order fresh vegetables? Contact us through any of these convenient methods.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}>
                <Card className='h-full bg-card border-border/50 hover:shadow-fresh transition-all duration-300'>
                  <CardContent className='p-6 text-center'>
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`inline-flex items-center justify-center w-16 h-16 bg-${info.color}/10 rounded-full mb-4`}>
                      <Icon className={`h-8 w-8 text-${info.color}`} />
                    </motion.div>
                    <h3 className='text-xl font-bold text-foreground mb-4'>{info.title}</h3>
                    <div className='space-y-2'>
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
          <div className='bg-gradient-fresh rounded-3xl p-8 text-white'>
            <h3 className='text-2xl font-bold mb-4'>Ready to Order?</h3>
            <p className='text-white/90 mb-6 max-w-md mx-auto'>
              Contact us on WhatsApp for instant ordering and customer support. We're here to help!
            </p>
            <Button
              size='lg'
              variant='secondary'
              className='bg-white text-vegetable-green hover:bg-white/90 transition-all duration-300 px-8 py-6 text-lg'>
              <Phone className='h-5 w-5 mr-2' />
              Order on WhatsApp
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
