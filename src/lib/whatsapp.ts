import { trackWhatsAppOrder } from './analytics';

export interface WhatsAppOptions {
  phoneNumber?: string;
  message: string;
}

export const createWhatsAppUrl = ({ phoneNumber = '+2348149556915', message }: WhatsAppOptions): string => {
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
};

export const openWhatsApp = (options: WhatsAppOptions): void => {
  const url = createWhatsAppUrl(options);
  
  // Track WhatsApp order for SEO analytics
  trackWhatsAppOrder();
  
  window.open(url, '_blank', 'noopener,noreferrer');
};

export const createProductInquiryMessage = (productName: string): string => {
  // Track specific product inquiry
  trackWhatsAppOrder(productName);
  
  return `Hi! I'm interested in ordering ${productName} from Wadata Fresh Store Abuja. Can you help me with pricing and availability?`;
};
