import { CgPlayButtonO } from 'react-icons/cg';
import { convertDate } from '../../utils/helpers';
import {
   ImageWrapper,
   LazyImage,
   PlayButton,
   VideosCardContainer,
   Text,
} from './VideosCard.styles';

const VideosCard = ({ video, setUrl, setPlayVideo }) => {
   const handleOpenVideos = () => {
      document.body.style.overflow = 'hidden';
      setUrl(video.key);
      setPlayVideo((prev) => !prev);
   };

   const publishedAt = convertDate(video.published_at);

   return (
      <VideosCardContainer>
         <ImageWrapper>
            <PlayButton onClick={handleOpenVideos}>
               <CgPlayButtonO />
            </PlayButton>
            <LazyImage
               alt={video.type}
               src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
            />
         </ImageWrapper>
         <Text>{video.name}</Text>
         <Text date>
            {video.type} <span>{publishedAt}</span>
         </Text>
      </VideosCardContainer>
   );
};

export default VideosCard;
