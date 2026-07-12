import { motion } from 'framer-motion';
import { Truck, Leaf, Clock, Star } from 'lucide-react';

// Tailwind can't compile dynamically-built class names, so map colors to full class strings
const colorStyles = {
  'vegetable-green': { bg: 'bg-vegetable-green/10', text: 'text-vegetable-green' },
  'vegetable-orange': { bg: 'bg-vegetable-orange/10', text: 'text-vegetable-orange' },
  'vegetable-red': { bg: 'bg-vegetable-red/10', text: 'text-vegetable-red' },
  'vegetable-yellow': { bg: 'bg-vegetable-yellow/10', text: 'text-vegetable-yellow' },
} as const;

const features = [
  {
    icon: Truck,
    title: 'Free Delivery Abuja',
    description: 'Free delivery within Abuja FCT on orders over ₦50,000',
    color: 'vegetable-green',
  },
  {
    icon: Leaf,
    title: '100% Organic Nigerian Produce',
    description: 'Farm-fresh vegetables from local Nigerian farms daily',
    color: 'vegetable-green',
  },
  {
    icon: Clock,
    title: 'Quick WhatsApp Orders',
    description: 'Fast WhatsApp orders and same-day delivery in Abuja',
    color: 'vegetable-orange',
  },
  {
    icon: Star,
    title: 'Premium Quality Guarantee',
    description: 'Hand-picked premium vegetables from certified Nigerian farms',
    color: 'vegetable-yellow',
  },
] as const;

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
    <section className='py-24 bg-background'>
      <div className='container mx-auto px-4'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colors = colorStyles[feature.color];
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className='group text-center p-8 rounded-2xl bg-card border border-border/60 shadow-card hover:shadow-fresh hover:border-primary/30 transition-all duration-300'>
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 ${colors.bg} rounded-2xl mb-5 transition-transform duration-300 group-hover:scale-110`}>
                  <Icon className={`h-7 w-7 ${colors.text}`} />
                </div>
                <h3 className='font-display text-lg font-bold text-foreground mb-2'>
                  {feature.title}
                </h3>
                <p className='text-sm text-muted-foreground leading-relaxed'>
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
