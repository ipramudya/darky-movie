import { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import useSearch from '../../hooks/useSearch';
import { SearchContainer, InputField } from './searchbar.styles';

const Searchbar = ({ active }) => {
   const [query, setQuery] = useState('');

   const handleSearch = (event) => {
      setQuery(event.target.value);
   };

   return (
      <>
         <SearchContainer className={active ? 'active' : null}>
            <InputField
               type='text'
               placeholder='Search Movies or TVs...'
               onChange={handleSearch}
               value={query}
            />
         </SearchContainer>
         {query.length > 0 ? (
            <Redirect
               to={{
                  pathname: '/search',
                  search: `?query=${query}`,
               }}
            />
         ) : (
            <Redirect push />
         )}
      </>
   );
};

export default Searchbar;
