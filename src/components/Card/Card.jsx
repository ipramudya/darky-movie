import { CardContainer } from './Card.styles';

const Card = ({ item }) => {
   return (
      <CardContainer>
         {item?.name ? <h4>{item.name}</h4> : <h4>{item.title}</h4>}
      </CardContainer>
   );
};

export default Card;
