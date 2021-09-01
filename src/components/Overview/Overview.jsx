import { IMAGE_BASE_URL, POSTER_SIZE } from '../../utils/config';
import IconLink from './IconLink';
import {
   OverviewContainer,
   LeftBox,
   ImageWrapper,
   Image,
   RightBox,
   OverviewContent,
   Title,
} from './Overview.styles';

import NoImage from '../../images/no-image.png';
import MovieStats from './MovieStats';
import TvStats from './TvStats';

const Overview = ({ content, caster, externalID, isMovie }) => {
   console.log(content);

   return (
      <>
         <OverviewContainer>
            <LeftBox>
               <ImageWrapper>
                  <Image
                     src={
                        content.poster_path
                           ? `${IMAGE_BASE_URL}${POSTER_SIZE}${content?.poster_path}`
                           : NoImage
                     }
                  />
               </ImageWrapper>
            </LeftBox>
            <RightBox>
               <OverviewContent>
                  <Title>Storyline</Title>
                  <p>{content.overview}</p>
               </OverviewContent>
               {isMovie ? (
                  <MovieStats content={content} caster={caster} />
               ) : (
                  <TvStats content={content} caster={caster} />
               )}
               <IconLink content={content} externalID={externalID} />
            </RightBox>
         </OverviewContainer>
      </>
   );
};

export default Overview;
