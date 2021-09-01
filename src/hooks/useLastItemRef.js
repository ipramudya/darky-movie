import { useCallback, useRef } from 'react';

const useLastItemRef = ({ page, setPage, totalPages, loading }) => {
   const observer = useRef();
   return useCallback(
      (node) => {
         if (loading) return;
         if (observer.current) observer.current.disconnect();
         observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && page < totalPages) {
               setPage((prevPageNumber) => {
                  return prevPageNumber + 1;
               });
            }
         });
         if (node) observer.current.observe(node);
      },
      [loading, totalPages, page]
   );
};

export default useLastItemRef;
