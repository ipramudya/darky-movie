import styled from 'styled-components';

export const HeroContainer = styled.div`
   width: 100%;
   padding-bottom: 40%;
   background-color: black;
   position: relative;

   @media screen and (max-width: 970px) {
      position: unset;
      padding: 0;
      height: 50rem;
      display: flex;
      flex-direction: column;
   }
`;

export const HeroBackdrop = styled.div`
   position: absolute;
   top: 0;
   right: 0;
   width: 70%;
   height: 100%;
   animation: fadeInRight 1s ease;

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

   @media screen and (max-width: 970px) {
      position: relative;
      width: 100%;

      &::after {
         background-image: linear-gradient(
            0deg,
            #000 0,
            rgba(0, 0, 0, 0.1) 50%,
            rgba(0, 0, 0, 0.1)
         );
      }
   }
`;

export const BackdropImg = styled.img`
   height: 100%;
   display: inline-block;

   @media screen and (max-width: 970px) {
      width: 100%;
      object-fit: cover;
   }
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
   animation: fadeInLeft 1s;

   @media screen and (max-width: 970px) {
      order: 2;
      position: static;
      width: 100%;
      height: 50%;
   }
`;

export const Title = styled.h1`
   margin-bottom: 0.5em;

   @media screen and (max-width: 970px) {
      font-size: 1.5em;
   }
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
