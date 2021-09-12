import styled from 'styled-components';

export const TopbarContainer = styled.nav`
   position: sticky;
   top: 0;
   left: 0;
   right: 0;
   display: flex;
   align-items: center;
   justify-content: center;
   height: 3em;
   background-color: black;
   display: none;
   z-index: 50;

   @media screen and (max-width: 765px) {
      display: flex;
   }
`;

export const TopbarButton = styled.button`
   position: absolute;
   top: 0;
   left: 0;
   background: none;
   outline: none;
   border: none;
   cursor: pointer;
   width: 50px;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;

   > * {
      font-size: 1.5em;
      color: var(--greysky);
   }
`;

export const TopbarTitle = styled.p`
   font-size: 0.8em;
   color: var(--greysky);
`;
