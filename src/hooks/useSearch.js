import { useState, useEffect } from 'react';

const useSearch = (providers) => {
   const [foundContent, setFoundContent] = useState([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);
   const [page, setPage] = useState(1);

   useEffect();

   return {};
};

export default useSearch;
