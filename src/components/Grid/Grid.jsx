import { GridContainer, GridContent, Header } from './Grid.styles';

const Grid = ({ children, header, long, episodes }) => {
   return (
      <GridContainer episodes={episodes}>
         <Header>{header}</Header>
         <GridContent long={long}>{children}</GridContent>
      </GridContainer>
   );
};

export default Grid;
