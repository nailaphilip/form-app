import React from "react";
import "./Form.css";

const Form = (props) => {
  return (
    <div className="form-container">
      <form onSubmit={props.submit}>
        <div className="form-group">
          <label htmlFor="firstname">First name:</label>
          <input type="text" name="firstname" onChange={props.inputHandler} />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Last name:</label>
          <input type="text" name="lastname" onChange={props.inputHandler} />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input type="text" name="phone" onChange={props.inputHandler} />
        </div>
        <div className="form-group">
          <label htmlFor="role">Role:</label>
          <select value="selectedRole" onChange={props.inputHandler}>
            <option value="" disabled defaultValue>
              Choose your role ...
            </option>
            <option name="teacher" value="teacher">
              Teacher
            </option>
            <option name="student" value="student">
              Student
            </option>
            <option name="other" value="other">
              Other
            </option>
          </select>
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            onChange={props.inputHandler}
            name="message"
            placeholder="Enter Message..."
          ></textarea>
        </div>
        <div>
          <button type="submit" className="btn">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
