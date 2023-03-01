import React, { useState } from 'react'
import InputToDo from './InputToDo'
import ShowDoneToDo from './ShowDoneToDo'
import ShowToDo from './ShowToDo'

function LayOut() {

  const [toDoList, setToDoList] = useState([
    { id: 1, title: '제목', content: '콘탠츠', isDone: false }

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