import React from 'react';
import styled from 'styled-components';

import TodoHead from './TodoHead';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';

const LayoutWrapper = styled.div`
  width: 390px;
  height: 580px;
  background: #f2f2f2;
  position: relative;
  top: 50px;
  margin: 0 auto;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  box-shadow: 3px 6px 9px 1px rgba(69, 69, 69, 0.39);
  -webkit-box-shadow: 3px 6px 9px 1px rgba(69, 69, 69, 0.39);
  -moz-box-shadow: 3px 6px 9px 1px rgba(69, 69, 69, 0.39);
`;

const TodoLayout = () => {
  return (
    <LayoutWrapper>
      <TodoHead />
      <TodoList />
      <TodoAdd />
    </LayoutWrapper>
  );
};

export default TodoLayout;
