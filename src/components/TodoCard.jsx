import React from 'react'

export default function TodoCard(props) {
  const {children,handleDeleteTodos,index,handleEditTodos,handleMoveUpTodos,handleMoveDownTodos} = props
  return (
    <li className='todoItem'>
      {children}
      <div className='actionsContainer'>
        {/* Edit Todo */}
        <button onClick={() =>{
          handleEditTodos(index)
        }}>
          <i class="fa-regular fa-pen-to-square"></i>
        </button>
        {/* Delete Todo */}
        <button onClick={() => {
          handleDeleteTodos(index)
        }}>
          <i class="fa-regular fa-trash-can"></i>
        </button>
        {/* Move Up */}
        <button onClick={() => {
          handleMoveUpTodos(index)
        }}>
          <i class="fa-solid fa-arrow-up"></i>
        </button>
        {/* Move Down */}
        <button onClick={() => {
          handleMoveDownTodos(index)
        }}>
          <i class="fa-solid fa-arrow-down"></i>
        </button>
      </div>
    </li>
  )
}
