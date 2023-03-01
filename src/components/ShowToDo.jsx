import React from 'react'
import Buttons from './Buttons'

function ShowToDo({ toDoList, setToDoList }) {
  const deleteToDO = (id) => {
    setToDoList(toDoList.filter((list) => list.id !== id))

  }

  const doneToDo = (id) => {

    setToDoList(toDoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: true };
      }
      return todo;
    }))
  }
  return (
    <div className='showlist'>
      <div className='showtitle'>Working...🔥</div>
      {toDoList.filter((e) => e.isDone === false).map((list) => {
        return (
          <div key={list.id} className='todo'>
            <Buttons deleteToDO={deleteToDO} id={list.id}>삭재</Buttons>
            <Buttons doneToDo={doneToDo} id={list.id}>완료</Buttons>

            <div>제목:{list.title}</div>
            <div>내용:{list.content}</div>
          </div>
        )
      })}
    </div>
  )
}

export default ShowToDo