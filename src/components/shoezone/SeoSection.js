import React from 'react';
import { Helmet } from 'react-helmet';

export default function SeoSection({ title, description, canonical }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <link
        rel='canonical'
        href={`https://jeewantharashmika.com/${canonical}`}
      />
      <meta name='robots' content='noindex, nofollow' />
    </Helmet>
  );
}
