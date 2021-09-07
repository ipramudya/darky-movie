import { IMAGE_URL } from '../../utils/config';
import { convertDate } from '../../utils/helpers';
import {
   EpisodeCardContainer,
   ImageWrapper,
   LazyImage,
   Text,
   Subtitle,
} from './EpisodeCard.styles';
const EpisodeCard = ({ episode, idx }) => {
   const airDate = convertDate(episode?.air_date);

   return (
      <EpisodeCardContainer>
         <ImageWrapper>
            <LazyImage
               src={IMAGE_URL(episode.still_path, true)}
               alt='Images Episode'
               effect='blur'
            />
         </ImageWrapper>
         <Text>
            E{idx}
            <span>{episode.name}</span>
         </Text>
         <Subtitle>{episode.overview}</Subtitle>
         <Text date>{airDate}</Text>
      </EpisodeCardContainer>
   );
};

export default EpisodeCard;
