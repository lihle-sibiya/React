import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import User from './User';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';

class App extends Component {
  constructor() {
    super();
    console.log(firebase);
  }

  render() {
    return (
      <div>
        {/*<Header />*/}
        <h1>Home</h1>
      </div>
    );
  }
}


export default App;