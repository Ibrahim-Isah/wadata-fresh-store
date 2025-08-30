import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { addFAQStructuredData } from './lib/analytics';

// Initialize SEO enhancements
if (typeof window !== 'undefined') {
  // Add FAQ structured data for better search visibility
  addFAQStructuredData();

  // Initialize Google Analytics when ready
  // Uncomment and add your GA4 measurement ID
  // setupGoogleAnalytics('G-XXXXXXXXXX');
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
