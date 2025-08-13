export interface WhatsAppOptions {
  phoneNumber?: string;
  message: string;
}

export const createWhatsAppUrl = ({ phoneNumber = '+2348032892443', message }: WhatsAppOptions): string => {
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
};

export const openWhatsApp = (options: WhatsAppOptions): void => {
  const url = createWhatsAppUrl(options);
  window.open(url, '_blank', 'noopener,noreferrer');
};

export const createProductInquiryMessage = (productName: string): string => {
  return `Hi! I'm interested in ordering ${productName}. Can you help me with pricing and availability?`;
};
