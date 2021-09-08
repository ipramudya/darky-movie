import styled from 'styled-components';

export const SearchContainer = styled.div`
   width: 50%;
   position: fixed;
   top: -10%;
   right: 0;
   left: 0;
   text-align: center;
   margin: 0 auto;
   height: fit-content;
   transition: all 0.8s;
   z-index: 2;
   display: flex;

   &.active {
      top: 5%;
      transition: all 0.8s;
   }
`;

export const InputField = styled.input`
   min-height: 50px;
   min-width: 95%;
   border: none;
   border-radius: 10px 0 0 10px;
   padding: 0 2%;
   background-color: #141414;
   color: var(--greysky);
   letter-spacing: 1.5px;
   border: 2px solid var(--blacksky);
   border-right: none;

   &:focus {
      outline: none;
   }
`;

export const CloseButton = styled.button`
   min-width: 5%;
   border-radius: 0 10px 10px 0;
   background-color: #141414;
   border: 2px solid var(--blacksky);
   border-left: none;

   > * {
      color: var(--greysky);
      font-size: 1.5em;
      cursor: pointer;
   }
`;
