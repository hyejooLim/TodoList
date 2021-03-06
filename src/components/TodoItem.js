import React, { useCallback, useContext, memo } from 'react';
import styled, { css } from 'styled-components';
import { FaCheck } from 'react-icons/fa';
import { BiTrash } from 'react-icons/bi';
import PropTypes from 'prop-types';

import { TodosContext, TOGGLE_TODO, REMOVE_TODO } from '../TodoContext';

const ItemWrapper = styled.div`
  display: flex;
  padding: 5px;
  font-size: 15px;
  font-family: 'menlo';

  &:hover {
    .remove-button {
      visibility: visible;
    }
  }

  .check-work {
    margin-left: 15px;
    width: 24px;
    height: 24px;
    border: 1px solid black;
    border-radius: 50%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      cursor: pointer;
      color: #ef4444;
    }
  }

  .remove-button {
    font-size: 20px;
    margin-right: 10px;
    visibility: hidden;

    &:hover {
      cursor: pointer;
      color: #ef4444;
    }
  }
`;

const Text = styled.div`
  flex: 1;
  margin-left: 15px;
  color: #1eaf8a;

  ${(props) =>
    props.done &&
    css`
      color: #bfbfbf;
      text-decoration: line-through;
    `}
`;

const TodoItem = memo(({ id, text, done }) => {
  const { dispatch } = useContext(TodosContext);

  const onToggle = useCallback(() => {
    dispatch({ type: TOGGLE_TODO, id });
  }, []);

  const onRemove = useCallback(() => {
    dispatch({ type: REMOVE_TODO, id });
  }, []);

  return (
    <ItemWrapper>
      <div className='check-work' onClick={onToggle}>
        {done && <FaCheck />}
      </div>
      <Text className='text' done={done}>
        {text}
      </Text>
      <div className='remove-button' onClick={onRemove}>
        <BiTrash />
      </div>
    </ItemWrapper>
  );
});

TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
};

export default TodoItem;
