import styled from 'styled-components';

export const GridContainer = styled.div`
   margin: 3rem 4.3rem;
`;

export const GridContent = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(205px, 1fr));
   gap: 2em 0.5em;
`;

export const Header = styled.h3`
   font-size: 1.5rem;
   margin-bottom: 2rem;
`;
