import { ButtonContainer, ButtonItem } from './Button.style';

const Button = ({ buttonTypes, activeButton, setActiveButton }) => {
   return (
      <ButtonContainer>
         {buttonTypes.map((type) => (
            <ButtonItem
               key={type}
               active={activeButton === type}
               onClick={() => setActiveButton(type)}
            >
               {type}
            </ButtonItem>
         ))}
      </ButtonContainer>
   );
};

export default Button;
