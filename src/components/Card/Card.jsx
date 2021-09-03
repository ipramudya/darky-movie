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
import NoImage from '../../images/no-image.png';

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
      starDimension: '15px',
      starRatedColor: '#3F72AF',
   };

   return (
      <CardContainer ref={ref}>
         <Link to={item?.title ? `/movie/${item.id}` : `/tv/${item.id}`}>
            <CardImage className='animated'>
               <ImageItem
                  src={
                     item?.poster_path ? IMAGE_URL(item.poster_path) : NoImage
                  }
                  alt='Poster Image'
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
