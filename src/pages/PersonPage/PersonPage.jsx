import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import ApiPerson from '../../api/person';
import { Overview, Spinner } from '../../components';

const PersonPage = () => {
   const { id } = useParams();

   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);
   const [details, setDetails] = useState([]);

   const fetchPerson = async () => {
      setLoading(true);
      try {
         setDetails(await ApiPerson.fetchDetails(id));
         setLoading(false);
      } catch (err) {
         setError(err);
         setLoading(false);
      }
   };

   useEffect(() => {
      fetchPerson();
   }, []);

   return (
      <>
         {error && <h3>{error}</h3>}
         {loading && <Spinner loading={loading} />}
         <Overview content={details} />
      </>
   );
};

export default PersonPage;
