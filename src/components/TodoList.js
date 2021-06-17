import React, { useContext } from 'react';
import styled from 'styled-components';

import TodoItem from './TodoItem';
import { TodosContext } from '../TodoContext';

const ListWrapper = styled.div`
  flex: 1;
  height: 346px;
  overflow-y: auto;
  background: #E7F3F0;
  padding-top: 16px;
`;

const TodoList = () => {
  const { state } = useContext(TodosContext);

  return (
    <ListWrapper>
      {state.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
        />
      ))}
    </ListWrapper>
  );
};

export default TodoList;
