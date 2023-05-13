import React from 'react';
import './NoteList.css';
import PropTypes from 'prop-types';
import toast, { Toaster } from 'react-hot-toast';

function NoteList({ notes, deleteNote }) {
  const handleClick = (id) => {
    toast.success('Заметка удалена');
    deleteNote(id);
  };

  return (
    <div className="note-list-container">
      <Toaster position="top-center" reverseOrder={false} />
      <h1>Notes</h1>
      <ul className="note-list">
        {notes.map((note) => (
          <li className="note-item" key={note.id}>
            <p>{note.content}</p>
            <button className="btn-close" onClick={() => handleClick(note.id)} type="button">
              &times;
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
  deleteNote: PropTypes.func.isRequired,
};

export default NoteList;
