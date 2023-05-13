/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import './NewNoteForm.css';
import PropTypes from 'prop-types';
import toast, { Toaster } from 'react-hot-toast';
import { createNote } from '../../api/api';

function NewNoteForm({ getNotes }) {
  const [noteBody, setNoteBody] = useState('');

  const handleChange = (event) => {
    setNoteBody(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!noteBody) {
      toast.error('Введите текст заметки');
      return;
    }
    await createNote({
      id: Date.now(),
      content: noteBody,
    });
    setNoteBody('');
    getNotes();
  };

  return (
    <form className="new-note-form" onSubmit={handleSubmit}>
      <label htmlFor="noteBody">New Note</label>
      <textarea
        id="noteBody"
        name="noteBody"
        value={noteBody}
        onChange={handleChange}
      />
      <button type="submit" onSubmit={handleSubmit}>
        Добавить
      </button>
      <Toaster position="top-center" reverseOrder={false} />
    </form>
  );
}

NewNoteForm.propTypes = {
  getNotes: PropTypes.func.isRequired,
};

export default NewNoteForm;
