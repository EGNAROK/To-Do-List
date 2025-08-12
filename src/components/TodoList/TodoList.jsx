import React from 'react'
import { TodoItem } from '../TodoItem/TodoItem';
import './todo-list.scss';

export const TodoList = ({ todos, onDelete, onToggle }) => {
  return (
    <ul className='todo-list'>
      <TodoItem todos={todos} onDelete={onDelete} onToggle={onToggle} />
    </ul>
  )
}
