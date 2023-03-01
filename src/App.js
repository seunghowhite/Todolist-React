import React, { useState } from 'react'
import InputToDo from './components/InputToDo'
import ShowDoneToDo from './components/ShowDoneToDo'
import ShowToDo from './components/ShowToDo'
import './App.css';

function App() {
  const [toDoList, setToDoList] = useState([
    { id: 1, title: '리액트 공부하기', content: '기본을 중요하게', isDone: false }

  ])

  return (
    <div className='todolist'>


      <InputToDo toDoList={toDoList} setToDoList={setToDoList} />
      <ShowToDo toDoList={toDoList} setToDoList={setToDoList} />
      <ShowDoneToDo toDoList={toDoList} setToDoList={setToDoList} />


    </div >
  )
}

export default App