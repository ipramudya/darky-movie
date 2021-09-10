import { useState, forwardRef } from 'react';
import { Redirect } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { SearchContainer, InputField, CloseButton } from './searchbar.styles';

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

   const handleClose = () => {
      setActive((prevState) => !prevState);
   };

   console.log(query);

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
            <CloseButton onClick={handleClose}>
               <MdClose />
            </CloseButton>
         </SearchContainer>
         {query.length > 0 && Redirect ? (
            <Redirect
               to={{
                  pathname: '/search',
                  search: `?query=${query}`,
               }}
            />
         ) : (
            <Redirect push to='/' />
         )}
      </>
   );
});

export default Searchbar;
