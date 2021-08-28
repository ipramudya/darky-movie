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

   &.active {
      top: 5%;
      transition: all 0.8s;
   }
`;

export const InputField = styled.input`
   min-height: 50px;
   min-width: 100%;
   border: none;
   border-radius: 10px;
   padding: 0 2%;
   background-color: #141414;
   color: var(--greysky);
   letter-spacing: 1.5px;
   border: 2px solid var(--blacksky);

   &:focus {
      outline: none;
   }
`;
