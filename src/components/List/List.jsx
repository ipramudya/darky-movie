import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Styles
import {
   Carousel,
   ListContainer,
   ListHeader,
   Text,
   StyledLink,
   StyledSlider,
} from './List.styles';

const List = ({ list_header, direct_to, isMovie, children }) => {
   const sliderConfig = {
      dots: false,
      slidesToShow: 7,
      slidesToScroll: 7,
      infinite: true,
      responsive: [
         {
            breakpoint: 1490,
            settings: {
               slidesToShow: 6,
               slidesToScroll: 6,
               infinite: true,
               dots: false,
            },
         },
         {
            breakpoint: 1350,
            settings: {
               slidesToShow: 5,
               slidesToScroll: 5,
               infinite: true,
               dots: false,
            },
         },
         {
            breakpoint: 1080,
            settings: {
               slidesToShow: 4,
               slidesToScroll: 4,
               infinite: true,
               dots: false,
            },
         },
         {
            breakpoint: 515,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 3,
               infinite: true,
               dots: false,
            },
         },
      ],
   };

   return (
      <ListContainer>
         <ListHeader>
            <Text>{list_header}</Text>
            {direct_to && (
               <StyledLink
                  to={{
                     pathname: isMovie
                        ? `movie/category/${direct_to}`
                        : `tv/category/${direct_to}`,
                     state: {
                        list_header,
                     },
                  }}
               >
                  Explore more
               </StyledLink>
            )}
         </ListHeader>
         <Carousel>
            <StyledSlider {...sliderConfig}>{children}</StyledSlider>
         </Carousel>
      </ListContainer>
   );
};

export default List;
