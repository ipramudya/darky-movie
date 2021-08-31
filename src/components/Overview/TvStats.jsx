import { Stats, StatsUl, StatsLi, Text } from './Overview.styles';

const TvStats = ({ content, caster }) => {
   const job = caster.crew
      ?.map((person) => {
         return [person.name, person.jobs[0].job];
      })
      .find((person) => {
         return (
            person[1] === 'Comic Book' ||
            person[1] === 'Creator' ||
            person[1] === 'Director' ||
            person[1] === 'Executive Producer'
         );
      });

   const configureDate = (content) => {
      return new Date(content).toUTCString().split(' ').splice(0, 4).join(' ');
   };

   const productionCompanies = content.production_companies
      ?.map((company) => company.name)
      .join(', ');

   return (
      <>
         <Stats>
            <StatsUl>
               {content?.first_air_date && (
                  <StatsLi>
                     <Text main>First Aired</Text>
                     <Text>{configureDate(content?.first_air_date)}</Text>
                  </StatsLi>
               )}
               {content?.last_air_date && (
                  <StatsLi>
                     <Text main>Last Aired</Text>
                     <Text>{configureDate(content?.last_air_date)}</Text>
                  </StatsLi>
               )}
               {content?.episode_run_time && (
                  <StatsLi>
                     <Text main>Episode runtime</Text>
                     <Text>
                        {content.episode_run_time
                           ?.map((item) => `${item} min`)
                           .join(', ')}
                     </Text>
                  </StatsLi>
               )}
               {job && (
                  <StatsLi>
                     <Text main>{job[1]}</Text>
                     <Text underline>
                        <span>{job[0]}</span>
                     </Text>
                  </StatsLi>
               )}
               {content?.status && (
                  <StatsLi>
                     <Text main>Status</Text>
                     <Text>{content?.status}</Text>
                  </StatsLi>
               )}
               {content?.spoken_languages && (
                  <StatsLi>
                     <Text main>Language</Text>
                     <Text>{content?.spoken_languages[0]?.english_name}</Text>
                  </StatsLi>
               )}
               {productionCompanies && (
                  <StatsLi>
                     <Text main>Production</Text>
                     <Text>{productionCompanies}</Text>
                  </StatsLi>
               )}
            </StatsUl>
         </Stats>
      </>
   );
};

export default TvStats;
