import { LazyLoadImage } from 'react-lazy-load-image-component';
import styled, { css } from 'styled-components';

export const EpisodeCardContainer = styled.div`
   display: flex;
   flex-direction: column;
   animation: fadeIn 1s;
`;

export const ImageWrapper = styled.div`
   margin-bottom: 0.5em;
   position: relative;
   height: 0;
   padding-top: 60%;
   overflow: hidden;
   background-color: #202124;
`;

export const LazyImage = styled(LazyLoadImage)`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
`;

export const Text = styled.h3`
   font-size: 1em;
   color: var(--darksky);

   > span {
      margin-left: 0.5em;
      color: var(--greysky);
   }

   ${(date) =>
      date &&
      css`
         font-size: 0.8em;
         margin-top: 0.5em;
         color: #787a91;
         font-weight: 300;
      `}
`;

export const Subtitle = styled.p`
   overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 4;
   -webkit-box-orient: vertical;
   font-size: 0.8em;
   margin-bottom: 0.5em;
`;
