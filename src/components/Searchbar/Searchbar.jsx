import { useState, forwardRef } from 'react';
import { Redirect } from 'react-router-dom';
import { SearchContainer, InputField } from './searchbar.styles';

const Searchbar = forwardRef(({ active, setActive }, ref) => {
   const [query, setQuery] = useState('');

   const handleSearch = (event) => {
      setQuery(event.target.value);
   };

   const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
         setActive((prevState) => !prevState);
      }
   };

   return (
      <>
         <SearchContainer className={active ? 'active' : null}>
            <InputField
               type='text'
               placeholder='Search Movies or TVs...'
               onChange={handleSearch}
               value={query}
               ref={ref}
               onKeyDown={handleEscapeKey}
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
});

export default Searchbar;
