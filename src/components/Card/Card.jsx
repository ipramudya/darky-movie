import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import {
   CardContainer,
   CardImage,
   ImageItem,
   CardTitle,
   Star,
   Rating,
} from './Card.styles';
import { IMAGE_URL } from '../../utils/config';
import NoImagePotrait from '../../assets/no_image_potrait.jpg';
import { StarIconPath, StarViewBox } from '../../assets/star-icon';

const Card = forwardRef(({ item }, ref) => {
   let rating;
   if (item.vote_average) {
      rating = Math.floor(item.vote_average / 2);
   } else {
      rating = 0;
   }

   const starConfig = {
      rating,
      numberOfStars: 5,
      starDimension: '1em',
      starSpacing: '0',
      starRatedColor: '#3F72AF',
      svgIconPath: StarIconPath,
      svgIconViewBox: StarViewBox,
   };

   return (
      <CardContainer ref={ref}>
         <Link to={item?.title ? `/movie/${item.id}` : `/tv/${item.id}`}>
            <CardImage className='animated'>
               <ImageItem
                  key={item.id}
                  src={
                     !item?.poster_path
                        ? NoImagePotrait
                        : IMAGE_URL({ path: item.poster_path })
                  }
                  alt='Poster Image'
                  width='100%'
                  height='100%'
                  effect='blur'
               />
            </CardImage>
            <CardTitle>{item?.title ? item.title : item.name}</CardTitle>
            <Star>
               <StarRatings {...starConfig} />
               <Rating>{item.vote_average?.toFixed(1)}</Rating>
            </Star>
         </Link>
      </CardContainer>
   );
});

export default Card;
