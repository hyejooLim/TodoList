import React, { useContext } from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { TodosContext } from '../TodoContext';

const ListWrapper = styled.div`
  height: 360px; //
  // padding
  overflow-y: scroll;
`;

const TodoList = () => {
  const { state } = useContext(TodosContext);

  return (
    <ListWrapper>
      {state && state.map((todo) => (
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
