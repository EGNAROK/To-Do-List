import React, { useState } from 'react'
import './todo-form.scss';

export const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText('');
  }

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder='Enter task...'
        value={text}
        onChange={(e) => setText(e.target.value)} 
      />
      <button type='submit' className='todo-form__button'>Add</button>
    </form>
  )
}
