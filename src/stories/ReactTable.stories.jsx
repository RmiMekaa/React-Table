import React from 'react';
import { storiesOf } from '@storybook/react';
import { DATA } from '../Mock/data';
import { HEADERS } from '../Mock/headers';

import { ReactTable } from '../components/ReactTable.jsx';

const stories = storiesOf('React Table', module);

stories.add('Component', () => {
  return (<ReactTable data={DATA} headers={HEADERS} />)
});