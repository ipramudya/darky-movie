import { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';

const DetailPage = () => {
   const { id } = useParams();

   // check whether TV or Movie
   const type = useLocation().pathname.split('/')[1];
   console.log(type);

   // useEffect(() => {}, [id]);

   return (
      <div>
         <h1>
            DetailPage of {id} on {type}
         </h1>
      </div>
   );
};

export default DetailPage;
