import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { fetchTodos } from '../actions'

import Header from './Header'

// Using hooks
import AddTodo from './AddToDo'
import TodoList from './TodoList'
import TodoFilter from './TodoFilter'

// Using hooks
const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchTodos())
  }, [ dispatch ])

  return (
    <div style={{ width: 400 }}>
      <Header />
      <AddTodo />
      <hr />
      <TodoList />
      <hr />
      <TodoFilter />
    </div>
  )
}

export default App