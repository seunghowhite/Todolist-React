import React, { useState } from 'react'
import './App.css';

function App() {

  const [toDoList, setToDoList] = useState([//useState안씀

  ])

  const [donetoDoList, setdoneToDoList] = useState([//useState안씀

  ])

  const [toDoTitle, setToDoTitle] = useState('')
  const [toDoContent, setToDoContent] = useState('')

  const titleHander = (evnet) => { setToDoTitle(evnet.target.value) }
  const contentHander = (evnet) => { setToDoContent(evnet.target.value) }

  const addToDO = () => {
    const newtodolist = {
      id: toDoList.length + 1,
      title: toDoTitle,
      content: toDoContent,
      done: 0
    }

    if (toDoContent == '' || toDoTitle == '') {
      alert('값을 입력하세요')
    } else {
      setToDoList([...toDoList, newtodolist])//멥 꼭 만들어주기
      setToDoTitle('')
      setToDoContent('')
    }
  }

  const deleteToDO = (id) => {
    setToDoList(toDoList.filter((list) => list.id !== id))
    setdoneToDoList(donetoDoList.filter((list) => list.id !== id))
  }

  const doneToDo = (id) => {
    const newDoneList = toDoList.filter((list) => list.id == id)
    setdoneToDoList([...donetoDoList, newDoneList['0']])
    setToDoList(toDoList.filter((list) => list.id !== id))
  }

  const cancelToDO = (id) => {//취소기능 넣기
    const newCancelList = donetoDoList.filter((list) => list.id == id)
    setToDoList([...toDoList, newCancelList['0']])
    setdoneToDoList(donetoDoList.filter((list) => list.id !== id))
  }

  return (
    <div className='todolist'>

      <div className='top'>
        <div className='title'><span>Todolist</span></div>
        <div className='write'>
          <input value={toDoTitle} onChange={titleHander} placeholder="제목을 입력하세요" required />
          <input value={toDoContent} onChange={contentHander} placeholder="내용을 입력하세요" required />
          <br />
          <button className="w-btn-outline1 w-btn-green-outline" onClick={addToDO}>추가</button>
        </div>
      </div>

      <div className='showlist'>
        <div className='showtitle'>Working🆙</div>
        {toDoList.map((list) => {
          return (
            <div className='todo'>
              <button className="w-btn-outline w-btn-red-outline" onClick={() => deleteToDO(list.id)}>삭재</button>
              <button className="w-btn-outline w-btn-green-outline" onClick={() => doneToDo(list.id)}>완료</button><br />
              제목:{list.title}<br />내용:{list.content}
            </div>
          )
        })}
      </div>

      <div className='showlist'>
        <div className='showtitle'>Done✅</div>
        {donetoDoList.map((list) => {
          return (
            <div className='todo'>
              <button className="w-btn-outline w-btn-red-outline" onClick={() => deleteToDO(list.id)}>삭재</button>
              <button className="w-btn-outline w-btn-green-outline" onClick={() => cancelToDO(list.id)}>취소</button><br />
              <div>제목:{list.title}</div>
              <div>내용:{list.content}</div>
            </div>
          )
        })}
      </div>

    </div >
  )
}

export default App