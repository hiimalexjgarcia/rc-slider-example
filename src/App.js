import React from 'react';

import './App.css';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './rc-slider-custom.css';

function App() {
  const dates = [
      '2020-04-23T04:04:30.644Z',
      '2020-04-23T04:24:30.644Z',
      '2020-04-23T04:28:30.644Z',
      '2020-04-23T04:44:30.644Z',
      '2020-04-23T05:24:30.644Z',
      '2020-04-23T05:28:30.644Z',
      '2020-04-23T05:31:30.644Z',
      '2020-04-23T05:37:36.635Z',
      '2020-04-23T05:40:22.135Z',
  ]

  let marks = {};
  dates.forEach(function(d){
      marks[(new Date(d)).getTime()] = d;
  })
  const marksMin = Math.min(...Object.keys(marks));
  const marksMax = Math.max(...Object.keys(marks));

  return (
    <div className="App">
      <div style={{ marginLeft: '64px', marginRight: '64px', paddingTop: '64px' }}>
        <Slider.Range
          allowCross={false}
          marks={marks}
          step={null}
          min={marksMin}
          max={marksMax}
          defaultValue={[marksMax,marksMax]}
          onChange={console.log}
        />
      </div>
    </div>
  );
}

export default App;
