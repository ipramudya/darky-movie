import { GridContainer, GridContent, Header } from './Grid.styles';

const Grid = ({ children, header, long }) => {
   return (
      <GridContainer>
         <Header>{header}</Header>
         <GridContent long={long}>{children}</GridContent>
      </GridContainer>
   );
};

export default Grid;
