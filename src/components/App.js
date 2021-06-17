import React from 'react';
import TodoLayout from './TodoLayout';
import TodoContext from '../TodoContext';

const App = () => {
  return (
    <>
      <TodoContext>
        <TodoLayout />
      </TodoContext>
    </>
  );
};

export default App;
