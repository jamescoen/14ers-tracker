import React from 'react';
import ProgressTracker from './Progress Tracker.jsx';
import MountainDisplay from './Mountain Display.jsx';

const MainContainer = (props) => {
  return (
    <div>
      <h2>The Colorado 14ers</h2>
      <ProgressTracker />
      <MountainDisplay />
    </div>
  );
};

export default MainContainer;
