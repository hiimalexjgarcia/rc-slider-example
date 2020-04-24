import React from 'react';

import './App.css';

import Timeline from './Timeline.js';

function App() {
  const dates = [
    '2020-04-23T03:04:30.644Z',
    '2020-04-23T03:14:30.644Z',
    '2020-04-23T03:28:30.644Z',
    '2020-04-23T03:44:30.644Z',
    '2020-04-23T04:24:30.644Z',
    '2020-04-23T04:28:30.644Z',
    '2020-04-23T04:31:30.644Z',
    '2020-04-23T04:37:36.635Z',
    '2020-04-23T04:50:22.135Z',
    '2020-04-23T05:13:22.135Z',
    '2020-04-23T05:45:22.135Z',
  ]

  return (
    <div className="App">
      <Timeline
        dates={dates}
      />
    </div>
  );
}

export default App;
