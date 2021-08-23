import styled from 'styled-components';

export const Text = styled.h3`
   font-size: 1.5em;

   @media screen and (max-width: 765px) {
      font-size: 1.2em;
   }

   @media screen and (max-width: 515px) {
      font-size: 1em;
   }
`;

export const ListContainer = styled.div`
   margin: 3rem 0;
`;

export const ListHeader = styled.div`
   margin: 0 2rem;
   margin-bottom: 1rem;
`;

export const Carousel = styled.div`
   width: 100%;
   padding: 0 2em;
`;
