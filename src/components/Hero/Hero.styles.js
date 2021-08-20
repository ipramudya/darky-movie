import styled from 'styled-components';

export const HeroContainer = styled.div`
   width: 100%;
   padding-bottom: 40%;
   display: flex;
   justify-content: center;
   background-color: black;
   position: relative;

   /* @media screen and (max-width: 1280px) {

    } */
`;

export const HeroBackdrop = styled.div`
   position: absolute;
   top: 0;
   right: 0;
   width: 70%;
   height: 100%;

   &::after {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      content: '';
      display: block;
      background-image: linear-gradient(
         90deg,
         #000 0,
         transparent 50%,
         transparent
      );
   }
`;

export const BackdropImg = styled.img`
   height: 100%;
   display: inline-block;
`;

export const HeroDescWrapper = styled.div`
   padding: 0 5rem;
   position: absolute;
   top: 0;
   bottom: 0;
   left: 0;
   z-index: 1;
   width: 50%;
   height: 100%;
   display: flex;
   align-items: center;
`;

export const Text = styled.p`
   font-size: var(--fontSM);
   color: var(--white);
`;

export const Text2 = styled.p`
   font-size: var(--fontSM);
   font-style: italic;
   color: #999999;
   margin-right: 1em;
`;

export const Meta = styled.div`
   display: flex;
   flex-direction: column;
`;

export const SubMeta = styled.div`
   display: flex;
   align-items: center;
   margin-top: 0.8em;
`;
