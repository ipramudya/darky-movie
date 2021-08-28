import { useState } from 'react';
import { MdLiveTv, MdMovieFilter, MdSearch, MdClose } from 'react-icons/md';
import Searchbar from '../Searchbar/Searchbar';
import {
   SidebarContainer,
   NavWrapper,
   NavItem,
   NavDirection,
   SearchButton,
} from './sidebar.styles';
import Logo from '../../images/movie-ticket-icon.png';

const Sidebar = () => {
   const [isActive, setIsActive] = useState(false);

   const handleSearchToggle = () => {
      setIsActive((prevState) => !prevState);
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
                     {!isActive ? <MdSearch /> : <MdClose />}
                  </SearchButton>
               </NavItem>
            </NavWrapper>
         </SidebarContainer>
         <Searchbar active={isActive} />
      </>
   );
};

export default Sidebar;
