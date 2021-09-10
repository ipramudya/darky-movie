import styled, { css } from 'styled-components';

export const ButtonContainer = styled.div`
   width: 50%;
   height: fit-content;
   margin: 1em auto 0 auto;
   display: flex;
   justify-content: center;
   align-items: center;

   @media screen and (max-width: 970px) {
      width: 100%;
      justify-content: stretch;
      margin: unset;
   }
`;

export const ButtonItem = styled.button`
   width: auto;
   margin: 1em;
   padding: 0.8em;
   text-align: center;
   outline: none;
   background-color: transparent;
   cursor: pointer;
   font-size: 1em;
   border: none;
   color: var(--greysky);
   transition: all 0.5s;
   text-transform: uppercase;
   letter-spacing: 1.5px;

   &:hover {
      color: var(--darksky);
   }

   @media screen and (max-width: 970px) {
      background-color: #1c1c1c;
      width: 100%;
      margin: unset;
   }

   @media screen and (max-width: 515px) {
      font-size: 0.8em;
      min-height: 50px;
   }

   ${({ active }) =>
      active &&
      css`
         border-bottom: 2px solid var(--darksky);
         color: var(--darksky);
         background-color: transparent;
      `}
`;
