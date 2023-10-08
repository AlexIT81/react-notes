import React from 'react';
import './Search.css';
import { MdSearch } from 'react-icons/md';

export const Search = ({ onSearchQueryChange }) => {
  return (
    <form className='search'>
      <MdSearch className='search__icon' t />
      <input
        className='search__input'
        type='text'
        placeholder='Введите запрос'
        onChange={(e) => onSearchQueryChange(e.target.value)}
      />
    </form>
  );
};
