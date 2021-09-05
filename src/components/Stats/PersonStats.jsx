import { Stats, StatsLi, StatsUl, Text } from './Stats.style';

const PersonStats = ({ content }) => {
   const bornDate = new Date(content?.birthday)
      .toUTCString()
      .split(' ')
      .splice(0, 4)
      .join(' ');
   const age = new Date().getFullYear() - bornDate.split(' ')[3];

   return (
      <Stats>
         <StatsUl>
            <StatsLi>
               <Text main>Known For</Text>
               <Text>{content.known_for_department}</Text>
            </StatsLi>
            <StatsLi>
               <Text main>Born</Text>
               <Text>{`${bornDate} - Age ${age}`}</Text>
            </StatsLi>
            <StatsLi>
               <Text main>Place of Birth</Text>
               <Text>{content.place_of_birth}</Text>
            </StatsLi>
         </StatsUl>
      </Stats>
   );
};

export default PersonStats;
