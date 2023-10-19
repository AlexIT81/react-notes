import { MdDeleteForever, MdEditSquare } from 'react-icons/md';
import './Note.css';
import { useState } from 'react';

export const Note = ({ id, text, date, onDelete, onEdit }) => {
  const [isEditActive, setIsEditActive] = useState(false);
  const [newText, setNewText] = useState(text);
  const characterLimit = 200;

  const handleEdit = () => {
    onEdit(id, newText);
    setIsEditActive(false);
  };

  return (
    <div className='note'>
      <textarea
        className='note__textarea'
        cols='10'
        rows='8'
        maxLength={characterLimit}
        value={newText}
        disabled={!isEditActive}
        onChange={(e) => setNewText(e.target.value)}
      ></textarea>
      <div className='note__footer'>
        {isEditActive ? (
          <span className='note__simbols'>
            {characterLimit - newText.length} символов осталось
          </span>
        ) : (
          <small>{date}</small>
        )}
        {!isEditActive ? (
          <>
            <MdEditSquare
              className='note__edit-button'
              onClick={() => setIsEditActive(true)}
              title='Редактировать'
            />
            <MdDeleteForever
              className='note__delete-button'
              onClick={() => onDelete(id)}
              title='Удалить'
            />
          </>
        ) : (
          <button className='add-note__save-button' onClick={handleEdit}>
            Сохранить
          </button>
        )}
      </div>
    </div>
  );
};
