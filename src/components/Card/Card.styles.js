import styled from 'styled-components';

export const CardContainer = styled.div`
   width: 100%;
   padding: 0 0.3em;
   animation: fadeIn 1s;

   &:hover .animated {
      transform: translateY(-0.3em);
   }
`;

export const CardImage = styled.div`
   position: relative;
   height: 0;
   padding-top: 150%;
   overflow: hidden;
   background-color: #202124;
   transition: all 0.8s;
`;

export const ImageItem = styled.img`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
`;

export const CardTitle = styled.h3`
   font-size: 0.8em;
   margin: 1em 0;
   overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 1;
   -webkit-box-orient: vertical;

   @media screen and (max-width: 515px) {
      display: none;
   }
`;

export const Star = styled.div`
   display: flex;
   align-items: center;

   @media screen and (max-width: 765px) {
      display: none;
   }
`;

export const Rating = styled.span`
   margin-left: 1em;
   font-size: 0.8em;
   color: #999999;
`;
