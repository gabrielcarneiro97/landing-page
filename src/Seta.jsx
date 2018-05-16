import React from 'react';
import { Icon } from 'antd';

import './Seta.css';

function Seta(props) {
  const { to, up } = props; // eslint-disable-line
  const icon = up ? 'up' : 'down';

  return (
    <div>
      {// eslint-disable-next-line
    }<div
      style={{ fontSize: '60px' }}
    >
      <Icon
        className="seta"
        onClick={() => {
          window.scrollTo(0, window.innerHeight * (to - 1));
        }}
        type={icon}
      />{
    // eslint-disable-next-line
    }</div>
    </div>
  );
}

export default Seta;
