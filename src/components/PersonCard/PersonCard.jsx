import { Link } from 'react-router-dom';
import {
   Image,
   ImageWrapper,
   PersonCardContainer,
   Subtitle,
} from './PersonCard.styles';
import { IMAGE_URL } from '../../utils/config';
import NoImagePotrait from '../../assets/no_image_potrait.jpg';

const PersonCard = ({ person }) => {
   return (
      <PersonCardContainer>
         <Link to={`/person/${person?.id}`}>
            <ImageWrapper className='animated'>
               <Image
                  key={person.id}
                  src={
                     !person?.profile_path
                        ? NoImagePotrait
                        : IMAGE_URL({ path: person.profile_path })
                  }
                  alt='Photo Profile'
                  width='100%'
                  height='100%'
                  effect='blur'
               />
            </ImageWrapper>
            <Subtitle main>{person?.original_name}</Subtitle>
            {person.character ? (
               <Subtitle>{person?.character}</Subtitle>
            ) : (
               <Subtitle>{person.roles?.[0].character}</Subtitle>
            )}
         </Link>
      </PersonCardContainer>
   );
};

export default PersonCard;
