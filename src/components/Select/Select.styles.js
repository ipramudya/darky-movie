import styled from 'styled-components';

export const SelectHeaderContainer = styled.div`
   margin: 5em 4.3em 0.5em 4.3em;
   display: flex;
   align-items: baseline;
   justify-content: space-between;

   @media screen and (max-width: 970px) {
      margin: 1.5em 2.3em 0 2.3em;
   }

   @media screen and (max-width: 765px) {
      flex-wrap: wrap;
   }

   @media screen and (max-width: 515px) {
      margin: 1em 0.8em 0 0.8em;
   }
`;

export const SelectWrapper = styled.div`
   display: flex;
   align-items: baseline;
   flex-wrap: wrap;
`;

export const SelectContent = styled.select`
   padding: 0.5em 3em 0.5em 1em;
   color: var(--darksky);
   background-color: #141414;
   border: 2px solid var(--blacksky);
   margin-right: 1em;

   @media screen and (max-width: 515px) {
      max-width: 90%;
   }
`;

export const Text = styled.h3`
   font-size: 0.8em;
   font-weight: 300;

   @media screen and (max-width: 765px) {
      margin: unset;
      padding-top: 1em;
   }
`;
