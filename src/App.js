import React from 'react';

import './App.css';
import Auth from './Components/Auth/Auth'
import Dashboard from './Components/Dashboard/Dashboard';
import Post from './Components/Post/Post'
import Form from './Components/Form/Form';

function App() {
  return (
    <div className="App">
     <Auth />
     <Dashboard />
     <Post />
     <Form />
    </div>
  );
}

export default App;
