import { useEffect } from 'react';
import { convertDate } from '../../utils/helpers';
import {
   SelectHeaderContainer,
   SelectWrapper,
   SelectContent,
   Text,
} from './Select.styles';

const Select = ({ options, contents, setOptionValue }) => {
   const airDate = convertDate(contents?.air_date);

   const selectChangeHandler = (event) => {
      setOptionValue(event.target.value);
   };

   useEffect(() => {
      return () => {
         setOptionValue(1);
      };
   }, []);

   return (
      <SelectHeaderContainer>
         <SelectWrapper>
            <SelectContent onChange={selectChangeHandler}>
               {options.map((content, idx) => (
                  <option value={content.season_number} key={idx}>
                     {content.name}
                  </option>
               ))}
            </SelectContent>
            <Text>{contents.episodes?.length} episodes</Text>
         </SelectWrapper>
         <Text>Air date on {airDate}</Text>
      </SelectHeaderContainer>
   );
};

export default Select;
