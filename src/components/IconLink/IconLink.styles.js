import styled from 'styled-components';

export const IconContainer = styled.div`
   margin-bottom: 1.5em;
`;

export const IconUl = styled.ul`
   display: flex;
   flex-wrap: wrap;
`;

export const IconLi = styled.li`
   display: flex;
   padding: 0.5em 0;
   width: fit-content;
   margin-right: 1em;
`;

export const LinkIcon = styled.a`
   color: var(--greysky);
   transition: all 0.5s;

   &:hover {
      color: var(--darksky);
   }

   > * {
      font-size: 1.8em;
   }
`;
