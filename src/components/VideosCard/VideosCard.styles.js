import { LazyLoadImage } from 'react-lazy-load-image-component';
import styled, { css } from 'styled-components';

export const VideosCardContainer = styled.div`
   display: flex;
   flex-direction: column;
`;

export const ImageWrapper = styled.div`
   margin-bottom: 0.5em;
   position: relative;
   height: 0;
   padding-top: 60%;
   overflow: hidden;
   background-color: #202124;
`;

export const PlayButton = styled.button`
   width: 48px;
   height: 48px;
   background: none;
   border: transparent;
   cursor: pointer;
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   z-index: 9;

   &:hover > svg {
      color: var(--darksky);
   }

   > svg {
      color: var(--greysky);
      vertical-align: middle;
      width: 80%;
      height: 80%;
      transition: all 0.5s;
   }
`;

export const LazyImage = styled(LazyLoadImage)`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   z-index: 5;
`;

export const Text = styled.h3`
   font-size: 0.9em;
   color: var(--greysky);
   overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 1;
   -webkit-box-orient: vertical;

   ${({ date }) =>
      date &&
      css`
         font-size: 0.8em;
         margin-top: 0.5em;
         color: #787a91;
         font-weight: 300;

         > span {
            margin-left: 0.5em;
         }
      `}
`;
