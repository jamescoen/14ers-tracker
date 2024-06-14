import React from 'react';

const Mountain = (props) => {
  const { name, rank, elev, range, stdRt, diff } = props;

  return (
    <div className='peak'>
      <div>
        <h3 className='peakName'>{name}</h3>
      </div>
      <ul className='peakDetails'>
        <li>Elevation: {elev}ft</li>
        <li>Range: {range}</li>
        <li>Rank: {rank}</li>
        <li>Standard Route: {stdRt}</li>
        <li>Difficulty: {diff}</li>
        <li>
          Completed? <div className='completed'>Yes</div>
        </li>
      </ul>
      {/* <h5>Elevation: {elev}ft</h5>
      <h5>Range: {range}</h5>
      <h5>Rank: {rank}</h5>
      <h5>Standard Route: {stdRt}</h5>
      <h5>Difficulty: {diff}</h5> */}
      <button>Completed</button>
    </div>
  );
};

export default Mountain;
