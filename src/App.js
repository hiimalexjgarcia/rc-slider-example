import React, {useState} from 'react';
import './App.css';
import Timeline from './Timeline';
import Button from 'react-bootstrap/Button';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

function App() {
  const [dates, setDates] = useState([]);

  const handleClick = (e) => {
    console.log(e.target.value);
    setDates([
      ...dates,
      new Date().toISOString()
    ]);
  }

  const [displayType, setDisplayType] = useState('select')

  const handleChange = (selectedValue) => {
    setDisplayType(selectedValue);
  };

  //gotta add different handlers for different color semscreens (this would mock up how semscreens owned by different colored hats would show up)
  return (
    <div className="App">
      <Button className="mr-2" onClick={handleClick} value="Red"  >Add red semscreen</Button>
      <Button className="mr-2" onClick={handleClick} value="Green">Add green semscreen</Button>
      <Button className="mr-2" onClick={handleClick} value="Blue" >Add blue semscreen</Button>
      <ToggleButtonGroup type="radio" name="select-filter" defaultValue={'select'} onChange={handleChange}>
        <ToggleButton variant="secondary" value={'select'}>Select</ToggleButton>
        <ToggleButton variant="secondary" value={'filter'}>Filter</ToggleButton>
      </ToggleButtonGroup>
      <Timeline dates={dates} displayType={displayType} />
    </div>
  );
}

export default App;
