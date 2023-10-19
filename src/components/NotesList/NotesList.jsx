import React from 'react';
import { Note } from '../Note/Note';
import './NotesList.css';
import { AddNote } from '../AddNote/AddNote'

export const NotesList = ({notes, onAddNote, onDelete, onEdit }) => {
  return (
    <div className='notes-list'>
      {notes.map((note) => <Note key={note.id} id={note.id} text={note.text} date={note.date} onDelete={onDelete} onEdit={onEdit} />)}
      <AddNote onAddNote={onAddNote} />
    </div>
  );
};
