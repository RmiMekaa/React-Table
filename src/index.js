import React from 'react';
import ReactDOM from 'react-dom';
import { ReactTable } from './components/ReactTable/ReactTable';
import './index.css';
import { HEADERS, HEADERS2 } from './Mock/headers';
import { DATA, DATA2 } from './Mock/data.js';

ReactDOM.render(
  <React.StrictMode>
    <ReactTable headers={HEADERS} data={DATA} options={[25, 50, 75, 100]} />
  </React.StrictMode>,
  document.getElementById('root')
);