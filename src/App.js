import React from 'react';

import './App.css';
import Auth from './Components/Auth/Auth'
import Dashboard from './Components/Dashboard/Dashboard';
import Post from './Components/Post/Post'
import Form from './Components/Form/Form';
import Nav from './Components/Nav/Nav'
import routes from './routes';
import { withRouter } from 'react-router-dom';

function App() {
 

  return (
    <div className="App">

      <Nav />
      
     {routes}
    </div>
  );
}

export default App;
