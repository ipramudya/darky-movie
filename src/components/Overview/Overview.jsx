import { FiLink } from 'react-icons/fi';
import { SiImdb, SiFacebook, SiTwitter, SiInstagram } from 'react-icons/si';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../utils/config';
import {
   OverviewContainer,
   LeftBox,
   ImageWrapper,
   Image,
   RightBox,
   OverviewContent,
   Title,
   Stats,
   StatsUl,
   StatsLi,
   Text,
   LinkIcon,
} from './Overview.styles';

import NoImage from '../../images/no-image.png';

const Overview = ({ content, director, externalID }) => {
   const foundDirector = director?.find((dr) => {
      return dr.job === 'Director';
   });

   console.log(content);
   console.log(externalID);

   const productionCompanies = content.production_companies
      ?.map((company) => company.name)
      .join(', ');

   const releasedDate = new Date(content?.release_date)
      .toUTCString()
      .split(' ')
      .splice(0, 4)
      .join(' ');

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
               <Stats>
                  <StatsUl>
                     <StatsLi>
                        <Text main>Released Date</Text>
                        <Text>{releasedDate}</Text>
                     </StatsLi>
                     <StatsLi>
                        <Text main>Director</Text>
                        <Text underline>{foundDirector?.name}</Text>
                     </StatsLi>
                     <StatsLi>
                        <Text main>Status</Text>
                        <Text>{content?.status}</Text>
                     </StatsLi>
                     <StatsLi>
                        <Text main>Budgets</Text>
                        <Text>$ {content.budget?.toLocaleString()}</Text>
                     </StatsLi>
                     <StatsLi>
                        <Text main>Revenue</Text>
                        <Text>$ {content.revenue?.toLocaleString()}</Text>
                     </StatsLi>
                     <StatsLi>
                        <Text main>Production</Text>
                        <Text>{productionCompanies}</Text>
                     </StatsLi>
                  </StatsUl>
               </Stats>
               <Stats>
                  <StatsUl>
                     <StatsLi icon>
                        <LinkIcon
                           target='_blank'
                           rel='noopener noreferrer'
                           href={`https://www.facebook.com/${externalID?.facebook_id}`}
                        >
                           <SiFacebook />
                        </LinkIcon>
                     </StatsLi>
                     <StatsLi icon>
                        <LinkIcon
                           target='_blank'
                           rel='noopener noreferrer'
                           href={`https://www.instagram.com/${externalID?.instagram_id}`}
                        >
                           <SiInstagram />
                        </LinkIcon>
                     </StatsLi>
                     <StatsLi icon>
                        <LinkIcon
                           target='_blank'
                           rel='noopener noreferrer'
                           href={`https://twitter.com/${externalID?.twitter_id}`}
                        >
                           <SiTwitter />
                        </LinkIcon>
                     </StatsLi>
                     <StatsLi icon>
                        <LinkIcon
                           target='_blank'
                           rel='noopener noreferrer'
                           href={`https://www.imdb.com/title/${externalID?.imdb_id}`}
                        >
                           <SiImdb />
                        </LinkIcon>
                     </StatsLi>
                     <StatsLi icon>
                        <LinkIcon
                           target='_blank'
                           rel='noopener noreferrer'
                           href={content?.homepage}
                        >
                           <FiLink />
                        </LinkIcon>
                     </StatsLi>
                  </StatsUl>
               </Stats>
            </RightBox>
         </OverviewContainer>
      </>
   );
};

export default Overview;
