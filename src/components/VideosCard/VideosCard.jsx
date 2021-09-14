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
      setUrl(video.key);
      setPlayVideo((prev) => !prev);
      document.body.style.overflow = 'hidden';
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
               src={`https://img.youtube.com/vi/${video.key}/hqdefault.jpg`}
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
