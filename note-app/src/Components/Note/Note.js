/*import React from 'react'

import deleteIcon from "../../assets/delete.png"
import "./Note.css"
function Note(props) {
  return (
    <div className="note" style={{backgroundColor:props.note.color}}>
<textarea className='note_text' defaultValue={props.note.text}/>
<div className='note_footer'>
<p>{props.note.time}</p>
<img src={deleteIcon} alt="delete"/>
</div>
    </div> 
  )
}

export default Note*/


import React from 'react';
import "./Note.css";
import deleteIcon from "../../assets/delete.png";

function Note(props) {
  return (
    <div className="note" style={{ backgroundColor: props.note.color }}>
      <textarea className='note_text' defaultValue={props.note.text} readOnly />
      <div className='note_footer'>
        <p>{props.note.time}</p>
        <img src={deleteIcon} alt="Delete Icon" /> {/* Updated alt text */}
      </div>
    </div>
  );
}

export default Note;

