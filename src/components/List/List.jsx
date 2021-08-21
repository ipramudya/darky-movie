import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';

import Card from '../Card/Card';

// Styles
import { Carousel, ListContainer, ListHeader } from './List.styles';

const List = ({ list_header, contents }) => {
   //    console.log(contents);
   return (
      <ListContainer>
         <ListHeader>
            <h3>{list_header}</h3>
         </ListHeader>
         <Carousel>
            <Swiper slidesPerView={5} spaceBetween={10}>
               {contents?.map((content) => (
                  <SwiperSlide key={content.id}>
                     <Card item={content} />
                  </SwiperSlide>
               ))}
            </Swiper>
         </Carousel>
      </ListContainer>
   );
};

export default List;
