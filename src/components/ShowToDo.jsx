import React from 'react'

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
          <div className='todo'>
            <button className="w-btn-outline w-btn-red-outline" onClick={() => deleteToDO(list.id)}>삭재</button>
            <button className="w-btn-outline w-btn-green-outline" onClick={() => doneToDo(list.id)}>완료</button><br />
            <div>제목:{list.title}</div>
            <div>내용:{list.content}</div>
          </div>
        )
      })}
    </div>
  )
}

export default ShowToDo