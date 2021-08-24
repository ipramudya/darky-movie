import { MdLiveTv, MdMovieFilter, BiSearchAlt, MdSearch } from 'react-icons/md';
import {
   SidebarContainer,
   NavWrapper,
   NavItem,
   NavDirection,
} from './sidebar.styles';
import Logo from '../../images/movie-ticket-icon.png';

const Sidebar = () => {
   return (
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
               <NavDirection to='/search'>
                  <MdSearch />
               </NavDirection>
            </NavItem>
         </NavWrapper>
      </SidebarContainer>
   );
};

export default Sidebar;
