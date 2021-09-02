import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Slider from 'react-slick';

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

export const StyledSlider = styled(Slider)`
   .slick-prev,
   .slick-next {
      width: 50px;
      height: 100%;
      transition: all 0.5s;
   }
   .slick-prev:hover,
   .slick-next:hover {
      color: transparent;
      outline: none;
      background: rgba(73, 73, 73, 0.3);
   }
   .slick-list {
      margin: 30px;
   }
   .slick-prev:before,
   .slick-next:before {
      font-size: 30px;
      font-family: inherit;
      color: var(--greysky);
      transition: all 0.5s;
   }
   .slick-prev:before {
      content: '<';
   }
   .slick-next:before {
      content: '>';
   }
   .slick-prev:hover:before,
   .slick-next:hover:before {
      color: var(--darksky);
   }
`;
