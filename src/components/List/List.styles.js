import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ListHeader = styled.div`
   margin: 0 2.3em;
   margin-bottom: 1em;
   display: flex;
   align-items: flex-end;
`;

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
   margin: 3em 0;
`;

export const StyledLink = styled(Link)`
   font-size: 0.9em;
   color: var(--darksky);
   margin-left: 1em;
   transition: all 0.3s;

   &:hover {
      color: var(--greysky);
   }
`;

export const Carousel = styled.div`
   width: 100%;
   padding: 0 2em;
`;
