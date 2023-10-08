import './App.css';
import { NotesList } from '../NotesList/NotesList';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { Search } from '../Search/Search';
import { Header } from '../Header/Header';

function App() {
  const [notes, setNotes] = useState(checkSavedNotes());
  const [searchQuery, setSearchQuery] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  function checkSavedNotes() {
    const savedNotes = JSON.parse(localStorage.notes);
    if (savedNotes) {
      return savedNotes;
    } else {
      return [];
    }
  }
  // useEffect(() => {
  //   const savedNotes = JSON.parse(localStorage.notes);
  //   if (savedNotes) {
  //     console.log(savedNotes);
  //     setNotes(savedNotes);
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleSearchQueryChange = (text) => {
    if (text) {
      setSearchQuery(text);
    } else {
      setSearchQuery('');
    }
  };

  const handleAddNote = (text) => {
    const date = new Date();
    let dateString =
      ('0' + date.getDate()).slice(-2) +
      '.' +
      ('0' + (date.getMonth() + 1)).slice(-2) +
      '.' +
      date.getFullYear();
    const newNote = {
      id: nanoid(),
      text: text,
      date: dateString,
    };
    setNotes([...notes, newNote]);
  };

  const handleDelete = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className={`mode ${darkMode && 'mode_dark'}`}>
      <div className='App'>
        <Header handleChangeDarkMode={setDarkMode} />
        <Search onSearchQueryChange={handleSearchQueryChange} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLocaleLowerCase().includes(searchQuery)
          )}
          onAddNote={handleAddNote}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default App;
