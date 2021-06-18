import React, { createContext, useEffect, useMemo, useReducer } from 'react';

export const TodosContext = createContext({
  state: {},
  dispatch: () => {},
});

const initialState = [];
const KEY_LS = 'todoList-key';

export const LOAD_TODO = 'LOAD_TODO';
export const CREATE_TODO = 'CREATE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

// 액션을 처리 (이전 상태 + 액션 => 다음 상태)
const reducer = (state, action) => {
  switch (action.type) {
    case LOAD_TODO:
      return state.concat(action.data);
    case CREATE_TODO:
      const data = [...state];
      const newData = data.concat(action.data);
      localStorage.setItem(KEY_LS, JSON.stringify(newData));
      return state.concat(action.data);
    case TOGGLE_TODO:
      const toggle = state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
      localStorage.setItem(KEY_LS, JSON.stringify(toggle));
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case REMOVE_TODO:
      const removedState = state.filter((todo) => todo.id !== action.id);
      localStorage.setItem(KEY_LS, JSON.stringify(removedState));
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

const TodoContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => ({ state, dispatch }), [state]);

  useEffect(() => {
    const loadedData = localStorage.getItem(KEY_LS);
    if (loadedData !== null) {
      const parseData = JSON.parse(loadedData); // json형식을 객체 타입으로 변환
      dispatch({ type: LOAD_TODO, data: parseData });
      console.log(parseData);
    } else {
      console.log('null');
    }
  }, []);

  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  );
};

export default TodoContext;
