import { SearchContainer, InputField } from './searchbar.styles';

const Searchbar = ({ active }) => {
   return (
      <SearchContainer className={active ? 'active' : null}>
         <InputField type='text' placeholder='Search Movies or TVs...' />
      </SearchContainer>
   );
};

export default Searchbar;
