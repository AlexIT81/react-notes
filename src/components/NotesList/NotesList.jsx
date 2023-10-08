import React from 'react';
import { Note } from '../Note/Note';
import './NotesList.css';
import { AddNote } from '../AddNote/AddNote'

export const NotesList = ({notes, onAddNote, onDelete }) => {
  return (
    <div className='notes-list'>
      {notes.map((note) => <Note key={note.id} id={note.id} text={note.text} date={note.data} onDelete={onDelete} />)}
      <AddNote onAddNote={onAddNote} />
    </div>
  );
};
