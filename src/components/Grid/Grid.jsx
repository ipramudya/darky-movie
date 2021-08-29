import { GridContainer, GridContent, Header } from './Grid.styles';

const Grid = ({ children, header }) => {
   return (
      <GridContainer>
         <Header>{header}</Header>
         <GridContent>{children}</GridContent>
      </GridContainer>
   );
};

export default Grid;
