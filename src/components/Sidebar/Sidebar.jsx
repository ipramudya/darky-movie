import { useState, useRef } from 'react';
import { MdLiveTv, MdMovieFilter, MdSearch } from 'react-icons/md';
import Searchbar from '../Searchbar/Searchbar';
import {
   SidebarContainer,
   NavWrapper,
   NavItem,
   NavDirection,
   SearchButton,
} from './sidebar.styles';
import Logo from '../../assets/movie-ticket-icon.png';

const Sidebar = () => {
   const [isActive, setIsActive] = useState(false);
   const [query, setQuery] = useState('');

   const inputRef = useRef();

   const handleSearchToggle = () => {
      setIsActive((prevState) => !prevState);
      inputRef.current.focus();
   };

   return (
      <>
         <SidebarContainer>
            <NavWrapper>
               <NavItem>
                  <NavDirection to='/' exact>
                     <img src={Logo} alt='Main Logo' />
                  </NavDirection>
               </NavItem>
               <NavItem>
                  <NavDirection to='/movie' content='movie'>
                     <MdMovieFilter />
                  </NavDirection>
               </NavItem>
               <NavItem>
                  <NavDirection to='/tv' content='tv'>
                     <MdLiveTv />
                  </NavDirection>
               </NavItem>
               <NavItem>
                  <SearchButton onClick={handleSearchToggle}>
                     <MdSearch />
                  </SearchButton>
               </NavItem>
            </NavWrapper>
         </SidebarContainer>
         <Searchbar
            active={isActive}
            ref={inputRef}
            setActive={setIsActive}
            query={query}
            setQuery={setQuery}
         />
      </>
   );
};

export default Sidebar;
