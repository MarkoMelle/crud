/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from 'react';
import { getNotes as getNotesApi, deleteNote } from '../api/api';
import './App.css';
import NoteList from './NoteList/NoteList';
import NewNoteForm from './NewNoteForm/NewNoteForm';

function App() {
  const [notes, setNotes] = useState([]);

  const getNotes = () => getNotesApi().then((notesArr) => {
    setNotes(notesArr);
  });

  useEffect(() => {
    getNotes();
  }, []);

  const handleDelete = async (id) => {
    await deleteNote(id);
    getNotes();
  };
  return (
    <div className="App">
      <NoteList notes={notes} deleteNote={handleDelete} getNotes={getNotes} />
      <NewNoteForm getNotes={getNotes} />
    </div>
  );
}

export default App;
