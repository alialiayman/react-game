import React from 'react';
import Board from './components/Board';

import './App.scss';

function App() {
  const columns = prompt('Please enter board width');
  const rows = prompt('Please enter board height');
  return (
    <React.Fragment>
      <Board rows={rows} columns={columns}></Board>
    </React.Fragment>
  );
}

export default App;
