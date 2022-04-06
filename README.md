# React Table

A react component to easily create an interactive table.

## Features

- Column sorting
- Data search
- Pagination
- Display number of entries

## Installation

Prerequisites: [React](https://fr.reactjs.org/)
```
npm i interactive-react-table
```

## Basic Usage Example

Import ReactTable component:
```
import { ReactTable } from 'interactive-react-table';
```

Set some data:
```
const data = [
  {
    firstName: 'Bruce',
    lastName: 'Wayne',
    birthdate: '1939-03-30',
    city: 'Gotham City'
  },
  {
    firstName: 'Peter',
    lastName: 'Parker',
    birthdate: '1962-08-15',
    city: 'New York'
  },
  {
    firstName: 'Clark',
    lastName: 'Kent',
    birthdate: '1939-06-12',
    city: 'Metropolis'
  }
]
```

Config headers:
```
const headers = [
  {
    name: 'First Name',
    key: 'firstName'
  },
  {
    name: 'Last Name',
    key: 'lastName'
  },
  {
    name: 'Date of birth',
    key: 'birthdate'
  },
  {
    name: 'City',
    key: 'city'
  }
]
```

Use component:
```
<ReactTable data={data} headers={headers} />
```

Render:  
<img src='img/basicExample.jpg' alt='basic example' />

## Props

- `data: {Array<Objects>}`  
  - Required
  - The data you want to display in the table.
  - To ensure a good behavior, make sure that each object have the same properties.
  
- `headers : {Array<Objects>}`
  - Required
  - Handle table columns headers.
  - Each object must contain two properties:
    - name : The name to display in the column header
    - key : A string which refers to the corresponding property name. 
  - The items in this array must follow the same order as the data objects properties. 

- `pageSizeOptions : {Array<Numbers>}` 
  - Default: [10, 25, 50]
  - Providing options to configure the number of rows per page.

- `displayEntries : {Boolean}`  
  - Default: true
  - Disable entries displayer feature by setting it to false

- `allowSearch : {Boolean}`
  - Default: true
  - Disable search feature by setting it to false

- `selectPageSize : {Boolean}`
  - Default: true
  - Disable page size selector feature by setting it to false

## Customize Style

Just write some styles for class <span style="color:#ce9178">.mainContainer</span>. Your styles will be prioritized over library styles, then target the following selectors to customize what you want.

### Header
  - Container: <span style="color:#ce9178">.tableHeader</span>
    - Select page size section: <span style="color:#ce9178">.selectPageSize</span>
    - Search section: <span style="color:#ce9178">.search</span>

### Table
  - Container: <span style="color:#ce9178">.table</span>
    - Table headers (th): <span style="color:#ce9178">.table-th</span>
      You can target a specific header by index using: <span style="color:#ce9178">.table-th-1, .table-th-2, .table-th-3,</span>etc.
      - Column headers content: <span style="color:#ce9178">.table-th-content</span>
      - Sort Icons: <span style="color:#ce9178">.table-th-sortIcons</span>
        - Active sort icon: <span style="color:#ce9178">sortIcon--active</span>
    - Table rows (tr): <span style="color:#ce9178">.table-tr</span>
      You can target a specific row by index using: <span style="color:#ce9178">.table-tr-1, .table-tr-2, .table-tr-3,</span>etc.
      - Table data cells (td): <span style="color:#ce9178">.table-td</span>

### Footer
  - Container: <span style="color:#ce9178">.tableFooter</span>
    - Entries displayer: <span style="color:#ce9178">.entriesDisplayer</span>
    - Pagination section: <span style="color:#ce9178">.pagination</span>
    - Pagination buttons: <span style="color:#ce9178">.pagination button</span>
    - Pagination current page button: <span style="color:#ce9178">.pagination button.currentPage</span>

#### Example:

<img src='img/customStyleExample.jpg' alt='custom style example' />

<br/><br/>

<p float='left'>
  <img alt='Git' title='Git' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' width='32px'/>
  <img alt='CSS3' title='CSS3' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' width='32px'/>
  <img alt='JavaScript' title='JavaScript' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg' width='32px'/>
  <img alt='React' title='React' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' width='32px'/>
  <img alt='Storybook' title='Storybook' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg' width='32px'/>
</p>