import React, { Component } from 'react';
import Form from './Form';
import Preview from './Preview';
import Modal from './Modal';
import './App.css';


class App extends Component {
  state={
    showModal: false

  }

  modalHandler = (e) => {
    e.preventDefault()
    this.setState({
      showModal: !this.state.showModal
    })
    console.log("I work");
  }


  render() {
    return (
      <div className='app-container'>
        <Form submit={this.modalHandler}/>
        <Preview />
        {this.state.showModal && <Modal />}
      </div>
    );
  }
}

export default App;