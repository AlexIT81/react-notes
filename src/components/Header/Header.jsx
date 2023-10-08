import React from 'react';
import './Header.css';

export const Header = ({ handleChangeDarkMode }) => {
  return (
    <header className='header'>
      <h1 className='header__title'>Заметки</h1>
      <button className='header__button' onClick={() => handleChangeDarkMode(prev => !prev)}>Цветовя схема</button>
    </header>
  );
};
