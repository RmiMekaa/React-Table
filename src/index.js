import React from 'react';
import ReactDOM from 'react-dom';
import { ReactTable } from './components/ReactTable';
import './index.css';
import { HEADERS } from './Mock/headers';
import { DATA } from './Mock/data.js';

ReactDOM.render(
  <React.StrictMode>
    <ReactTable headers={HEADERS} data={DATA} />
  </React.StrictMode>,
  document.getElementById('root')
);