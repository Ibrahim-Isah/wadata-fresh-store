import { useLocation, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Leaf, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
    console.error('404 Error: User attempted to access non-existent route:', location.pathname);
  }, [location.pathname]);

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-hero px-4'>
      <div className='text-center max-w-md'>
        <div className='inline-flex items-center justify-center w-16 h-16 bg-gradient-fresh rounded-2xl shadow-fresh mb-6'>
          <Leaf className='h-8 w-8 text-white' />
        </div>
        <h1 className='font-display text-7xl md:text-8xl font-bold text-transparent bg-gradient-fresh bg-clip-text mb-4'>
          404
        </h1>
        <p className='text-xl text-muted-foreground mb-8'>
          Oops! Page not found. This page seems to have gone out of season.
        </p>
        <Link to='/'>
          <Button
            size='lg'
            className='rounded-full bg-gradient-fresh hover:shadow-glow transition-all duration-300 px-8'>
            <ArrowLeft className='h-4 w-4 mr-2' />
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
