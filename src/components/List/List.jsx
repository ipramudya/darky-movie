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

const List = ({ listHeader, directTo, contentPathname, children }) => {
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
            breakpoint: 600,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 3,
               infinite: true,
               dots: false,
            },
         },
         {
            breakpoint: 400,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
               infinite: true,
               arrows: false,
               centerMode: true,
               centerPadding: '20px',
            },
         },
      ],
   };

   const pathnameChecker = (contentPathname, directTo) => {
      switch (contentPathname) {
         case 'movie':
            return `movie/category/${directTo}`;
         case 'tv':
            return `tv/category/${directTo}`;
         default:
            return '/';
      }
   };

   return (
      <ListContainer>
         <ListHeader>
            <Text>{listHeader}</Text>
            {directTo && (
               <StyledLink
                  to={{
                     pathname: pathnameChecker(contentPathname, directTo),
                     state: {
                        listHeader,
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
