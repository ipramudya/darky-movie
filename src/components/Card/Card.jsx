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

const Card = ({ item }) => {
   let rating;
   if (item) {
      rating = Math.floor(item.vote_average / 2);
   }

   const starConfig = {
      rating,
      numberOfStars: 5,
      starDimension: '10px',
      starRatedColor: '#3F72AF',
   };

   return (
      <CardContainer>
         {item?.name ? (
            // TVs
            <Link to='/'>
               <CardImage>
                  <ImageItem
                     src={`${IMAGE_BASE_URL}${POSTER_SIZE}${item.poster_path}`}
                  />
               </CardImage>
               <CardTitle>{item.name}</CardTitle>
               <Star>
                  <StarRatings {...starConfig} />
                  <Rating>{item.vote_average}</Rating>
               </Star>
            </Link>
         ) : (
            // Movies
            <Link to='/'>
               <CardImage>
                  <ImageItem
                     src={`${IMAGE_BASE_URL}${POSTER_SIZE}${item.poster_path}`}
                  />
               </CardImage>
               <CardTitle>{item.title}</CardTitle>
               <Star>
                  <StarRatings {...starConfig} />
                  <Rating>{item.vote_average}</Rating>
               </Star>
            </Link>
         )}
      </CardContainer>
   );
};

export default Card;
