import React, { useState } from 'react'
import './App.css';

function App() {

  const [toDoList, setToDoList] = useState([//useState안씀

  ])

  // const [donetoDoList, setdoneToDoList] = useState([//useState안씀

  // ])

  const [toDoTitle, setToDoTitle] = useState('')
  const [toDoContent, setToDoContent] = useState('')

  const titleHander = (evnet) => { setToDoTitle(evnet.target.value) }
  const contentHander = (evnet) => { setToDoContent(evnet.target.value) }

  const addToDO = () => {
    const newtodolist = {
      id: toDoList.length + 1,
      title: toDoTitle,
      content: toDoContent,
      isDone: false
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
    // setdoneToDoList(donetoDoList.filter((list) => list.id !== id))
  }

  const doneToDo = (id) => {//isdon값 만지기
    //그 고유id의 isdone 값을 true로 바꿔라
    setToDoList(toDoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: true };
      }
      return todo;
    }))
  }

  const cancelToDO = (id) => {//취소기능 넣기
    setToDoList(toDoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: false };
      }
      return todo;
    }))
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
        {toDoList.filter((e) => e.isDone == false).map((list) => {
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

      <div className='showlist'>
        <div className='showtitle'>Done✅</div>
        {toDoList.filter((e) => e.isDone == true).map((list) => {
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