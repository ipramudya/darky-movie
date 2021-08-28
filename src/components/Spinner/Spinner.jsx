import { ScaleLoader } from 'react-spinners';
import { css } from '@emotion/react';

const Spinner = ({ loading }) => {
   const spinnerStyle = css`
      position: absolute;
      margin: auto;
      top: 50%;
      left: 0;
      right: 0;
      text-align: center;
      z-index: 999;
   `;
   return (
      <ScaleLoader
         color={'#112D4E'}
         loading={loading}
         size={30}
         css={spinnerStyle}
      />
   );
};

export default Spinner;
