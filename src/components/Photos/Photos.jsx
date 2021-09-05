import { IMAGE_URL } from '../../utils/config';
import {
   Header,
   HeaderWrapper,
   PhotosContainer,
   LazyImage,
   GridItem,
   Grid,
} from './Photos.styles';

import NoImage from '../../assets/no-image.png';
import { useEffect, useState } from 'react';

const Photos = ({ contents, title, landscape = false }) => {
   const [scroll, setScroll] = useState(0);

   useEffect(() => {
      const updatePosition = () => {
         setScroll(window.pageYOffset);
      };
      window.addEventListener('scroll', updatePosition);
      updatePosition();
      return () => window.removeEventListener('scroll', updatePosition);
   }, []);

   return (
      <PhotosContainer>
         <HeaderWrapper>
            <Header main>{title}</Header>
            <Header>{contents?.length} images</Header>
         </HeaderWrapper>
         <Grid landscape={landscape}>
            {contents?.map((item, idx) => (
               <GridItem key={idx} poster={!landscape}>
                  <LazyImage
                     key={idx}
                     src={
                        landscape
                           ? IMAGE_URL(item.file_path, landscape)
                           : IMAGE_URL(item.file_path)
                     }
                     scrollPosition={scroll}
                     alt='Image Collections'
                     width='100%'
                     height='100%'
                     effect='blur'
                  />
               </GridItem>
            ))}
            {contents?.length < 0 && NoImage}
         </Grid>
      </PhotosContainer>
   );
};

export default Photos;
