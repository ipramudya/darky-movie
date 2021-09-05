import { FiLink } from 'react-icons/fi';
import { SiImdb, SiFacebook, SiTwitter, SiInstagram } from 'react-icons/si';
import { IconContainer, IconLi, IconUl, LinkIcon } from './IconLink.styles';
const IconLink = ({ externalID, homepage }) => {
   return (
      <IconContainer>
         <IconUl>
            {externalID?.facebook_id && (
               <IconLi>
                  <LinkIcon
                     target='_blank'
                     rel='noopener noreferrer'
                     href={`https://www.facebook.com/${externalID?.facebook_id}`}
                  >
                     <SiFacebook />
                  </LinkIcon>
               </IconLi>
            )}
            {externalID?.instagram_id && (
               <IconLi>
                  <LinkIcon
                     target='_blank'
                     rel='noopener noreferrer'
                     href={`https://www.instagram.com/${externalID?.instagram_id}`}
                  >
                     <SiInstagram />
                  </LinkIcon>
               </IconLi>
            )}
            {externalID?.twitter_id && (
               <IconLi>
                  <LinkIcon
                     target='_blank'
                     rel='noopener noreferrer'
                     href={`https://twitter.com/${externalID?.twitter_id}`}
                  >
                     <SiTwitter />
                  </LinkIcon>
               </IconLi>
            )}
            {externalID?.imdb_id && (
               <IconLi>
                  <LinkIcon
                     target='_blank'
                     rel='noopener noreferrer'
                     href={`https://www.imdb.com/title/${externalID?.imdb_id}`}
                  >
                     <SiImdb />
                  </LinkIcon>
               </IconLi>
            )}
            {homepage && (
               <IconLi>
                  <LinkIcon
                     target='_blank'
                     rel='noopener noreferrer'
                     href={homepage}
                  >
                     <FiLink />
                  </LinkIcon>
               </IconLi>
            )}
         </IconUl>
      </IconContainer>
   );
};

export default IconLink;
