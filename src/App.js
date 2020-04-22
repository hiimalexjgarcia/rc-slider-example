import React from 'react';

import './App.css';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

function App() {
  const Range = Slider.Range;

  const marks = {
    1: '1',
    20: '2',
    40: '40',
    200: '200',
    400: '400'
  };

  function log(value) {
    console.log(value);
  }

  return (
    <div className="App">
      <Range allowCross={false} marks={marks} onChange={log} />
    </div>
  );
}

export default App;
