import React, { Component } from 'react';
import Form from './Form';
import Preview from './Preview';
import Model from './Model';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className='app-container'>
        <Form />
        <Preview />
        <Model />
      </div>
    );
  }
}

export default App;