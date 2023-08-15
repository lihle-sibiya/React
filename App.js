import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import User from './User';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserForm from './UserForm';

class App extends Component {
  constructor() {
    super()
    console.log(firebase);
  }

  render() {
    return (
        <div>
        <User />
        </div>
    );
  }
}

export default App;

class NotFound extends Component {
  render() {
    return <div>Not Found</div>
  }
}