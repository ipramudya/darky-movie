import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const OverviewContainer = styled.div`
   margin: 5em 2.3em;
   display: flex;
   animation: fadeIn 1s;
`;

export const LeftBox = styled.div`
   padding-right: 3em;
   width: 25%;
   max-width: 400px;
`;

export const ImageWrapper = styled.div`
   position: relative;
   height: 0;
   padding-top: 150.27%;
   overflow: hidden;
   background-color: #202124;
`;

export const Image = styled.img`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
`;

export const RightBox = styled.div`
   flex: 1;
`;

export const OverviewContent = styled.div`
   margin-bottom: 1.5em;
   max-width: 1000px;
`;

export const Title = styled.h3`
   font-size: 1.5em;
   letter-spacing: 1.5px;
   margin-bottom: 0.5em;
`;

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

   ${(props) => props.icon && `width: fit-content; margin-right:1em;`}
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
      !props.movie &&
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
