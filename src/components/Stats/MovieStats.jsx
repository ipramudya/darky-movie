import { Stats, StatsLi, StatsUl, Text, TextLink } from './Stats.style';

const MovieStats = ({ content, caster }) => {
   const foundDirector = caster
      ?.map((person) => {
         return { name: person.name, id: person.id, job: person.job };
      })
      .find((dr) => {
         return dr.job === 'Director';
      });

   const productionCompanies = content.production_companies
      ?.map((company) => company.name)
      .join(', ');

   const releasedDate = new Date(content?.release_date)
      .toUTCString()
      .split(' ')
      .splice(0, 4)
      .join(' ');

   return (
      <Stats>
         <StatsUl>
            <StatsLi>
               <Text main>Released Date</Text>
               <Text>{releasedDate}</Text>
            </StatsLi>
            <StatsLi>
               <Text main>Director</Text>
               <TextLink movie to={`/person/${foundDirector?.id}`}>
                  {foundDirector?.name}
               </TextLink>
            </StatsLi>
            <StatsLi>
               <Text main>Status</Text>
               <Text>{content?.status}</Text>
            </StatsLi>
            {content?.budget > 0 && (
               <StatsLi>
                  <Text main>Budgets</Text>
                  <Text>$ {content.budget?.toLocaleString()}</Text>
               </StatsLi>
            )}
            {content?.revenue > 0 && (
               <StatsLi>
                  <Text main>Revenue</Text>
                  <Text>$ {content.revenue?.toLocaleString()}</Text>
               </StatsLi>
            )}
            {content.production_companies && (
               <StatsLi>
                  <Text main>Production</Text>
                  <Text>{productionCompanies}</Text>
               </StatsLi>
            )}
         </StatsUl>
      </Stats>
   );
};

export default MovieStats;
