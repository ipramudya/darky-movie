import { IMAGE_URL } from '../../utils/config';
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

const Overview = ({ content, caster, externalID, type }) => {
   return (
      <>
         <OverviewContainer>
            <LeftBox>
               <ImageWrapper>
                  <Image
                     src={
                        content?.poster_path
                           ? `${IMAGE_URL(content.poster_path)}`
                           : content?.profile_path
                           ? `${IMAGE_URL(content.profile_path)}`
                           : NoImage
                     }
                     alt='Poster Image'
                  />
               </ImageWrapper>
            </LeftBox>
            <RightBox>
               <OverviewContent>
                  <Title>
                     {content.hasOwnProperty('also_known_as')
                        ? content.name
                        : 'Story Line'}
                  </Title>
                  <p>{content.overview || content.biography}</p>
               </OverviewContent>
               {type === 'movie' && (
                  <MovieStats content={content} caster={caster} />
               )}
               {type === 'tv' && <TvStats content={content} caster={caster} />}
               <IconLink content={content} externalID={externalID} />
            </RightBox>
         </OverviewContainer>
      </>
   );
};

export default Overview;
