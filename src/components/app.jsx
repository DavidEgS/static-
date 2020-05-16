import React, { Component } from 'react';

import Flatlist from '../containers/flatlist';
import Map from '../containers/map';

const App = () => {
  return (
    <div className="row">
      <Flatlist />
      <Map />
    </div>
  );
};


export default App;
