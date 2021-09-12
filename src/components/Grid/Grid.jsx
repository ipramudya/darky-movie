import { GridContainer, GridContent, Header } from './Grid.styles';

const Grid = ({ children, header, episodes, videos }) => {
   return (
      <GridContainer episodes={episodes} videos={videos}>
         <Header>{header}</Header>
         <GridContent episodes={episodes} videos={videos}>
            {children}
         </GridContent>
      </GridContainer>
   );
};

export default Grid;
