import { useState, useEffect, useRef, useMemo } from 'react';
import { Leaf, ImageOff } from 'lucide-react';

// Pexels serves resized images via query params, so we can request a tiny
// version to use as an instant blurred preview while the full image loads.
const getBlurPreviewUrl = (src: string): string | null => {
  try {
    const url = new URL(src);
    if (url.hostname === 'images.pexels.com') {
      url.searchParams.set('w', '60');
      url.searchParams.set('h', '40');
      url.searchParams.set('dpr', '1');
      return url.toString();
    }
  } catch {
    // relative or malformed URL — no preview available
  }
  return null;
};

// Lazy loading image component with shimmer skeleton, blur-up preview and error fallback
const LazyImage = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className: string;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  const blurPreviewUrl = useMemo(() => getBlurPreviewUrl(src), [src]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      // Start loading shortly before the image scrolls into view
      { threshold: 0.1, rootMargin: '200px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className={`relative overflow-hidden bg-muted ${className}`}>
      {/* Skeleton: shimmer sweep + leaf mark while the image loads */}
      {!isLoaded && !hasError && (
        <div className='absolute inset-0'>
          {blurPreviewUrl && isInView && (
            <img
              src={blurPreviewUrl}
              alt=''
              aria-hidden='true'
              className='absolute inset-0 w-full h-full object-cover blur-lg scale-110'
            />
          )}
          <div className='absolute inset-0 flex items-center justify-center'>
            <Leaf className='h-8 w-8 text-primary/25 animate-pulse' />
          </div>
          <div className='absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-background/50 to-transparent' />
        </div>
      )}

      {/* Fallback when the image fails to load */}
      {hasError && (
        <div className='absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-muted to-vegetable-light-green/60'>
          <ImageOff className='h-7 w-7 text-primary/40' />
          <span className='text-xs font-medium text-muted-foreground'>Image unavailable</span>
        </div>
      )}

      {isInView && !hasError && (
        <img
          src={src}
          alt={alt}
          loading='lazy'
          decoding='async'
          className={`relative w-full h-full object-cover transition-all duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0 scale-105'
          }`}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
        />
      )}
    </div>
  );
};

export default LazyImage;
