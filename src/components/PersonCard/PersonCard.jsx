import { Link } from 'react-router-dom';
import NoImage from '../../images/no-image.png';
import { IMAGE_URL } from '../../utils/config';
import {
   Image,
   ImageWrapper,
   PersonCardContainer,
   Subtitle,
} from './PersonCard.styles';

const PersonCard = ({ person, tv }) => {
   return (
      <PersonCardContainer>
         <Link to={`/person/${person?.id}`}>
            <ImageWrapper className='animated'>
               <Image
                  src={
                     person?.profile_path
                        ? IMAGE_URL(person.profile_path)
                        : NoImage
                  }
                  alt='Photo Profile'
               />
            </ImageWrapper>
            <Subtitle main>{person?.original_name}</Subtitle>
            {!tv ? (
               <Subtitle>{person?.character}</Subtitle>
            ) : (
               <Subtitle>{person.roles[0]?.character}</Subtitle>
            )}
         </Link>
      </PersonCardContainer>
   );
};

export default PersonCard;
