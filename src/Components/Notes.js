import React from "react";
import "./Notes.css";

const Notes = (props) => {
  return (
    <div className="notes-container">
      <div className="notes">
        <h2>My notes: </h2>
        <ul>
          {props.data.map((note) => (
            <li key={note.id}>
              {note.firstname}, {note.lastname}, {note.phone}, {note.role},{" "}
              {note.message}
            </li>
          ))}
        </ul>
      </div>
      <button onClick={props.click}>Submit</button>
    </div>
  );
};

export default Notes;
