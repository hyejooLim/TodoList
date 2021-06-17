import React, { useCallback } from 'react';
import styled, { css } from 'styled-components';
import { FaCheck } from 'react-icons/fa';
import { BiTrash } from 'react-icons/bi';
import PropTypes from 'prop-types';

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
    width: 20px;
    height: 20px;
    text-align: center;

    &:hover {
      cursor: pointer;
      color: #EF4444;
    }
  }

  .text {
    flex: 1;
    margin-left: 15px;
  }

  .remove-button {
    font-size: 20px;
    margin-right: 10px;
    visibility: hidden;

    &:hover {
      cursor: pointer;
      color: #EF4444;
    }
  }
`;

const TodoItem = ({ key, id, text, done }) => {
  const onToggle = useCallback((prev) => !prev);
  const onRemove = useCallback(() => {
    // 해당 항목 삭제
  }, []);

  return (
    <ItemWrapper>
      <div className='check-work' onClick={onToggle} done={done}>
        {done && <FaCheck />}
      </div>
      <div className='text' id={id}>
        {text}
      </div>
      <div className='remove-button' onClick={onRemove}>
        <BiTrash />
      </div>
    </ItemWrapper>
  );
};

TodoItem.propTypes = {
  key: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
};

export default TodoItem;
