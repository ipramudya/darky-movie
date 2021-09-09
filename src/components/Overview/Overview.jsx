import { IMAGE_URL } from '../../utils/config';
import {
   OverviewContainer,
   LeftBox,
   ImageWrapper,
   Image,
   RightBox,
   OverviewContent,
   Title,
   Subtitle,
} from './Overview.styles';

import NoImagePotrait from '../../assets/no_image_potrait.jpg';

const Overview = ({ content, children }) => {
   return (
      <>
         <OverviewContainer>
            <LeftBox>
               <ImageWrapper>
                  <Image
                     src={
                        !content?.poster_path && !content?.profile_path
                           ? NoImagePotrait
                           : content?.poster_path
                           ? IMAGE_URL({ path: content?.poster_path })
                           : IMAGE_URL({ path: content?.profile_path })
                     }
                     alt='Poster Image'
                  />
               </ImageWrapper>
            </LeftBox>
            <RightBox>
               <OverviewContent>
                  <Title>
                     {content.hasOwnProperty('also_known_as')
                        ? `${content.name}'s Biography`
                        : 'Story Line'}
                  </Title>
                  {content.overview && <Subtitle>{content.overview}</Subtitle>}
                  {content.biography &&
                     content.biography
                        .split('\n\n')
                        .map((paragraph) => (
                           <Subtitle key={paragraph}>{paragraph}</Subtitle>
                        ))}
               </OverviewContent>
               {children}
            </RightBox>
         </OverviewContainer>
      </>
   );
};

export default Overview;
