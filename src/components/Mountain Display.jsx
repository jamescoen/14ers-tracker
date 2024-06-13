import React from 'react';
import Mountain from './Mountain.jsx';

const MountainDisplay = (props) => {
  fetch('../peaks.json').then((data) => {
    console.log(data);
  });

  const getPeaks = () => {
    fetch('api/peaks').then((data) => data.json());
  };

  return (
    <div>
      <p>MountainDisplay</p>
      <Mountain />
    </div>
  );
};

export default MountainDisplay;
