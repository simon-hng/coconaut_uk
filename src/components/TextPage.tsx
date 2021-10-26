import * as React from 'react';
import { graphql } from 'gatsby';
import { Header } from './Header';
import { Layout, SectionWrapper } from '@components/Global';
import styled from 'styled-components';

const StyledMarkdownContent = styled.div`
  h1 {
    padding-bottom: 2rem;
  }
  li,
  p {
    font-family: 'montserrat';
    font-size: 1.4rem;
    line-height: 2rem;
    padding: 1rem 0;
  }
  ol {
    margin: 2rem 0;
    font-weight: bold;
    list-style: decimal;
  }
  ol li {
    font-size: 2.4rem;
    line-height: 3rem;
  }
  ul {
    list-style: circle;
  }
`;

const TextPage = ({ data }) => {
  const page = data.contentfulPage;
  console.log(page);

  return (
    <Layout title={page.title} description={''} image={''}>
      <Header />
      <SectionWrapper padded>
        <StyledMarkdownContent
          className='textPage'
          dangerouslySetInnerHTML={{
            __html:
              page.childContentfulPageTextTextNode.childMarkdownRemark.html,
          }}
        />
      </SectionWrapper>
    </Layout>
  );
};

export const pageQuery = graphql`
  query textPageQuery($id: String) {
    contentfulPage(id: { eq: $id }) {
      title
      slug
      childContentfulPageTextTextNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;

export default TextPage;
