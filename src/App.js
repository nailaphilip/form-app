import React, { Component } from "react";
import Form from "./Form";
import Preview from "./Preview";
import Modal from "./Modal";
import Notes from "./Components/Notes";

import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    showModal: false,
    note: {
      firstname: "",
      lastname: "",
      role: "",
      phone: "",
      message: "",
    },
    data: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:3003/posts/")
      .then((res) => this.setState({ data: res.data }));
  }
  //    .then((res) => this.setState({ data: res }))
  //     .catch((error) => console.log("error", error));

  //   fetch("http://localhost:3003/posts/")
  //     .then((res) => res.json())
  //     .then((res) => this.setState({ data: res }))
  //     .catch((error) => console.log("error", error));
  //   console.log("results ", this.state.data);
  // }

  submitHandler = () => {
    axios
      .post("http://localhost:3003/posts/")
      .then((res) => console.log("res", res))
      .catch((error) => console.log(error));
  };

  modalHandler = (e) => {
    e.preventDefault();
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  inputHandler = (e) => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="app-container">
        <Form inputHandler={this.inputHandler} submit={this.modalHandler} />
        <Preview {...this.state.note} />
        {this.state.showModal && (
          <Modal click={this.modalHandler} {...this.state.note} />
        )}
        <Notes data={this.state.data} click={this.submitHandler} />
      </div>
    );
  }
}

export default App;
