import StarRatings from 'react-star-ratings';

import { IMAGE_BASE_URL } from '../../utils/config';
import {
   HeroContainer,
   HeroBackdrop,
   BackdropImg,
   HeroDescWrapper,
   Title,
   Subtitle,
   Text,
   Text2,
   Meta,
   SubMeta,
} from './Hero.styles';

import NoImage from '../../images/no-image.png';

const Hero = ({ contents }) => {
   let rating;
   let starConfig;
   if (contents && contents.vote_average) {
      rating = Math.floor(contents.vote_average / 2);
      starConfig = {
         rating,
         numberOfStars: 5,
         starDimension: '15px',
         starRatedColor: '#3F72AF',
      };
   }

   return (
      <>
         {contents && (
            <HeroContainer>
               <HeroDescWrapper>
                  <div>
                     {contents?.name ? (
                        <Title>{contents.name}</Title>
                     ) : (
                        <Title>{contents.title}</Title>
                     )}
                     <Meta>
                        <SubMeta>
                           {contents?.vote_average && (
                              <StarRatings {...starConfig} />
                           )}
                           <Text>{contents.popularity} Reviews</Text>
                           <Text year>
                              {contents.release_date?.split('-', 1)}
                           </Text>
                        </SubMeta>
                        <SubMeta genre>
                           {contents.genres?.map((genre) => (
                              <Text2 key={genre.id}>{genre.name}</Text2>
                           ))}
                        </SubMeta>
                        <SubMeta>
                           <Subtitle>{contents.overview}</Subtitle>
                        </SubMeta>
                     </Meta>
                  </div>
               </HeroDescWrapper>
               <HeroBackdrop>
                  <BackdropImg
                     src={
                        contents.backdrop_path
                           ? `${IMAGE_BASE_URL}original${contents.backdrop_path}`
                           : NoImage
                     }
                  />
               </HeroBackdrop>
            </HeroContainer>
         )}
      </>
   );
};

export default Hero;
