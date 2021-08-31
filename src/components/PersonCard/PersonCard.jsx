import { Link } from 'react-router-dom';
import NoImage from '../../images/no-image.png';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../utils/config';
import {
   Image,
   ImageWrapper,
   PersonCardContainer,
   Subtitle,
} from './PersonCard.styles';

const PersonCard = ({ person }) => {
   return (
      <PersonCardContainer>
         <Link to={`/person/${person?.id}`}>
            <ImageWrapper className='animated'>
               <Image
                  src={
                     person?.profile_path
                        ? `${IMAGE_BASE_URL}${POSTER_SIZE}${person.profile_path}`
                        : NoImage
                  }
               />
            </ImageWrapper>
            <Subtitle main>{person?.original_name}</Subtitle>
            <Subtitle>{person?.character}</Subtitle>
         </Link>
      </PersonCardContainer>
   );
};

export default PersonCard;
