# React Table

A react component to easily create an interactive table.

## Features

- Column sorting
- Data search
- Pagination
- Display number of entries

## Installation

Prerequisites: [React](https://fr.reactjs.org/)

npm i interactive-react-table

## Basic Usage Example

```
import { ReactTable } from 'interactive-react-table';

<ReactTable 

  data={
    [
      {
        firstName: 'Bruce',
        lastName: 'Wayne',
        birthdate: '1989-02-03'
      },
      {
        firstName: 'Al',
        lastName: 'Simmons',
        birthdate: '1982-12-12'
      }
    ]
  /*  Array of objects. [Required]
      The data you want to display in the table.
      To ensure a good behavior, make sure that each object have the same properties. */} 

  headers={
    [
      {
        name: "First Name",
        key: "firstName"
      },
      {
        name: "Last Name",
        key: "lastName"
      },
      {
        name: "Date of birth",
        key: "birthdate"
      }
    ]
  /*  Array of objects. [Required]
      Handle table columns headers.
      Each object must contain two properties:
      - name : The name to display in the column header
      - key : A string which refers to the corresponding property name. 
      The items in this array must follow the same order as the data objects properties. */} 

  pageSizeOptions={
    default: [10,25,50]
  /*  Array of numbers. [Optional]
      Providing options to configure the number of rows per page. */}

  displayEntries={
    default: true
  /*  Boolean. [Optional]
      Disable entries displayer feature by setting it to false */} 

  allowSearch={
    default: true
  /*  Boolean. [Optional]
      Disable search feature by setting it to false */}

  selectPageSize={
    default: true
  /*  Boolean. [Optional]
      Disable page size selector feature by setting it to false */} 

  />
```

## Customize Style

Coming soon...

<br/><br/>

<p float="left">
  <img alt="Git" title="Git" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" width="32px"/>
  <img alt="CSS3" title="CSS3" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="32px"/>
  <img alt="JavaScript" title="JavaScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" width="32px"/>
  <img alt="React" title="React" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="32px"/>
  <img alt="Storybook" title="Storybook" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg" width="32px"/>
</p>
