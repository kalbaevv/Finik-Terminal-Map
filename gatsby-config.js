/* External dependencies */
const path = require('path');

// Local dependencies
const Locales = require('./src/locales/locales');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const siteDomain = process.env.NODE_ENV === 'production' ? process.env.GATSBY_SITE_DOMAIN : 'localhost:8000';

if (!siteDomain) {
  throw new Error(`'GATSBY_SITE_DOMAIN' environment variable must be provided.`);
}

const companyShortName = `Mancho School`;
const companyName = `«${companyShortName}»`;
const productName = 'Mancho School';
const title = ` «${productName}»`;
const desciption = [title];

module.exports = {
  siteMetadata: {
    companyName,
    description: desciption.join(' '),
    siteUrl: `https://${siteDomain}`,
    title,
    titleTemplate: `%s · ${productName}`,
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: companyShortName,
        short_name: companyShortName,
        description: title,
        lang: Locales.DEFAULT_LOCALE,
        start_url: `/`,
        background_color: `#545ee0`,
        theme_color: `#545ee0`,
        // Enables `Add to Homescreen` prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `fullscreen`,
        icon: `src/assets/images/favicon/android-chrome-512x512.png`, // This path is relative to the root of the site.
        icon_options: {
          // For all the options available,
          // please see the section "Additional Resources" below.
          purpose: `any maskable`,
        },
        cache_busting_mode: 'name',
      },
    },
    {
      resolve: 'gatsby-plugin-sharp',
      failOn: `none`,
      defaults: {},
    },
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets`, `images`),
      },
    },
    {
      resolve: `gatsby-plugin-styletron`,
      options: {
        // You can pass options to Styletron.
        prefix: '_',
        // Disable dev debug mode, enabled by default
        debug: true,
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        acl: null,
        bucketName: siteDomain,
        protocol: `https`,
        hostname: siteDomain,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/locales`,
        name: `locale`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: `Inter, Factor A`,
            weights: [`400`, `500`, `600`, `700`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`,
        languages: Locales.SUPPORTED_LOCALES,
        redirect: false,
        defaultLanguage: Locales.DEFAULT_LOCALE,
        siteUrl: `http://localhost:8000/`,
        i18nextOptions: {
          interpolation: {
            escapeValue: false,
          },
          keySeparator: false,
          nsSeparator: false,
        },
        pages: [
          {
            matchPath: '/:lang?/blog/:uid',
            getLanguageFromPath: true,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: 'blue',
        parent: 'body',
        template: `
        <div class="bar" role="progressbar" aria-valuemin="10" aria-valuemax="15">
          <div class="peg"></div>
        </div>
        <div class="custom-spinner" role="progressbar" aria-valuemin="10" aria-valuemax="15">
          <div class="custom-spinner-icon nprogress-icon"></div>
        </div>
      `,
        minimum: 0.4,
      },
    },
  ],
};
