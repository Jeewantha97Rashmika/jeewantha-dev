import React from 'react';
import { Helmet } from 'react-helmet';

export default function SeoSection({ title, description, canonical }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": `https://jeewantharashmika.com/${canonical}`,
    "publisher": {
      "@type": "Organization",
      "name": "Jeewantha Rashmika",
      "logo": {
        "@type": "ImageObject",
        "url": "https://jeewantharashmika.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://jeewantharashmika.com/${canonical}`
    }
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <link
        rel='canonical'
        href={`https://jeewantharashmika.com/${canonical}`}
      />
      <meta name='robots' content='noindex, nofollow' />
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
