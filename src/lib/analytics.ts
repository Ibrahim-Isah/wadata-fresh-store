// Google Analytics and SEO tracking utilities

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

export const setupGoogleAnalytics = (measurementId: string) => {
  // Add Google Analytics script
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script1);

  // Add Google Analytics config
  const script2 = document.createElement('script');
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${measurementId}');
  `;
  document.head.appendChild(script2);
};

// Track custom events for SEO analytics
export const trackEvent = (action: string, category: string, label?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
    });
  }
};

// Track product views
export const trackProductView = (productName: string) => {
  trackEvent('view_item', 'product', productName);
};

// Track WhatsApp orders
export const trackWhatsAppOrder = (productName?: string) => {
  trackEvent('begin_checkout', 'whatsapp_order', productName);
};

// Track page views
export const trackPageView = (pageName: string) => {
  trackEvent('page_view', 'navigation', pageName);
};

// Search Console verification
export const addGoogleSearchConsoleVerification = (verificationCode: string) => {
  const meta = document.createElement('meta');
  meta.name = 'google-site-verification';
  meta.content = verificationCode;
  document.head.appendChild(meta);
};

// Add structured data for better search visibility
export const addFAQStructuredData = () => {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you deliver fresh vegetables in Abuja?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we deliver fresh organic vegetables throughout Abuja and FCT. Free delivery on orders over ₦50,000."
        }
      },
      {
        "@type": "Question", 
        "name": "Are your vegetables organic?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all our vegetables are 100% organic and sourced from certified local Nigerian farms."
        }
      },
      {
        "@type": "Question",
        "name": "How do I place an order?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can place orders via WhatsApp at 08032892443 or browse our products online and order through our website."
        }
      },
      {
        "@type": "Question",
        "name": "What areas in Abuja do you deliver to?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We deliver to all areas within Abuja FCT including Garki, Maitama, Asokoro, Wuse, and surrounding areas."
        }
      }
    ]
  };

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.innerHTML = JSON.stringify(faqData);
  document.head.appendChild(script);
};
