import React, { useContext } from 'react';
import styled from 'styled-components';
import { ImSun } from 'react-icons/im';

import { TodosContext } from '../TodoContext';

const HeadWrapper = styled.div`
  height: 130px;
  background: #CAEFE7;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  padding: 20px 38px;

  & h1 {
    font-size: 24px;
    margin-top: 24px;
    margin-bottom: 0;
  }

  & .day {
    font-size: 20px;
    color: #1EAF8A;
    margin-top: 10px;
  }

  & .left-work {
    font-size: 18px;
    margin-top: 18px;
    color: #3D3D3D;
  }
`;

const TodoHead = () => {
  const date = new Date();
  const dateString = date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const dayString = date.toLocaleDateString('ko-KR', {
    weekday: 'long',
  });

  const { state } = useContext(TodosContext);
  const leftWork = state.filter((todo) => !todo.done);

  return (
    <HeadWrapper>
      <h1>{dateString}<ImSun/></h1>
      <div className="day">{dayString}</div>
      <div className="left-work">남은 할 일: {leftWork.length}</div>
    </HeadWrapper>
  );
};

export default TodoHead;
