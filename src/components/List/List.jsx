import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Card from '../Card/Card';

// Styles
import {
   Carousel,
   ListContainer,
   ListHeader,
   Text,
   StyledLink,
} from './List.styles';

const List = ({ list_header, direct_to, contents }) => {
   const sliderConfig = {
      dots: false,
      slidesToShow: 7,
      slidesToScroll: 7,
      infinite: false,
      responsive: [
         {
            breakpoint: 1350,
            settings: {
               slidesToShow: 5,
               slidesToScroll: 5,
               infinite: false,
               dots: false,
            },
         },
         {
            breakpoint: 1080,
            settings: {
               slidesToShow: 4,
               slidesToScroll: 4,
               infinite: false,
               dots: false,
            },
         },
         {
            breakpoint: 515,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 3,
               infinite: false,
               dots: false,
            },
         },
      ],
   };

   return (
      <ListContainer>
         <ListHeader>
            <Text>{list_header}</Text>
            <StyledLink
               to={{
                  pathname: contents[0]?.title
                     ? `movie/category/${direct_to}`
                     : `tv/category/${direct_to}`,
                  state: {
                     list_header,
                  },
               }}
            >
               Explore more
            </StyledLink>
         </ListHeader>
         <Carousel>
            <Slider {...sliderConfig}>
               {contents?.map((content, idx) => (
                  <Card item={content} key={idx} />
               ))}
            </Slider>
         </Carousel>
      </ListContainer>
   );
};

export default List;
