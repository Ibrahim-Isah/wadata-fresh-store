import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone } from 'lucide-react';

const teamMembers = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Store Manager',
    image: '/team-1.jpg',
    description: 'Leading our team with 8+ years of retail experience',
    email: 'sarah@freshveggies.com',
    phone: '+1 (555) 123-4567',
    color: 'vegetable-green',
  },
  {
    id: 2,
    name: 'Mike Rodriguez',
    role: 'Head of Produce',
    image: '/team-1.jpg',
    description: 'Expert in selecting the freshest vegetables daily',
    email: 'mike@freshveggies.com',
    phone: '+1 (555) 123-4568',
    color: 'vegetable-orange',
  },
  {
    id: 3,
    name: 'Emily Chen',
    role: 'Customer Service Lead',
    image: '/team-1.jpg',
    description: 'Ensuring every customer has an amazing experience',
    email: 'emily@freshveggies.com',
    phone: '+1 (555) 123-4569',
    color: 'vegetable-yellow',
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'Delivery Coordinator',
    image: '/team-1.jpg',
    description: 'Managing our fast and reliable delivery service',
    email: 'david@freshveggies.com',
    phone: '+1 (555) 123-4570',
    color: 'vegetable-green',
  },
  {
    id: 5,
    name: 'Lisa Park',
    role: 'Quality Assurance',
    image: '/team-1.jpg',
    description: 'Ensuring only the highest quality produce reaches you',
    email: 'lisa@freshveggies.com',
    phone: '+1 (555) 123-4571',
    color: 'vegetable-orange',
  },
  {
    id: 6,
    name: 'James Wilson',
    role: 'Inventory Manager',
    image: '/team-1.jpg',
    description: 'Keeping our shelves stocked with fresh produce',
    email: 'james@freshveggies.com',
    phone: '+1 (555) 123-4572',
    color: 'vegetable-yellow',
  },
];

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
    <section id='team' className='py-20 bg-background'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-4'>
            Meet Our <span className='text-transparent bg-gradient-fresh bg-clip-text'>Team</span>
          </h2>
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
            Our dedicated team of professionals works tirelessly to bring you the freshest
            vegetables and exceptional service every day.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}>
              <Card className='overflow-hidden bg-card border-border/50 hover:shadow-fresh transition-all duration-300'>
                <div className='relative overflow-hidden'>
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    src={member.image}
                    alt={member.name}
                    className='w-full h-64 object-cover'
                  />
                  <div
                    className={`absolute top-4 right-4 bg-${member.color} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                    Team
                  </div>
                </div>

                <CardContent className='p-6'>
                  <div className='text-center mb-4'>
                    <h3 className='text-xl font-bold text-foreground mb-1'>{member.name}</h3>
                    <p className={`text-${member.color} font-semibold mb-2`}>{member.role}</p>
                    <p className='text-muted-foreground text-sm'>{member.description}</p>
                  </div>

                  <div className='flex items-center justify-center space-x-4 pt-4 border-t border-border/50'>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href={`mailto:${member.email}`}
                      className={`p-2 rounded-full bg-${member.color}/10 hover:bg-${member.color}/20 transition-colors duration-300`}>
                      <Mail className={`h-4 w-4 text-${member.color}`} />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href={`tel:${member.phone}`}
                      className={`p-2 rounded-full bg-${member.color}/10 hover:bg-${member.color}/20 transition-colors duration-300`}>
                      <Phone className={`h-4 w-4 text-${member.color}`} />
                    </motion.a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
