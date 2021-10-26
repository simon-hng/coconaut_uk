import { graphql, Link, useStaticQuery } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: ${(props) => props.theme.accent};
  padding: 2.5rem 0;
`;

const StyledLinks = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 900px) {
    flex-direction: row;
  }

  li {
    padding: 0.5rem 2rem;

    a {
      font-size: 2rem;
      color: ${(props) => props.theme.background};
      text-decoration: none;
    }
  }
`;

export const Footer = () => {
  const data = useStaticQuery(
    graphql`
      query FooterQuery {
        allContentfulPage {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `
  );

  const footerLinks = data.allContentfulPage.edges;

  return (
    <StyledFooter>
      {footerLinks && (
        <StyledLinks>
          {footerLinks.map((footerLink) => (
            <li>
              <Link to={`/${footerLink.node.slug}`}>
                {footerLink.node.title}
              </Link>
            </li>
          ))}
        </StyledLinks>
      )}
    </StyledFooter>
  );
};
