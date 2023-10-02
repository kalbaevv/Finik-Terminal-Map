/* External dependencies */
import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

interface SEOProps {
  article?: boolean;
  description?: string;
  image?: string;
  title?: string;
}

export default function SEO({ title, description, image, article }: SEOProps) {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query) || '';

  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    defaultImage,
    titleTemplate,
    twitterUsername,
  } = site?.siteMetadata || '';

  const seoImage = image || defaultImage;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: seoImage ? `${siteUrl}${seoImage}` : null,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <Helmet title={seo.title}>
      <link rel="canonical" href={seo.url} />
      <meta name="description" content={seo.description} />
      {seo.image && <meta name="image" content={seo.image} />}

      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article || null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}

      <meta name="twitter:card" content="summary_large_image" />
      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  );
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultDescription: description
        defaultTitle: title
        siteUrl
        titleTemplate
      }
    }
  }
`;
