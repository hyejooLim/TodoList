import React, { useContext, useEffect, useState, memo } from 'react';
import styled from 'styled-components';
import { ImSun } from 'react-icons/im';
import { MdCloud } from 'react-icons/md';
import { BiCloudRain, BiCloudSnow } from 'react-icons/bi';
import { FaRainbow } from 'react-icons/fa';

import { TodosContext } from '../TodoContext';

const HeadWrapper = styled.div`
  height: 130px;
  background: #caefe7;
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
    color: #1eaf8a;
    margin-top: 10px;
  }

  & .left-work {
    font-size: 18px;
    margin-top: 18px;
    color: #3d3d3d;
  }
`;

const TodoHead = memo(({ weather }) => {
  const [weatherIcon, setWeatherIcon] = useState('');

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

  // 날씨에 따라 아이콘 변경
  useEffect(() => {
    switch (weather) {
      case 'Sun':
        setWeatherIcon(<ImSun />);
        break;
      case 'Clouds':
        setWeatherIcon(<MdCloud />);
        break;
      case 'Rain':
        setWeatherIcon(<BiCloudRain />);
        break;
      case 'Snow':
        setWeatherIcon(<BiCloudSnow />);
        break;
      default:
        setWeatherIcon(<FaRainbow />);
        break;
    }
  }, [weather]);

  return (
    <HeadWrapper>
      <h1>
        {dateString}
        &nbsp;
        {weatherIcon}
      </h1>
      <div className='day'>{dayString}</div>
      <div className='left-work'>남은 할 일: {leftWork.length}</div>
    </HeadWrapper>
  );
});

export default TodoHead;
