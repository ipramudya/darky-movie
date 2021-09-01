import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const PhotosContainer = styled.div`
   margin: 5em 2.3em;
   animation: fadeIn 0.5s;
`;

export const PosterGrid = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(205px, 1fr));
   gap: 0.5em;
   margin-bottom: 3em;
`;

export const BackdropGrid = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
   gap: 0.5em;
`;

export const HeaderWrapper = styled.div`
   margin-bottom: 0.5rem;
   display: flex;
   align-items: baseline;
`;

export const Header = styled.h3`
   font-size: 1.5em;

   ${(props) =>
      !props.main && 'font-size: 0.8em; font-weight: 300; margin-left: 1em;'}
`;

export const GridItem = styled.div`
   position: relative;
   height: 0;
   padding-top: 150%;
   overflow: hidden;
   background-color: #202124;
   transition: all 0.8s;

   ${(props) => !props.poster && 'padding-top: 60%;'}
`;

export const PosterImage = styled(LazyLoadImage)`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
`;
