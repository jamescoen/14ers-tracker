import React from 'react';

const Mountain = (props) => {
  let name = 'Pyramid Peak';
  let elevation = 14018;
  let range = 'Elk';
  let classs = 4;
  let rank = 47;

  return (
    <div>
      <h3>{name}</h3>
      <ul className='MountainStats'>
        <li>Elevation: {elevation}ft</li>
        <li>Range: {range}</li>
        <li>Class: {classs}</li>
        <li>Rank: {rank}</li>
      </ul>
      <button>Completed</button>
    </div>
  );
};

export default Mountain;
