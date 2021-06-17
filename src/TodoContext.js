import React, { createContext, useMemo, useReducer } from 'react';

export const TodosContext = createContext({
  state: {},
  dispatch: () => {},
});

const initialState = [
  {
    id: 1,
    text: '리액트 공부하기',
    done: true,
  },
  {
    id: 2,
    text: '자소서 쓰기',
    done: false,
  },
  {
    id: 3,
    text: '국장 신청하기',
    done: false,
  },
];

export const CREATE_TODO = 'CREATE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

// 액션을 처리 (이전 상태 + 액션 => 다음 상태)
const reducer = (state, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return state.concat({
        id: action.id,
        text: action.text,
        done: false,
      });
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

const TodoContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <TodosContext.Provider value={value}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodoContext;
