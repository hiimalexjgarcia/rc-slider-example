import React from 'react';
import './Timeline.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const Range = Slider.createSliderWithTooltip(Slider.Range);

function Timeline(props) {
  const dates = props.dates || []

  let marks = {};
  dates.forEach(function(d){
    marks[(new Date(d)).getTime()] = d;
  })
  const marksMin = Math.min(...Object.keys(marks));
  const marksMax = Math.max(...Object.keys(marks));

  const displayType = props.displayType || 'select'

  const output = displayType === 'select' ?
    <Slider
      marks={marks}
      step={null}
      min={marksMin}
      max={marksMax}
      defaultValue={marksMax}
      onAfterChange={console.log}
    />
  :
    <Range
      allowCross={true}
      marks={marks}
      step={null}
      min={marksMin}
      max={marksMax}
      defaultValue={[marksMax,marksMax]}
      onAfterChange={console.log}
    />

  return (
    <div className="Timeline">
      { output }
    </div>
  );
}

export default Timeline;
