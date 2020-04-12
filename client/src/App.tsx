import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import './App.css';
import RestaurantPage from './Pages/RestaurantPage';


function App() {
  return (
    <Router>
      <Route path="/:slug">
        <RestaurantPage />
      </Route>
    </Router>
  );
}

export default App;
