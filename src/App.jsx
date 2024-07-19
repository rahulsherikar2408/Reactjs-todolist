import { useState } from "react"
import TodoCard from "./components/TodoCard"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {

  const [todos,setTodos] = useState([])
  const [todoValue,setTodoValue] = useState('')

  function handleAddTodos(newTodo){
    const newTodoList = [...todos,newTodo]
    setTodos(newTodoList)
  }

  function handleDeleteTodos(index){
    const newTodoList = todos.filter((todo,todoIndex)=>{
      return todoIndex !== index
    })
    setTodos(newTodoList)
  }

  function handleEditTodos(index){
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodos(index)
  }

  function handleMoveUpTodos(index){
    if (index > 0) {
      const newTodoList = [...todos]
      const temp = newTodoList[index]
      newTodoList[index] = newTodoList[index - 1]
      newTodoList[index - 1] = temp
      setTodos(newTodoList)
    }
  }

  function handleMoveDownTodos(index){
    if (index < todos.length-1) {
      const newTodoList = [...todos]
      const temp = newTodoList[index]
      newTodoList[index] = newTodoList[index + 1]
      newTodoList[index + 1] = temp
      setTodos(newTodoList)
    }
  }

  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}/>
      <TodoList handleMoveDownTodos={handleMoveDownTodos} handleMoveUpTodos={handleMoveUpTodos} handleEditTodos={handleEditTodos} handleDeleteTodos={handleDeleteTodos} todos={todos}/>
    </>
  )
}

export default App
