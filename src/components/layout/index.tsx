/* External dependencies */
import { StyleReset, ThemeProvider } from 'atomize';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

/* Local dependencies */
import locales from '../../locales/locales';
import '../../assets/styles/reset.scss';
import './style.scss';

export default function Layout({ children }) {
  const { site } = useStaticQuery(query) || '';
  const { title } = site?.siteMetadata || '';
  const theme = {
    colors: {
      dark: '#212121',
      gray: '#6C6E79',
      text_silver: '#9EA5B1',
      danger: '#F63939',
      btn_danger_bg: '#F63939',
      btn_hover_bg_danger: '#d22e2e',
      btn_hover_border_danger: '#d22e2e',
      btn_hover_danger_text_color: '#fff',
      btn_danger_text_color: '#fff',
      btn_default_bg: 'transparent',
      btn_hover_bg_default: '#9EA5B1',
      btn_hover_border_default: '#9EA5B1',
      btn_hover_default_text_color: '#212121',
      btn_default_text_color: '#212121',
      input_border_color: '#e8e8e8',
      btn_primary_bg: '#3366FF',
    },
    containerWidth: {
      xl: '1300px',
    },
    grid: {
      containerWidth: {
        xl: '1300px',
      },
      gutterWidth: '1.5rem',
    },
    fontFamily: {
      primary: 'Inter, sans-serif',
    },
    rounded: {
      md: '6px',
      sm: '4px',
      xs: '2px',
    },
    textSize: {
      size: {
        body: '14px',
        primary: '16px',
        display: '20px',
        heading2: '24px',
        heading: '36px',
        mainTitle: '56px',
      },
      height: {
        body: '20px',
        primary: '24px',
        display: '24px',
        heading2: '28px',
        heading: '40px',
        mainTitle: '60px',
      },
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Helmet
        htmlAttributes={{
          lang: locales.DEFAULT_LOCALE,
        }}
        title={title}
      >
        <meta charSet="utf-8" />
      </Helmet>
      <StyleReset />
      <header>

      </header>
      <main id="main">{children}</main>
      <footer>

      </footer>
    </ThemeProvider>
  );
}

const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
