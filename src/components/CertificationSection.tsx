import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, CheckCircle, Award, MapPin } from 'lucide-react';

const CertificationSection = () => {
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

  const certificationFeatures = [
    {
      icon: Shield,
      title: 'Legally Registered',
      description: 'Officially registered with Nigerian CAC',
      color: 'vegetable-green',
    },
    {
      icon: CheckCircle,
      title: 'Verified Business',
      description: 'Authentic business operations since 2020',
      color: 'vegetable-green',
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'Licensed for vegetable & fruit supply',
      color: 'vegetable-yellow',
    },
    {
      icon: MapPin,
      title: 'Nigerian Based',
      description: 'Located in Mararaba, Nasarawa',
      color: 'vegetable-orange',
    },
  ];

  return (
    <section className='py-20 bg-muted/30'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-4'>
            Certified &{' '}
            <span className='text-transparent bg-gradient-fresh bg-clip-text'>Trusted</span>
          </h2>
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
            Your trusted partner for fresh vegetables and fruits. Officially registered and licensed
            to serve you with authentic Nigerian produce.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Certificate Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='order-2 lg:order-1'>
            <Card className='overflow-hidden bg-card border-border/50 hover:shadow-fresh transition-all duration-300'>
              <CardContent className='p-0'>
                <motion.img
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  src='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wadata-cac.jpg-aJPfIyfqmwT4YMW5o5GlIA2KZ52nNn.jpeg'
                  alt='WADATA VEGFRU CAC Certificate of Registration'
                  className='w-full h-auto object-cover'
                />
              </CardContent>
            </Card>
          </motion.div>

          {/* Certification Details */}
          <motion.div
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='order-1 lg:order-2'>
            <div className='mb-8'>
              <h3 className='text-3xl font-bold text-foreground mb-4'>
                Official Business Registration
              </h3>
              <p className='text-lg text-muted-foreground mb-6'>
                <strong className='text-vegetable-green'>
                  WADATA VEGFRU AND ALLIED SUPPLIES VENTURES
                </strong>{' '}
                is officially registered with the Corporate Affairs Commission (CAC) of Nigeria
                under registration number <strong>BN 3136600</strong>, dated July 17th, 2020.
              </p>
              <div className='bg-vegetable-green/10 border border-vegetable-green/20 rounded-lg p-4 mb-6'>
                <p className='text-sm text-foreground'>
                  <strong>Business Nature:</strong> Sales and Supply of Vegetables, Fruits and
                  Agro-Allied Products, General Contracts and Merchandise, Farming
                </p>
              </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              {certificationFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className='text-center p-4 rounded-xl bg-background border border-border/50 hover:shadow-fresh transition-all duration-300'>
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`inline-flex items-center justify-center w-12 h-12 bg-${feature.color}/10 rounded-full mb-3`}>
                      <Icon className={`h-6 w-6 text-${feature.color}`} />
                    </motion.div>
                    <h4 className='text-lg font-bold text-foreground mb-1'>{feature.title}</h4>
                    <p className='text-sm text-muted-foreground'>{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
