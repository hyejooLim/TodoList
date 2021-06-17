import React, { useCallback, useContext, useState } from 'react';
import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';
import shortid from 'shortid';

import { TodosContext, CREATE_TODO } from '../TodoContext';

const AddWrapper = styled.form`
  display: flex;
  background: #e5e5e5;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;

  .input-text {
    flex: 1;
    padding: 16px 18px;
    border: none;
    outline: none;
    font-size: 15px;
    color: #3D3D3D;
  }

  .add-button {
    padding: 5px 8px;
    font-size: 24px;
    font-weight: 600;
    border: none;
    outline: none;
    text-align: center;
    background: #CAEFE7;

    &:hover {
      cursor: pointer;
      // background:
    }
  }
`;

const TodoAdd = () => {
  const [value, setValue] = useState('');
  const { dispatch } = useContext(TodosContext);

  const onChangeInput = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onAdd = useCallback((e) => {
    e.preventDefault();
    setValue('');

    dispatch({
      type: CREATE_TODO,
      id: shortid.generate(),
      text: value,
    });
  }, [value]);

  return (
    <AddWrapper>
      <input
        className='input-text'
        type='text'
        value={value}
        onChange={onChangeInput}
        placeholder='할 일을 입력하세요.'
      />
      <button type='submit' className='add-button' onClick={onAdd}>
        <MdAdd />
      </button>
    </AddWrapper>
  );
};

export default TodoAdd;
