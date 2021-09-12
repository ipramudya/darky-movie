import { IMAGE_URL } from '../../utils/config';
import {
   Header,
   HeaderWrapper,
   PhotosContainer,
   LazyImage,
   GridItem,
   Grid,
} from './Photos.styles';
import useLazyScroll from '../../hooks/useLazyScroll';
import NoImagePotrait from '../../assets/no_image_potrait.jpg';

const Photos = ({ contents, title, landscape = false }) => {
   const { scroll } = useLazyScroll();

   return (
      <PhotosContainer>
         <HeaderWrapper>
            <Header main>{title}</Header>
            <Header>{contents?.length} images</Header>
         </HeaderWrapper>
         <Grid landscape={landscape}>
            {contents?.map((item) => (
               <GridItem key={item.file_path} poster={!landscape}>
                  <LazyImage
                     key={item.file_path}
                     src={
                        landscape
                           ? IMAGE_URL({
                                path: item.file_path,
                                backdrops: true,
                             })
                           : IMAGE_URL({ path: item.file_path })
                     }
                     scrollPosition={scroll}
                     alt='Image Collections'
                     width='100%'
                     height='100%'
                     effect='blur'
                  />
               </GridItem>
            ))}
            {contents?.length < 0 && NoImagePotrait}
         </Grid>
      </PhotosContainer>
   );
};

export default Photos;
