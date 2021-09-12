import styled from 'styled-components';

export const VideosContainer = styled.div`
   position: fixed;
   inset: 0;
   overflow-y: auto;
   overflow-x: hidden;
   z-index: 999;
   background-color: black;
`;

export const VideosWrapper = styled.div`
   display: flex;
   flex-direction: column;
   min-height: 100%;
`;

export const VideoBody = styled.div`
   position: relative;
   margin: auto;
   width: 80%;
   height: 80vh;

   & .react-player {
      position: absolute;
      top: 0;
      left: 0;
   }
`;

export const CloseButton = styled.button`
   position: fixed;
   top: 2%;
   right: 2%;
   background: none;
   border: none;
   display: flex;
   justify-content: center;
   align-items: center;
   z-index: 998;
   cursor: pointer;
   width: 50px;
   height: 50px;

   > svg {
      color: var(--greysky);
      width: 80%;
      height: 80%;
      transition: all 0.5s;
   }

   > *:hover {
      color: var(--darksky);
   }
`;
