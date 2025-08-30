import { useScrollToTop } from '@/hooks/use-scroll-to-top';

/**
 * Component that automatically scrolls to top on route changes
 * Place this component at the root level of your app
 */
const ScrollToTop = () => {
  useScrollToTop();
  return null;
};

export default ScrollToTop;
