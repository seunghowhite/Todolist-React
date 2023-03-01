import React from 'react'
import Buttons from './Buttons'
function ShowDoneToDo({ toDoList, setToDoList }) {
  const deleteToDO = (id) => {
    setToDoList(toDoList.filter((list) => list.id !== id))
  }


  const cancelToDO = (id) => {
    setToDoList(toDoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: false };
      }
      return todo;
    }))
  }
  return (
    <div className='showlist'>
      <div className='showtitle'>Done...🎉</div>
      {toDoList.filter((e) => e.isDone === true).map((list) => {
        return (
          <div key={list.id} className='todo'>
            <div className='todotitle'>{list.title}</div>
            <div className='content'>{list.content}</div>
            <Buttons deleteToDO={deleteToDO} id={list.id}>삭재</Buttons>
            <Buttons cancelToDO={cancelToDO} id={list.id}>취소</Buttons>
          </div>
        )
      })}
    </div>
  )
}

export default ShowDoneToDo