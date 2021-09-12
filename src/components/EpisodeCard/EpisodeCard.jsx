import { IMAGE_URL } from '../../utils/config';
import { convertDate } from '../../utils/helpers';
import {
   EpisodeCardContainer,
   ImageWrapper,
   LazyImage,
   Text,
   Subtitle,
} from './EpisodeCard.styles';
import NoImageLandscape from '../../assets/no_image_landscape.jpg';

const EpisodeCard = ({ episode, epNumber }) => {
   const airDate = convertDate(episode?.air_date);

   return (
      <EpisodeCardContainer>
         <ImageWrapper>
            <LazyImage
               src={
                  !episode.still_path
                     ? NoImageLandscape
                     : IMAGE_URL({ path: episode.still_path, backdrops: true })
               }
               alt='Images Episode'
               effect='blur'
            />
         </ImageWrapper>
         <Text>
            <span>E{epNumber}</span>
            {episode.name}
         </Text>
         <Subtitle>{episode.overview}</Subtitle>
         <Text date>{airDate}</Text>
      </EpisodeCardContainer>
   );
};

export default EpisodeCard;
