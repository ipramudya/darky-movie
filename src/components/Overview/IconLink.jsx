import { FiLink } from 'react-icons/fi';
import { SiImdb, SiFacebook, SiTwitter, SiInstagram } from 'react-icons/si';
import { Stats, StatsUl, StatsLi, LinkIcon } from './Overview.styles';
const IconLink = ({ content, externalID }) => {
   return (
      <>
         <Stats>
            <StatsUl>
               {externalID?.facebook_id && (
                  <StatsLi icon>
                     <LinkIcon
                        target='_blank'
                        rel='noopener noreferrer'
                        href={`https://www.facebook.com/${externalID?.facebook_id}`}
                     >
                        <SiFacebook />
                     </LinkIcon>
                  </StatsLi>
               )}
               {externalID?.instagram_id && (
                  <StatsLi icon>
                     <LinkIcon
                        target='_blank'
                        rel='noopener noreferrer'
                        href={`https://www.instagram.com/${externalID?.instagram_id}`}
                     >
                        <SiInstagram />
                     </LinkIcon>
                  </StatsLi>
               )}
               {externalID?.twitter_id && (
                  <StatsLi icon>
                     <LinkIcon
                        target='_blank'
                        rel='noopener noreferrer'
                        href={`https://twitter.com/${externalID?.twitter_id}`}
                     >
                        <SiTwitter />
                     </LinkIcon>
                  </StatsLi>
               )}
               {externalID?.imdb_id && (
                  <StatsLi icon>
                     <LinkIcon
                        target='_blank'
                        rel='noopener noreferrer'
                        href={`https://www.imdb.com/title/${externalID?.imdb_id}`}
                     >
                        <SiImdb />
                     </LinkIcon>
                  </StatsLi>
               )}
               {content?.homepage && (
                  <StatsLi icon>
                     <LinkIcon
                        target='_blank'
                        rel='noopener noreferrer'
                        href={content?.homepage}
                     >
                        <FiLink />
                     </LinkIcon>
                  </StatsLi>
               )}
            </StatsUl>
         </Stats>
      </>
   );
};

export default IconLink;
