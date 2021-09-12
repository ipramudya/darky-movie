import { AiOutlinePlayCircle } from 'react-icons/ai';
import { convertDate } from '../../utils/helpers';
import {
   ImageWrapper,
   LazyImage,
   PlayButton,
   VideosCardContainer,
   Text,
} from './VideosCard.styles';

const VideosCard = ({ video }) => {
   const handleOpenVideos = () => {
      console.log('Button Clicked');
   };

   const publishedAt = convertDate(video.published_at);

   return (
      <VideosCardContainer>
         <ImageWrapper>
            <PlayButton onClick={handleOpenVideos}>
               <AiOutlinePlayCircle />
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
