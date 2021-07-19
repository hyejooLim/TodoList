import React, { useContext, useEffect, useState, memo } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
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
  const { state } = useContext(TodosContext);
  const leftWork = state.filter((todo) => !todo.done);

  const day = [ '일', '월', '화', '수', '목', '금', '토' ];
  const todayDate = dayjs().format('YYYY년 MM월 DD일');
  const todayDay = dayjs().day();

  // 날씨에 따라 아이콘 변경
  useEffect(() => {
    // console.log(weather);
    switch (weather) {
      case 'Clear':
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
        {todayDate}
        &nbsp;
        {weatherIcon}
      </h1>
      <div className='day'>{day[todayDay]}요일</div>
      <div className='left-work'>남은 할 일: {leftWork.length}</div>
    </HeadWrapper>
  );
});

export default TodoHead;
