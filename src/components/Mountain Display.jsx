import React from 'react';
import Mountain from './Mountain.jsx';

const MountainDisplay = (props) => {
  fetch('../peaks.json').then((data) => {
    console.log(data);
  });
  return (
    <div>
      <p>MountainDisplay</p>
      <Mountain />
    </div>
  );
};

export default MountainDisplay;
