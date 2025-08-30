import { motion } from 'framer-motion';
import { Users, Award, Leaf, Heart } from 'lucide-react';

const stats = [
  { icon: Users, number: '500+', label: 'Happy Customers' },
  { icon: Award, number: '5', label: 'Years Experience' },
  { icon: Leaf, number: '100%', label: 'Organic Products' },
  { icon: Heart, number: '99%', label: 'Customer Satisfaction' },
];

const About = () => {
  return (
    <section id='about' className='py-20 bg-gradient-hero'>
      <div className='container mx-auto px-4'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='space-y-8'>
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className='text-4xl md:text-5xl font-bold text-foreground mb-6'>
                Why Choose{' '}
                <span className='text-transparent bg-gradient-fresh bg-clip-text'>
                  Wadata Fresh Store?
                </span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className='text-xl text-muted-foreground leading-relaxed'>
                We are Abuja's leading fresh vegetables delivery service, passionate about bringing
                you the freshest, highest quality vegetables straight from Nigerian local farms. Our
                commitment to organic farming and sustainable practices ensures that every vegetable
                you receive is not only delicious but also nutritious and environmentally friendly.
                Serving Abuja, FCT and surrounding areas.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className='space-y-4'>
              {[
                '🌱 Sourced from certified organic farms',
                '🚚 Same-day delivery for maximum freshness',
                '🏆 Hand-picked by agricultural experts',
                '💚 Commitment to sustainable farming',
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className='flex items-center space-x-3 text-lg'>
                  <span>{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='grid grid-cols-2 gap-6'>
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className='bg-card border border-border/50 rounded-2xl p-6 text-center shadow-fresh hover:shadow-glow transition-all duration-300'>
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className='inline-flex items-center justify-center w-12 h-12 bg-gradient-fresh rounded-full mb-4'>
                    <Icon className='h-6 w-6 text-white' />
                  </motion.div>
                  <div className='text-3xl font-bold text-vegetable-green mb-2'>{stat.number}</div>
                  <div className='text-sm text-muted-foreground'>{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
