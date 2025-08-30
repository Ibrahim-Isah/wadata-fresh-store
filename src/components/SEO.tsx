import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  schema?: object;
}

const SEO = ({
  title = 'Fresh Vegetables Abuja | Wadata Fresh Store - Premium Organic Produce Nigeria',
  description = 'Premium fresh vegetables delivered in Abuja, Nigeria. 100% organic produce from local farms. Order tomatoes, lettuce, carrots, peppers & more. Fast delivery across FCT.',
  keywords = 'fresh vegetables Abuja, organic vegetables Nigeria, vegetables delivery Abuja, fresh produce FCT, tomatoes Abuja, lettuce Nigeria, carrots delivery, peppers Abuja, organic farming Nigeria, Wadata fresh store',
  image = '/hero-vegetables.jpg',
  url = 'https://wadata-fresh-store.vercel.app/',
  type = 'website',
  schema,
}: SEOProps) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name='title' content={title} />
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property='og:type' content={type} />
      <meta property='og:url' content={url} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />

      {/* Twitter */}
      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:url' content={url} />
      <meta property='twitter:title' content={title} />
      <meta property='twitter:description' content={description} />
      <meta property='twitter:image' content={image} />

      {/* Canonical URL */}
      <link rel='canonical' href={url} />

      {/* Schema.org structured data */}
      {schema && <script type='application/ld+json'>{JSON.stringify(schema)}</script>}
    </Helmet>
  );
};

export default SEO;
