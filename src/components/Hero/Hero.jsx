import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom';

import { IMAGE_URL } from '../../utils/config';
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

import NoImageLandscape from '../../assets/no_image_landscape.jpg';
import { StarIconPath, StarViewBox } from '../../assets/star-icon';

const Hero = ({ contents, disabled }) => {
   let rating;
   if (contents?.vote_average) {
      rating = Math.floor(contents.vote_average / 2);
   } else {
      rating = 0;
   }

   const starConfig = {
      rating,
      numberOfStars: 5,
      starDimension: '1.3em',
      starSpacing: '0.1em',
      starRatedColor: '#3F72AF',
      svgIconPath: StarIconPath,
      svgIconViewBox: StarViewBox,
   };

   const HeroChildren = () => {
      return (
         <HeroContainer disable={disabled}>
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
                        <Text>{contents.popularity} Popularity</Text>
                        <Text year>{contents.release_date?.split('-', 1)}</Text>
                     </SubMeta>
                     <SubMeta genre>
                        {contents.genres?.map((genre) => (
                           <Text2
                              key={genre.id}
                              to={{
                                 pathname: contents?.title
                                    ? `/discover/movie/${genre?.id}`
                                    : `/discover/tv/${genre?.id}`,
                                 state: {
                                    genres: `#${genre.name?.replace(/ /g, '')}`,
                                 },
                              }}
                           >
                              #{genre.name?.replace(/ /g, '')}
                           </Text2>
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
                     !contents.backdrop_path
                        ? NoImageLandscape
                        : IMAGE_URL({
                             path: contents.backdrop_path,
                             original: true,
                          })
                  }
                  alt='Backdrops Hero Image'
               />
            </HeroBackdrop>
         </HeroContainer>
      );
   };

   return (
      <>
         {contents &&
            (!disabled ? (
               <Link
                  to={
                     contents.title
                        ? `/movie/${contents.id}`
                        : `/tv/${contents.id}`
                  }
               >
                  <HeroChildren />
               </Link>
            ) : (
               <HeroChildren />
            ))}
      </>
   );
};

export default Hero;
