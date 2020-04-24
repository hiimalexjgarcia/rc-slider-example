import React from 'react';
import './Timeline.css';
import Range from 'rc-slider/lib/Range';
import 'rc-slider/assets/index.css';

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
        allowCross={true}
        marks={marks}
        step={null}
        min={marksMin}
        max={marksMax}
        defaultValue={[marksMax,marksMax]}
        onAfterChange={console.log}
      />
    </div>
  );
}

export default Timeline;
