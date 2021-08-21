import { useEffect, useState } from 'react';
import StarRating from 'react-star-ratings';

import ApiRequest from '../../api/request';
import { IMAGE_BASE_URL } from '../../utils/config';
import {
   HeroContainer,
   HeroBackdrop,
   BackdropImg,
   HeroDescWrapper,
   Title,
   Text,
   Text2,
   Meta,
   SubMeta,
} from './Hero.styles';

const Hero = () => {
   const [randomMovie, setRandomMovie] = useState(null);

   useEffect(() => {
      ApiRequest.fetchRandomPopularMovie().then((response) => {
         const id = response.id;
         ApiRequest.fetchMovie(id).then((movie) => setRandomMovie(movie));
      });
   }, []);

   let rating;
   if (randomMovie) {
      rating = Math.floor(randomMovie.vote_average / 2);
   }

   const starConfig = {
      rating,
      numberOfStars: 5,
      starDimension: '15px',
      starRatedColor: '#3F72AF',
   };

   return (
      <>
         {randomMovie && (
            <HeroContainer>
               <HeroDescWrapper>
                  <div>
                     <Title>{randomMovie.title}</Title>
                     <Meta>
                        <SubMeta>
                           <StarRating {...starConfig} />
                           <Text style={{ marginLeft: '1em' }}>
                              {randomMovie.popularity} Reviews
                           </Text>
                           <Text style={{ marginLeft: '1em' }}>
                              {randomMovie.release_date?.split('-', 1)}
                           </Text>
                        </SubMeta>
                        <SubMeta>
                           {randomMovie.genres?.map((genre) => (
                              <Text2 key={genre.id}>{genre.name}</Text2>
                           ))}
                        </SubMeta>
                        <SubMeta>
                           <Text>{randomMovie.overview}</Text>
                        </SubMeta>
                     </Meta>
                  </div>
               </HeroDescWrapper>
               <HeroBackdrop>
                  <BackdropImg
                     src={`${IMAGE_BASE_URL}original${randomMovie.backdrop_path}`}
                  />
               </HeroBackdrop>
            </HeroContainer>
         )}
      </>
   );
};

export default Hero;
