import { useState } from 'react';
import { css } from '@emotion/core';
import 'primeflex/primeflex.css';
import CardModal from './common/CardModal';
import ClipLoader from 'react-spinners/ClipLoader';

import { useHttp } from '../hooks/http';

const Main = () => {
  const [data, isLoading] = useHttp(process.env.REACT_APP_URL, []);
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;
  let [color] = useState('#ffffff');
  return (
    <div className='App'>
      {isLoading ? (
        <div className='App-logo'>
          <ClipLoader color={color} loading={isLoading} css={override} size={150} />
        </div>
      ) : (
        <div className='p-grid'>
          {data.map((item, i) => (
            <div key={i} className='p-col'>
              <CardModal
                image={item.image ? item.image : 'https://thumbs.dreamstime.com/b/world-alzheimers-day-observed-september-vector-illustration-196015022.jpg'}
                title={item.label}
                body={item.snippet}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Main;
