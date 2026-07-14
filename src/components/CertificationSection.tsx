import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, CheckCircle, Award, MapPin } from 'lucide-react';

// Tailwind can't compile dynamically-built class names, so map colors to full class strings
const colorStyles = {
  'vegetable-green': { bg: 'bg-vegetable-green/10', text: 'text-vegetable-green' },
  'vegetable-orange': { bg: 'bg-vegetable-orange/10', text: 'text-vegetable-orange' },
  'vegetable-yellow': { bg: 'bg-vegetable-yellow/10', text: 'text-vegetable-yellow' },
} as const;

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
      title: 'Nigerian Based with Delivery Nation Wide',
      description: 'Located in Abuja, FCT, Nigeria',
      color: 'vegetable-orange',
    },
  ] as const;

  return (
    <section className='py-24 bg-muted/40'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-16'>
          <span className='section-badge mb-4'>Credentials</span>
          <h2 className='section-title mb-4'>
            Certified &{' '}
            <span className='text-transparent bg-gradient-fresh bg-clip-text'>Trusted</span>
          </h2>
          <p className='text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto'>
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
            <Card className='overflow-hidden rounded-2xl bg-card border-border/60 shadow-card hover:shadow-fresh transition-all duration-300'>
              <CardContent className='p-0'>
                <motion.img
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  src='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wadata-cac.jpg-aJPfIyfqmwT4YMW5o5GlIA2KZ52nNn.jpeg'
                  alt='WADATA VEGFRU CAC Certificate of Registration'
                  className='w-full h-auto object-cover'
                  loading='lazy'
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
              <h3 className='font-display text-2xl md:text-3xl font-bold text-foreground mb-4'>
                Official Business Registration
              </h3>
              <p className='text-lg text-muted-foreground mb-6'>
                <strong className='text-primary'>WADATA VEGFRU AND ALLIED SUPPLIES VENTURES</strong>{' '}
                is officially registered with the Corporate Affairs Commission (CAC) of Nigeria
                under registration number <strong>BN 3136600</strong>, dated July 17th, 2020.
              </p>
              <div className='rounded-2xl border border-primary/20 bg-primary/5 p-5 mb-6'>
                <p className='text-sm text-foreground leading-relaxed'>
                  <strong>Business Nature:</strong> Sales and Supply of Vegetables, Fruits and
                  Agro-Allied Products, General Contracts and Merchandise, Farming
                </p>
              </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              {certificationFeatures.map((feature, index) => {
                const Icon = feature.icon;
                const colors = colorStyles[feature.color];
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                    className='group text-center p-5 rounded-2xl bg-card border border-border/60 shadow-card hover:shadow-fresh hover:border-primary/30 transition-all duration-300'>
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 ${colors.bg} rounded-2xl mb-3 transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className={`h-6 w-6 ${colors.text}`} />
                    </div>
                    <h4 className='font-display text-base font-bold text-foreground mb-1'>
                      {feature.title}
                    </h4>
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
