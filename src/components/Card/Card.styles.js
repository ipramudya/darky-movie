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
   transition: all 0.8s;
`;

export const ImageItem = styled.img`
   object-fit: cover;
   width: 100%;
`;

export const CardTitle = styled.h3`
   font-size: 0.8em;
   margin: 1em 0;

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
