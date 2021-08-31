import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {
   CasterContainer,
   Text,
   Carousel,
   CasterCardContainer,
   ImageWrapper,
   Image,
   Subtitle,
} from './Caster.styles';

import NoImage from '../../images/no-image.png';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../utils/config';

const Caster = ({ casters }) => {
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

   const CasterCard = ({ caster }) => {
      return (
         <CasterCardContainer>
            <Link to={`/person/${caster?.id}`}>
               <ImageWrapper className='animated'>
                  <Image
                     src={
                        caster?.profile_path
                           ? `${IMAGE_BASE_URL}${POSTER_SIZE}${caster.profile_path}`
                           : NoImage
                     }
                  />
               </ImageWrapper>
               <Subtitle main>{caster?.original_name}</Subtitle>
               <Subtitle>{caster?.character}</Subtitle>
            </Link>
         </CasterCardContainer>
      );
   };

   return (
      <CasterContainer>
         <Text>Cast</Text>
         <Carousel>
            <Slider {...sliderConfig}>
               {casters?.map((caster, idx) => (
                  <CasterCard caster={caster} key={idx} />
               ))}
            </Slider>
         </Carousel>
      </CasterContainer>
   );
};

export default Caster;
