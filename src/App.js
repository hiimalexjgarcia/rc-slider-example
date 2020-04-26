import React, {useState} from 'react';

import Timeline from './Timeline.js';

import Button from 'react-bootstrap/Button';

const style = {margin: 10}
function App() {
    const [dates, setDates] = useState([]);

    const handleClick = () => {
        setDates(dates.concat(new Date().toLocaleString()))
    }
    //gotta add different handlers for different color semscreens (this would mock up how semscreens owned by different colored hats would show up)
    return (
        <>
            <Button id="button" style={style} onClick={handleClick}>Add red semscreen</Button>
            <Button id="button" style={style} onClick={handleClick}>Add green semscreen</Button>
            <Button id="button" style={style} onClick={handleClick}>Add blue semscreen</Button>
            <Timeline
                dates={dates}
            />
        </>
    );
}

export default App;
