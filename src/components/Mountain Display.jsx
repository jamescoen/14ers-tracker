import React from 'react';
import { useState, useEffect } from 'react';
import Mountain from './Mountain.jsx';

const MountainDisplay = (props) => {
  //   fetch('../peaks.json').then((data) => {
  //     console.log(data);
  //   });
  let peakArr;
  const [peakState, peakStateChange] = useState([]);

  const getPeaks = () => {
    fetch('/api/peaks/')
      .then((data) => data.json())
      .then((data) => {
        // console.log('data?', data);
        const sortedData = data.sort((a, b) => b.elevation - a.elevation);
        peakStateChange(sortedData);
        // console.log(peakState);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getPeaks();
  }, []);

  //   console.log('results2', peakState);

  const peaks = peakState.map((peak) => {
    const routes = Object.keys(peak.routes);
    const route1 = routes[0];
    const difficulty = peak.routes[route1].difficulty;
    return (
      <Mountain
        key={peak._id}
        name={peak.name}
        rank={peak.id}
        elev={peak.elevation}
        range={peak.range}
        stdRt={route1}
        diff={difficulty}
      />
    );
  });

  console.log('peaksArr', peaks);
  return (
    <div>
      <div className='peakDisplay'>{peaks}</div>
    </div>
  );
};

export default MountainDisplay;
