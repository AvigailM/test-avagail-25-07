import React from 'react';
import UserForm from './components/UserForm'

import './css/app.css';

const App = () => {
  return (
    <div className="main">
      <h1 className="header-main" >User Form</h1>
      <UserForm/>
    </div>
  );
}

export default App;
