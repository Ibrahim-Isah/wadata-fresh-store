import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Blog post data structure for SEO content
const blogPosts = [
  {
    id: 1,
    title: "Best Fresh Vegetables to Buy in Abuja This Season",
    excerpt: "Discover the freshest seasonal vegetables available in Abuja and FCT. Learn which vegetables are in peak season and how to get the best quality produce.",
    image: "/hero-vegetables.jpg",
    author: "Wadata Fresh Store Team",
    date: "2025-01-25",
    slug: "best-fresh-vegetables-abuja-season",
    keywords: ["fresh vegetables Abuja", "seasonal vegetables Nigeria", "vegetables FCT"]
  },
  {
    id: 2,
    title: "Organic Farming in Nigeria: Health Benefits You Need to Know",
    excerpt: "Learn about the health benefits of organic vegetables and how Nigerian farmers are embracing sustainable farming practices for better nutrition.",
    image: "/lettuce.jpg",
    author: "Nutrition Expert",
    date: "2025-01-20",
    slug: "organic-farming-nigeria-health-benefits",
    keywords: ["organic vegetables Nigeria", "health benefits vegetables", "Nigerian organic farming"]
  },
  {
    id: 3,
    title: "How to Store Fresh Vegetables in Nigeria's Climate",
    excerpt: "Expert tips on keeping your vegetables fresh longer in Nigeria's tropical climate. Maximize nutrition and minimize waste with proper storage.",
    image: "/carrots.jpg",
    author: "Storage Expert",
    date: "2025-01-15",
    slug: "store-fresh-vegetables-nigeria-climate",
    keywords: ["vegetable storage Nigeria", "fresh vegetables tips", "food preservation Nigeria"]
  }
];

const BlogSection = () => {
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-4'>
            Fresh <span className='text-transparent bg-gradient-fresh bg-clip-text'>Insights</span>
          </h2>
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
            Expert advice on fresh vegetables, organic farming, and healthy eating in Nigeria
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}>
              <Card className='h-full bg-card border-border/50 hover:shadow-fresh transition-all duration-300 overflow-hidden'>
                <div className='relative overflow-hidden'>
                  <img
                    src={post.image}
                    alt={post.title}
                    className='w-full h-48 object-cover transition-transform duration-300 hover:scale-105'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent' />
                </div>
                <CardContent className='p-6'>
                  <div className='flex items-center space-x-4 text-sm text-muted-foreground mb-3'>
                    <div className='flex items-center space-x-1'>
                      <Calendar className='h-4 w-4' />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className='flex items-center space-x-1'>
                      <User className='h-4 w-4' />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  
                  <h3 className='text-xl font-bold text-foreground mb-3 line-clamp-2'>
                    {post.title}
                  </h3>
                  
                  <p className='text-muted-foreground mb-4 line-clamp-3'>
                    {post.excerpt}
                  </p>
                  
                  <Button 
                    variant='outline' 
                    className='w-full group border-vegetable-green text-vegetable-green hover:bg-vegetable-green hover:text-white transition-all duration-300'>
                    Read More
                    <ArrowRight className='h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform' />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center'>
          <Button 
            size='lg'
            variant='outline'
            className='border-vegetable-green text-vegetable-green hover:bg-vegetable-green hover:text-white transition-all duration-300'>
            View All Articles
            <ArrowRight className='h-5 w-5 ml-2' />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
