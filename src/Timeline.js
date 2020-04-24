import React from 'react';

import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

import './Timeline.css';

function Timeline(props) {
  const dates = props.dates || []

  let marks = {};
  dates.forEach(function(d){
      marks[(new Date(d)).getTime()] = d;
  })
  const marksMin = Math.min(...Object.keys(marks));
  const marksMax = Math.max(...Object.keys(marks));

  return (
    <div className="Timeline">
      <Range
        allowCross={false}
        marks={marks}
        step={null}
        min={marksMin}
        max={marksMax}
        defaultValue={[marksMax,marksMax]}
        onChange={console.log}
      />
    </div>
  );
}

export default Timeline;
