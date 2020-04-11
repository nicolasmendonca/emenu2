import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Restaurant } from '../generated/graphql-types'
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const RESTAURANTS = gql`
  query {
    restaurants {
      id
      name
      image
    }
  }
`

function App() {
  const {loading, error, data} = useQuery<Restaurant[]>(RESTAURANTS);
  console.warn(loading, error, data);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
