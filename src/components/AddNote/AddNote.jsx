import React, { useState } from 'react';
import './AddNote.css';

export const AddNote = ({ onAddNote }) => {
  const [noteText, setNoteText] = useState('');
  const characterLimit = 200;

  const hadleChange = ({ target }) => {
    if (target.value.length <= characterLimit) {
      setNoteText(target.value);
    }
  };

  const handleSave = () => {
    if (noteText.length > 0) {
      onAddNote(noteText);
      setNoteText('');
    }
  };

  return (
    <div className='note add-note'>
      <textarea
        className='add-note__textarea'
        cols='10'
        rows='8'
        placeholder='Введите заметку ...'
        onChange={hadleChange}
        maxLength={characterLimit}
        value={noteText}
      ></textarea>
      <div className='note__footer'>
        <span className='note__simbols'>{characterLimit - noteText.length} символов осталось</span>
        <button className='add-note__save-button' onClick={handleSave}>
          Сохранить
        </button>
      </div>
    </div>
  );
};
