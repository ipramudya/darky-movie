import { IoCaretBack } from 'react-icons/io5';
import { useHistory } from 'react-router';
import { TopbarButton, TopbarContainer, TopbarTitle } from './Topbar.styles';

const Topbar = ({ header }) => {
   const history = useHistory();

   const handleBack = () => {
      history.goBack();
   };

   return (
      <TopbarContainer>
         <TopbarButton onClick={handleBack}>
            <IoCaretBack />
         </TopbarButton>
         <TopbarTitle>{header}</TopbarTitle>
      </TopbarContainer>
   );
};

export default Topbar;
