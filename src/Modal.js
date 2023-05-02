import React from "react";
import "./Modal.css";

const Modal = (props) => {
  return (
    <div className="modal-container">
      <div className="modal-text">
        <h2>This is your note:</h2>
        <p>
          First name:<span>{props.firstname}</span>
        </p>
        <p>
          Last name:<span>{props.lastname}</span>
        </p>
        <p>
          Phone:<span>{props.phone}</span>
        </p>
        <p>
          Role:<span>{props.role}</span>
        </p>
        <p>
          Message:<span>{props.message}</span>
        </p>
      </div>
      <button onClick={props.click}>Yes, I am sure</button>
      <button onClick={props.click}>No</button>
    </div>
  );
};

export default Modal;
