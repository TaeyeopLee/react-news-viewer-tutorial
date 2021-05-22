import React, { useState } from 'react';
import NewsList from './components/NewsList';
import Categories from './components/Categories';

const App = () => {
  return (
    <>
      <Categories></Categories>
      <NewsList></NewsList>
    </>
  );
};

export default App;
