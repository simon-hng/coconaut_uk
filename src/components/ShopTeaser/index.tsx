import * as React from 'react';
import { ShopTeaserItem } from './ShopTeaserItem';
import { useStaticQuery, graphql } from 'gatsby';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';

import 'swiper/css';
import 'swiper/css/navigation';

const StyledSwiper = styled(Swiper)`
  .swiper-button-prev,
  .swiper-button-next {
    & ::after {
      content: '';
    }
  }

  .swiper-button-prev {
    left: 1.1rem;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%2339B54A'%2F%3E%3C%2Fsvg%3E") !important;
  }

  .swiper-button-next {
    right: 1.1rem;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%2339B54A'%2F%3E%3C%2Fsvg%3E") !important;
  }
`;

export const ShopTeaser = () => {
  const data = useStaticQuery(
    graphql`
      {
        allShopifyProduct {
          edges {
            node {
              id
              title
              descriptionHtml
              featuredImage {
                altText
                gatsbyImageData(width: 400)
              }
              variants {
                availableForSale
                price
                storefrontId
              }
            }
          }
        }
      }
    `
  );

  return (
    <StyledSwiper id='shop' modules={[Navigation]} navigation>
      {data.allShopifyProduct.edges.map((item: any) => (
        <SwiperSlide key={item.node.id}>
          <ShopTeaserItem product={item.node} />
        </SwiperSlide>
      ))}
    </StyledSwiper>
  );
};
