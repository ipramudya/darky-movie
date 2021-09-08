import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Stats = styled.div`
   margin-bottom: 1.5em;
`;

export const StatsUl = styled.ul`
   display: flex;
   flex-wrap: wrap;
`;

export const StatsLi = styled.li`
   width: 100%;
   display: flex;
   padding: 0.5em 0;
`;

export const Text = styled.p`
   font-size: 0.9em;
   color: var(--greysky);
   flex: 2;
   transition: all 0.5s;
   letter-spacing: 1px;

   ${(props) => props.main && `flex: 1; max-width: 200px;`}
`;

export const TextLink = styled(Link)`
   text-decoration: underline;
   color: var(--darksky);
   transition: all 0.5s;
   cursor: pointer;

   &:hover {
      color: var(--blacksky);
   }

   ${(props) =>
      props.underline &&
      css`
         > span {
            text-decoration: underline;
            color: var(--darksky);
            transition: all 0.5s;
            cursor: pointer;
         }
         > span:hover {
            color: var(--blacksky);
         }
      `}
`;
