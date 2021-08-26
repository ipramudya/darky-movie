import Card from '../Card/Card';
import { GridContainer, GridContent, Header } from './Grid.styles';

const Grid = ({ contents, header }) => {
   return (
      <GridContainer>
         <Header>{header}</Header>
         <GridContent>
            {contents?.map((content, idx) => (
               <Card item={content} key={idx} />
            ))}
         </GridContent>
      </GridContainer>
   );
};

export default Grid;
