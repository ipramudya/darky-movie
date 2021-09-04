import styled from 'styled-components';

export const ButtonContainer = styled.div`
   width: 50%;
   height: fit-content;
   margin: 1em auto 0 auto;
   display: flex;
   justify-content: center;
   align-items: center;
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

   ${(props) =>
      props.active &&
      `border-bottom: 2px solid var(--darksky); color: var(--darksky)`}
`;
