import styled from 'styled-components';

export const CasterContainer = styled.div`
   margin: 3em 0;
`;

export const Text = styled.h3`
   font-size: 1.5em;
   margin: 0 2em;
   margin-bottom: 1em;

   @media screen and (max-width: 765px) {
      font-size: 1.2em;
   }

   @media screen and (max-width: 515px) {
      font-size: 1em;
   }
`;

export const Carousel = styled.div`
   width: 100%;
   padding: 0 2em;
`;

export const CasterCardContainer = styled.div`
   width: 100%;
   padding: 0 0.3em;
   animation: fadeIn 1s;

   &:hover .animated {
      transform: translateY(-0.3em);
   }
`;

export const ImageWrapper = styled.div`
   position: relative;
   height: 0;
   padding-top: 150.27%;
   overflow: hidden;
   background-color: #202124;
   transition: all 0.8s;
`;

export const Image = styled.img`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
`;

export const Subtitle = styled.p`
   font-size: 0.8em;
   margin-top: 0.5em;
   color: ${(props) => (props.main ? 'var(--greysky)' : '#787A91')};
`;
