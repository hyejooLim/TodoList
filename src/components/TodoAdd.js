import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';

const AddWrapper = styled.form`
  display: flex;
  background: #E5E5E5;
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
  }

  .add-button {
    padding: 5px 8px;
    font-size: 24px;
    font-weight: 600;
    border: none;
    outline: none;
    text-align: center;

    &:hover {
      cursor: pointer;
      // background: 
    }
  }
`;

const TodoAdd = () => {
  const [value, setValue] = useState('');

  const onChangeInput = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onAdd = useCallback(() => {

  }, []);


  return (
    <AddWrapper>
      <input
        className="input-text"
        type='text'
        value={value}
        onChange={onChangeInput}
        placeholder='할 일을 입력하세요.'
      />
      <button className="add-button" onClick={onAdd}><MdAdd /></button>
    </AddWrapper>
  );
};

export default TodoAdd;
