import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Timeline.css';
import 'rc-slider/assets/index.css';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

const style = { width: 400, margin: 50 };

function Timeline(props) {
  const dates = props.dates || []

    let marks = {};
    dates.forEach(function(d){
        marks[(new Date(d)).getTime()] = d;
    })
    const marksMin = Math.min(...Object.keys(marks));
    const marksMax = Math.max(...Object.keys(marks));

    return (
        <div style={style} className="timeline">
            <Range
                allowCross={false}
                marks={marks}
                step={null}
                min={marksMin}
                max={marksMax}
                defaultValue={[marksMax,marksMax]}
                pushable={true}
                onChange={console.log}
      />
    </div>
  );
}

export default Timeline;
