import { CgClose } from 'react-icons/cg';
import ReactPlayer from 'react-player';
import {
   CloseButton,
   VideoBody,
   VideosContainer,
   VideosWrapper,
} from './Videos.styles';

const Videos = ({ url, setPlayVideo }) => {
   const handleCloseVideos = () => {
      setPlayVideo((prev) => !prev);
      document.body.style.overflow = 'visible';
   };

   return (
      <VideosContainer>
         <VideosWrapper>
            <VideoBody>
               <CloseButton onClick={handleCloseVideos}>
                  <CgClose />
               </CloseButton>
               <ReactPlayer
                  className='react-player'
                  url={`https://www.youtube.com/watch?v=${url}`}
                  controls
                  playing
                  style={{ zIndex: 1000 }}
                  width='100%'
                  height='100%'
               />
            </VideoBody>
         </VideosWrapper>
      </VideosContainer>
   );
};

export default Videos;
