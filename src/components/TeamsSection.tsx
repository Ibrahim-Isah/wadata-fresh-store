import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Phone } from 'lucide-react';

// Tailwind can't compile dynamically-built class names, so map colors to full class strings
const colorStyles = {
  'vegetable-green': {
    badge: 'bg-vegetable-green',
    text: 'text-vegetable-green',
    iconBg: 'bg-vegetable-green/10 hover:bg-vegetable-green/20',
  },
  'vegetable-orange': {
    badge: 'bg-vegetable-orange',
    text: 'text-vegetable-orange',
    iconBg: 'bg-vegetable-orange/10 hover:bg-vegetable-orange/20',
  },
  'vegetable-yellow': {
    badge: 'bg-vegetable-yellow',
    text: 'text-vegetable-yellow',
    iconBg: 'bg-vegetable-yellow/10 hover:bg-vegetable-yellow/20',
  },
} as const;

const teamMembers = [
  {
    id: 1,
    name: 'Alh. Mohammad Wadata',
    role: 'CEO',
    image: '/wadata1.jpeg',
    description: 'Leading our team with 20+ years of retail experience',
    phone: '08032892443',
    color: 'vegetable-green',
  },
  {
    id: 2,
    name: 'Khalifa Wadata',
    role: 'Managing Director',
    image: '/wadata2.jpeg',
    description: 'Expert in selecting the freshest vegetables daily',
    phone: '08149556915',
    color: 'vegetable-orange',
  },
] as const;

const TeamSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id='team' className='py-24 bg-background'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-16'>
          <span className='section-badge mb-4'>Our People</span>
          <h2 className='section-title mb-4'>
            Meet Our <span className='text-transparent bg-gradient-fresh bg-clip-text'>Team</span>
          </h2>
          <p className='text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto'>
            Our dedicated team of professionals works tirelessly to bring you the freshest
            vegetables and exceptional service every day.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
          {teamMembers.map((member) => {
            const colors = colorStyles[member.color];
            return (
              <motion.div
                key={member?.id}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}>
                <Card className='group overflow-hidden rounded-2xl bg-card border-border/60 shadow-card hover:shadow-fresh hover:border-primary/30 transition-all duration-300'>
                  <div className='relative overflow-hidden'>
                    <img
                      src={member?.image}
                      alt={member?.name}
                      loading='lazy'
                      className='w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105'
                    />
                    <div
                      className={`absolute top-3 right-3 ${colors.badge} text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wide`}>
                      Team
                    </div>
                  </div>

                  <CardContent className='p-6'>
                    <div className='text-center mb-4'>
                      <h3 className='font-display text-lg font-bold text-foreground mb-1'>
                        {member?.name}
                      </h3>
                      <p className={`${colors.text} text-sm font-semibold mb-2`}>{member?.role}</p>
                      <p className='text-muted-foreground text-sm'>{member?.description}</p>
                    </div>

                    <div className='flex items-center justify-center gap-3 pt-4 border-t border-border/60'>
                      {/* <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        href={`mailto:${member?.email}`}
                        aria-label={`Email ${member.name}`}
                        className={`p-2.5 rounded-full ${colors.iconBg} transition-colors duration-300`}>
                        <Mail className={`h-4 w-4 ${colors.text}`} />
                      </motion.a> */}
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        href={`tel:${member?.phone}`}
                        aria-label={`Call ${member?.name}`}
                        className={`p-2.5 rounded-full ${colors.iconBg} transition-colors duration-300`}>
                        <Phone className={`h-4 w-4 ${colors.text}`} />
                      </motion.a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
