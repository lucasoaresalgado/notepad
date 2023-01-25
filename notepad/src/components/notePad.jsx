import React, { useState } from 'react';
import index from "/src/index.css"

function Notepad() {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState('');

  function handleChange(event) {
    setCurrentNote(event.target.value);
  }

  function handleSave() {
    setNotes([...notes, currentNote]);
    setCurrentNote('');
  }

  function clear(e) {
    setNotes([])
}
  return (
    <div>
      <h1><input type="text" placeholder='Notepad' className='header'/></h1>
      <textarea value={currentNote} onChange={handleChange} className="input" />
      <button onClick={handleSave}>Save</button>
      <button onClick={clear}>Clear</button>
      <h2>Saved Notes:</h2>
      <ul>
        {notes.map((note, index) => (
          <li className="item" key={index}>{index + 1} - {note}</li>
        ))}
      </ul>
    </div>
  );
}

export default Notepad;