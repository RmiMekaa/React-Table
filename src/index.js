import React from 'react';
import ReactDOM from 'react-dom';
import { ReactTable } from './components/ReactTable/ReactTable';
import './index.css';
import { HEADERS, HEADERS2 } from './Mock/headers';
import { DATA, DATA2 } from './Mock/data.js';

ReactDOM.render(
  <React.StrictMode>
    <ReactTable headers={HEADERS} data={DATA} />
    <ReactTable headers={HEADERS2} data={DATA2} selectPageSize={false} allowSearch={false} displayEntries={false} />
  </React.StrictMode>,
  document.getElementById('root')
);