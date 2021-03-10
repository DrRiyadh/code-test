import React from 'react';
import { Card } from 'primereact/card';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const CardModal = ({ image, title, body }) => {
  const header = (
    <img
      alt='Card'
      style={{ width: '375px', height: '375px' }}
      src={image}
      onError={(e) => (e.target.src = 'https://thumbs.dreamstime.com/b/world-alzheimers-day-observed-september-vector-illustration-196015022.jpg')}
    />
  );

  return (
    <div>
      <Card title={title} style={{ width: '25em' }} header={header}>
        <p className='p-m-0' style={{ lineHeight: '1.5' }}>
          {body}
        </p>
      </Card>
    </div>
  );
};
export default CardModal;
