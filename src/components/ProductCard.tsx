import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Star } from 'lucide-react';
import LazyImage from '@/components/LazyImage';
import { openWhatsApp, createProductInquiryMessage } from '@/lib/whatsapp';

const FALLBACK_IMAGE =
  'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

export interface Product {
  id: number;
  name: string;
  price?: string;
  rating: number;
  description: string;
  category: string;
  image?: string;
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const ProductCard = ({ product }: { product: Product }) => {
  const handleOrderNow = () => {
    const message = createProductInquiryMessage(product.name);
    openWhatsApp({ message });
  };

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className='h-full'>
      <Card className='group h-full flex flex-col overflow-hidden rounded-2xl bg-card border-border/60 shadow-card hover:shadow-fresh hover:border-primary/30 transition-all duration-300'>
        <div className='relative overflow-hidden h-52'>
          <div className='w-full h-full transition-transform duration-500 group-hover:scale-105'>
            <LazyImage
              src={product.image || FALLBACK_IMAGE}
              alt={product.name}
              className='w-full h-full'
            />
          </div>
          <div className='absolute top-3 left-3 rounded-full bg-primary/90 backdrop-blur text-primary-foreground px-3 py-1 text-xs font-semibold tracking-wide'>
            Fresh
          </div>
          <div className='absolute top-3 right-3 flex items-center gap-1 rounded-full bg-background/90 backdrop-blur px-2.5 py-1 text-xs font-semibold text-foreground'>
            <Star className='h-3.5 w-3.5 fill-vegetable-yellow text-vegetable-yellow' />
            {product.rating}
          </div>
        </div>

        <CardContent className='flex flex-col flex-1 p-5'>
          <div className='flex items-start justify-between gap-2 mb-1.5'>
            <h3 className='font-display text-lg font-bold text-foreground'>{product.name}</h3>
            <span className='shrink-0 rounded-full bg-muted px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground'>
              {product.category}
            </span>
          </div>

          <p className='text-sm text-muted-foreground mb-4 flex-1'>{product.description}</p>

          <Button
            size='sm'
            onClick={handleOrderNow}
            className='w-full rounded-full bg-gradient-fresh hover:shadow-glow transition-all duration-300'>
            <ShoppingCart className='h-4 w-4 mr-1.5' />
            Order Now
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
