import { motion } from 'framer-motion';
import { Truck, Leaf, Clock, Star } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Free Delivery',
    description: 'Free delivery within Abuja on orders over ₦50,000',
    color: 'vegetable-green',
  },
  {
    icon: Leaf,
    title: '100% Fresh',
    description: 'Farm-fresh vegetables daily',
    color: 'vegetable-green',
  },
  {
    icon: Clock,
    title: 'Quick Response',
    description: 'Fast WhatsApp orders and delivery',
    color: 'vegetable-orange',
  },
  {
    icon: Star,
    title: 'Premium Quality',
    description: 'Hand-picked premium vegetables',
    color: 'vegetable-yellow',
  },
];

const Features = () => {
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
    <section className='py-20 bg-background'>
      <div className='container mx-auto px-4'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className='text-center p-6 rounded-2xl bg-muted/30 border border-border/50 hover:shadow-fresh transition-all duration-300'>
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex items-center justify-center w-16 h-16 bg-${feature.color}/10 rounded-full mb-4`}>
                  <Icon className={`h-8 w-8 text-${feature.color}`} />
                </motion.div>
                <h3 className='text-xl font-bold text-foreground mb-2'>{feature.title}</h3>
                <p className='text-muted-foreground'>{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
