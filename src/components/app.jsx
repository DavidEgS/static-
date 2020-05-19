import React from 'react';

import FlatList from '../containers/flatlist';
import Map from '../containers/map';

const App = () => {
  return (
    <div className="row">
      <FlatList />
      <Map />
    </div>
  );
};


export default App;
