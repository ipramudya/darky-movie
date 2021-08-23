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
      starDimension: '15px',
      starRatedColor: '#3F72AF',
   };

   return (
      <CardContainer>
         <Link to='/'>
            <CardImage>
               <ImageItem
                  src={`${IMAGE_BASE_URL}${POSTER_SIZE}${item.poster_path}`}
               />
            </CardImage>
            {item?.name ? (
               <CardTitle>{item.name}</CardTitle>
            ) : (
               <CardTitle>{item.title}</CardTitle>
            )}
            <Star>
               <StarRatings {...starConfig} />
               <Rating>{item.vote_average}</Rating>
            </Star>
         </Link>
      </CardContainer>
   );
};

export default Card;
