import { MdDeleteForever } from 'react-icons/md';
import './Note.css';

export const Note = ({ id, text, date, onDelete }) => {
  return (
    <div className='note'>
      <span className='note__span'>{text}</span>
      <div className='note__footer'>
        <small>{date}</small>
        <MdDeleteForever
          className='note__delete-button'
          onClick={() => onDelete(id)}
        />
      </div>
    </div>
  );
};
