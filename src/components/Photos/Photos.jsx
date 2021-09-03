// import { LazyLoadImage } from 'react-lazy-load-image-component';
import { IMAGE_BASE_URL, IMAGE_URL, POSTER_SIZE } from '../../utils/config';
import {
   Header,
   HeaderWrapper,
   PhotosContainer,
   PosterGrid,
   LazyImage,
   GridItem,
   BackdropGrid,
} from './Photos.styles';

import NoImage from '../../images/no-image.png';
import { useEffect, useState } from 'react';

const Photos = ({ content }) => {
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
            <Header main>Posters</Header>
            <Header>{content.posters?.length} images</Header>
         </HeaderWrapper>
         <PosterGrid>
            {content.posters.length > 0
               ? content.posters?.map((item, idx) => (
                    <GridItem key={idx} poster>
                       <LazyImage
                          key={idx}
                          src={IMAGE_URL(item.file_path)}
                          scrollPosition={scroll}
                          alt='Poster Image'
                          width='100%'
                          height='100%'
                          effect='blur'
                       />
                    </GridItem>
                 ))
               : NoImage}
         </PosterGrid>
         <HeaderWrapper>
            <Header main>Backdrops</Header>
            <Header>{content.backdrops?.length} images</Header>
         </HeaderWrapper>
         <BackdropGrid>
            {content.backdrops.length > 0
               ? content.backdrops?.map((item, idx) => (
                    <GridItem key={idx}>
                       <LazyImage
                          key={idx}
                          src={IMAGE_URL(item.file_path, true)}
                          scrollPosition={scroll}
                          alt='Backdrops Image'
                          width='100%'
                          height='100%'
                          effect='blur'
                       />
                    </GridItem>
                 ))
               : NoImage}
         </BackdropGrid>
      </PhotosContainer>
   );
};

export default Photos;
