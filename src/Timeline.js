import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Timeline.css';
import 'rc-slider/assets/index.css';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

function Timeline(props) {
    const dates = props.dates || []

    let marks = {};
    dates.forEach(function(d){
        marks[(new Date(d)).getTime()] = d;
    })

    const marksMin = Math.min(...Object.keys(marks));
    const marksMax = Math.max(...Object.keys(marks));
    const width = (new Date().getTime() - marksMin)/300 || 0;

    const style = { maxWidth: 400, margin: 35 };

    const displayType = props.displayType;

    if (displayType === 'select') {
        return (
            <div style={style} className="timeline">
                <Slider
                    allowCross={false}
                    marks={marks}
                    step={null}
                    min={marksMin}
                    max={marksMax}
                    defaultValue={[marksMax,marksMax]}
                    pushable={true}
                />
            </div>
        );
    } else if (displayType === 'filter') {
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
                />
            </div>
        );
    };
};

    export default Timeline;
