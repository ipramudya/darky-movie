import {
   SelectHeaderContainer,
   SelectWrapper,
   SelectContent,
   Text,
} from './Select.styles';

const Select = ({ options, contents, setOptionValue }) => {
   const airDate = new Date(contents?.air_date)
      .toUTCString()
      .split(' ')
      .splice(0, 4)
      .join(' ');
   const selectChangeHandler = (event) => {
      setOptionValue(event.target.value);
   };
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
         <Text>Air date - {airDate}</Text>
      </SelectHeaderContainer>
   );
};

export default Select;
