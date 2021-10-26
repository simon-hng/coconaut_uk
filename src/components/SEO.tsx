import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';

export interface seoProps {
  title: string;
  description: string;
  image: string;
}

export const SEO = ({ title, description }: seoProps) => {
  const { site } = useStaticQuery(query);

  const { defaultTitle, defaultDescription } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
  };

  return (
    <Helmet title={seo.title} htmlAttributes={{ lang: 'en' }}>
      <meta
        name='google-site-verification'
        content='K0caT65lEcyRs9VG5wHK_O1lrQRsMG0mFRw_mXy4l2E'
      />
      <meta name='description' content={seo.description} />
      {seo.title && <meta property='og:title' content={seo.title} />}
      {seo.description && (
        <meta property='og:description' content={seo.description} />
      )}
      <meta name='twitter:card' content='summary_large_image' />
      {seo.title && <meta name='twitter:title' content={seo.title} />}
      {seo.description && (
        <meta name='twitter:description' content={seo.description} />
      )}
    </Helmet>
  );
};

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
  }
`;
