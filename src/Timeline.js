import React from 'react';

import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import './Timeline.css';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

const style = { width: 400, margin: 50 };

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="bottom"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

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
                pushable={true} //now 
                onChange={console.log}
      />
    </div>
  );
}

export default Timeline;
