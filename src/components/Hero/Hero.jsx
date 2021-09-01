import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom';

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
   if (contents?.vote_average) {
      rating = Math.floor(contents.vote_average / 2);
   } else {
      rating = 0;
   }

   const starConfig = {
      rating,
      numberOfStars: 5,
      starDimension: '15px',
      starRatedColor: '#3F72AF',
   };

   return (
      <>
         {contents && (
            <Link
               to={
                  contents.title
                     ? `/movie/${contents.id}`
                     : `/tv/${contents.id}`
               }
            >
               <HeroContainer>
                  <HeroDescWrapper>
                     <div>
                        <Title>
                           {contents?.title ? contents.title : contents.name}
                        </Title>
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
            </Link>
         )}
      </>
   );
};

export default Hero;
