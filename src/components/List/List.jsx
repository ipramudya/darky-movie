import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Card from '../Card/Card';

// Styles
import { Carousel, ListContainer, ListHeader } from './List.styles';

const List = ({ list_header, contents }) => {
   const sliderConfig = {
      dots: false,
      slidesToShow: 7,
      slidesToScroll: 7,
      infinite: false,
      responsive: [
         {
            breakpoint: 1080,
            settings: {
               slidesToShow: 4,
               slidesToScroll: 4,
               infinite: false,
               dots: false,
            },
         },
      ],
   };

   return (
      <ListContainer>
         <ListHeader>
            <h3>{list_header}</h3>
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
