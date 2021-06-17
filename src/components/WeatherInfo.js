import React, { useEffect, useState } from 'react';
import TodoHead from './TodoHead';

const WeatherInfo = () => {
  const [weather, setWeather] = useState([]);
  const API_KEY = '26e8d0be599f8ca2b0c494d3d390fc44';

  // 위치 정보를 요청하는 함수
  const askForCoords = () => {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
  };

  // 위치 정보 가져오기 성공
  const handleGeoSuccess = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
      latitude,
      longitude,
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
  };

  // 위치 정보 가져오기 실패
  const handleGeoError = () => {
    alert('Can not access geo location.');
  };

  // 날씨 정보를 받아오는 함수
  const getWeather = (latitude, longitude) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        const weather = json.weather[0].main;
        setWeather(weather);
      });
  };

  // 위치 정보를 localStorage에 저장하는 함수
  const saveCoords = (coordsObj) => {
    localStorage.setItem(API_KEY, JSON.stringify(coordsObj));
  };

  useEffect(() => {
    const loadedCoords = localStorage.getItem(API_KEY); // localStorage에서 위치정보 가져옴
    if (loadedCoords === null) {
      // 위치 정보가 없으면
      askForCoords();
    } else {
      const parseCoords = JSON.parse(loadedCoords); // json형식을 객체 타입으로 바꿔서 저장
      getWeather(parseCoords.latitude, parseCoords.longitude);
    }
  }, []);

  return (
    <>
      <TodoHead weather={weather} />
    </>
  );
};

export default WeatherInfo;
