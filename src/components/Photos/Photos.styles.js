import styled, { css } from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const PhotosContainer = styled.div`
   margin: 5em 4.3em;
   animation: fadeIn 0.5s;

   @media screen and (max-width: 970px) {
      margin: 2em 2.3em;
   }

   @media screen and (max-width: 970px) {
      margin: 1.5em 2.3em;
   }

   @media screen and (max-width: 515px) {
      margin: 1em 0.8em;
   }
`;

export const Grid = styled.div`
   display: grid;
   gap: 0.5em;

   /* Backdrops */
   ${({ landscape }) =>
      landscape &&
      css`
         grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

         @media screen and (max-width: 970px) {
            grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
         }
      `}

   /* Posters */
   ${({ landscape }) =>
      !landscape &&
      css`
         grid-template-columns: repeat(auto-fill, minmax(205px, 1fr));

         @media screen and (max-width: 970px) {
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
         }
      `}

   ${({ gutterBottom }) =>
      gutterBottom &&
      css`
         margin-bottom: 3em;
      `}
`;

export const HeaderWrapper = styled.div`
   margin-bottom: 0.5rem;
   display: flex;
   align-items: baseline;
`;

export const Header = styled.h3`
   font-size: 1.5em;

   ${({ main }) =>
      !main && 'font-size: 0.8em; font-weight: 300; margin-left: 1em;'}
`;

export const GridItem = styled.div`
   position: relative;
   height: 0;
   padding-top: 150%;
   overflow: hidden;
   background-color: #202124;
   transition: all 0.8s;

   ${({ poster }) => !poster && 'padding-top: 60%;'}
`;

export const LazyImage = styled(LazyLoadImage)`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
`;
