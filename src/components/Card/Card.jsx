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
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../utils/config';
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

   const checkingContents = () => {
      if (item?.title) {
         return (
            <Link to={`/movie/${item.id}`}>
               <CardImage className='animated'>
                  <ImageItem
                     src={
                        item?.poster_path
                           ? `${IMAGE_BASE_URL}${POSTER_SIZE}${item.poster_path}`
                           : NoImage
                     }
                  />
               </CardImage>
               <CardTitle>{item.title}</CardTitle>
               <Star>
                  <StarRatings {...starConfig} />
                  <Rating>{item.vote_average}</Rating>
               </Star>
            </Link>
         );
      } else {
         return (
            <Link to={`/tv/${item.id}`}>
               <CardImage className='animated'>
                  <ImageItem
                     src={
                        item?.poster_path
                           ? `${IMAGE_BASE_URL}${POSTER_SIZE}${item.poster_path}`
                           : NoImage
                     }
                  />
               </CardImage>
               <CardTitle>{item.name}</CardTitle>
               <Star>
                  <StarRatings {...starConfig} />
                  <Rating>{item.vote_average}</Rating>
               </Star>
            </Link>
         );
      }
   };

   return <CardContainer ref={ref}>{checkingContents()}</CardContainer>;
});

export default Card;
