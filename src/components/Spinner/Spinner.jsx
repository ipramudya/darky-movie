import { ScaleLoader } from 'react-spinners';
import { css } from '@emotion/react';

const Spinner = ({ loading }) => {
   const spinnerStyle = css`
      position: fixed;
      margin: auto;
      top: 50%;
      left: 0;
      right: 0;
      text-align: center;
      z-index: 999;
   `;
   return (
      <ScaleLoader
         color={'#3F72AF'}
         loading={loading}
         size={30}
         css={spinnerStyle}
      />
   );
};

export default Spinner;
