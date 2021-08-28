import { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import useSearch from '../../hooks/useSearch';
import { SearchContainer, InputField } from './searchbar.styles';

const Searchbar = ({ active }) => {
   const [query, setQuery] = useState('');
   const { foundContent, loading, error, setSearchTerm } = useSearch();

   const handleSearch = (event) => {
      setQuery(event.target.value);
   };

   useEffect(() => {
      setTimeout(() => {
         setSearchTerm(query);
      }, 1500);
   }, [query, setSearchTerm]);

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
         {foundContent.length > 0 && (
            <Redirect
               to={{
                  pathname: '/search',
                  search: `?query=${query}`,
                  state: { contents: foundContent, loading },
               }}
            />
         )}
      </>
   );
};

export default Searchbar;
