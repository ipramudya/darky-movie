import styled, { css } from 'styled-components';

export const GridContainer = styled.div`
   margin: 3em 4.3em;

   @media screen and (max-width: 970px) {
      margin: 5em 2.3em;
   }

   @media screen and (max-width: 765px) {
      margin: 1.5em 2.3em;
   }

   @media screen and (max-width: 515px) {
      margin: 1em 0.8em;
   }

   ${(props) =>
      props.episodes &&
      css`
         @media screen and (max-width: 970px) {
            margin: 1.5em 2.3em;
         }
      `}
`;

export const GridContent = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(205px, 1fr));
   gap: 2em 0.5em;

   @media screen and (max-width: 765px) {
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      gap: 0.5em 0.25em;
   }

   @media screen and (max-width: 515px) {
      gap: 0.5em 0;
   }

   /* Episodes */
   ${(props) =>
      props.long &&
      css`
         grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

         @media screen and (max-width: 765px) {
            grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
         }
      `}
`;

export const Header = styled.h3`
   font-size: 1.5em;
   margin-bottom: 2em;

   @media screen and (max-width: 970px) {
      margin: 0 0.3em 1em 0.3em;
   }

   @media screen and (max-width: 765px) {
      display: none;
   }
`;
