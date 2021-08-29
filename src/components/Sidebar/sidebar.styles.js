import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SidebarContainer = styled.nav`
   width: 5em;
   height: 100vh;
   position: fixed;
   top: 0;
   left: 0;
   right: auto;
   bottom: 0;
   z-index: 10;
   background-color: black;
   border-right: 1px solid var(--blacksky);
`;

export const NavWrapper = styled.ul`
   display: flex;
   flex-direction: column;
   height: 100%;
`;

export const NavItem = styled.li`
   width: 100%;
   height: 10vh;
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const NavDirection = styled(NavLink)`
   width: 100%;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   transition: all 1s;
   position: relative;

   &.active {
      > * {
         color: var(--darksky);
      }
      &::after {
         display: block;
      }
   }

   &:visited {
      color: var(--greysky);
   }

   > * {
      color: var(--greysky);
      vertical-align: middle;
      width: 25px;
      height: 25px;
   }

   &:hover > * {
      opacity: 0.5;
   }

   &::after {
      content: '${(props) => props.content}';
      display: none;
      position: absolute;
      top: -5%;
      padding: 0.3em;
      width: fit-content;
      text-align: center;
      font-size: 0.8em;
      color: var(--darksky);
      background-color: black;
      border-radius: 3px;
      text-transform: uppercase;
      letter-spacing: 1px;
      z-index: 20;
      font-weight: 600;
   }

   &:hover:after {
      display: ${(props) => (props.content ? 'block' : 'none')};
      animation: fadeInLeft 0.5s;
      color: var(--greysky);
   }
`;

export const SearchButton = styled.button`
   background-color: transparent;
   border: none;
   color: white;
   width: 100%;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;
   transition: all 1s;

   > * {
      color: var(--greysky);
      vertical-align: middle;
      width: 25px;
      height: 25px;
   }

   &:hover > * {
      opacity: 0.5;
   }
`;
