import { useEffect, useState } from 'react'
import { TodoForm, TodoList } from './components'
import { colors } from './shared/styles/colors/colors'
import useCSSVariables from './shared/hooks/useCSSVariables'
import { AudioPlayer } from './components/AudioPlayer/AudioPlayer'
import { backgrounds } from './assets/images'
import './App.scss'

function App() {
  useCSSVariables(colors);
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const addTodo = (text) => {
    if (!text.trim()) return;
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    };
    setTodos([...todos, newTodo])
  }

  const deleteTodo = (id) => {
    setTodos(prevTodo => prevTodo.filter(todo => todo.id !== id))
  }

  const toggleCompleted = (id) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <div className='app'>
      <img src={backgrounds.app_background_v2} alt="Background" className="app__bg" loading="eager" />
      <AudioPlayer />
      <div className='app__container'>
        <h1 className='app__title'>To-Do List</h1>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} onDelete={deleteTodo} onToggle={toggleCompleted} />
      </div>
    </div>
  )
}

export default App
