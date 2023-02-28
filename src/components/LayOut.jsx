import React, { useState } from 'react'
import InputToDo from './InputToDo'
import ShowDoneToDo from './ShowDoneToDo'
import ShowToDo from './ShowToDo'

function LayOut() {

  const [toDoList, setToDoList] = useState([//useState안씀

  ])

  return (
    <div className='todolist'>

      <InputToDo toDoList={toDoList} setToDoList={setToDoList} />
      <ShowToDo toDoList={toDoList} setToDoList={setToDoList} />
      <ShowDoneToDo toDoList={toDoList} setToDoList={setToDoList} />


    </div >
  )
}

export default LayOut