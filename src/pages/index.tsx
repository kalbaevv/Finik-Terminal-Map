/* External dependencies */
import { graphql } from 'gatsby';
import React from 'react';

/* Local dependencies */
import Layout from '../components/layout';
import MainPage from '../components/website/home/MainPage';
import SEO from '../components/layout/seo';

export default function HomePage({ data }) {
  const title = 'Мой базовый сайт Mancho School';

  const {
    site: {
      siteMetadata: { titleTemplate },
    },
  } = data;

  return (
    <Layout>
      <SEO
        title={titleTemplate.replace('%s', title)}
        description={title}
      />
      <MainPage />
    </Layout>
  );
}

export const query = graphql`
  query ($language: String) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    site {
      siteMetadata {
        titleTemplate
      }
    }
  }
`;
