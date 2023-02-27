import React, { useState } from 'react'
import './App.css';

function App() {

  const [toDoList, setToDoList] = useState([//useState안씀
    { id: 1, title: '제목임1', content: '비어있음1', done: 0 },
    { id: 2, title: '제목임2', content: '비어있음3', done: 0 },
    { id: 3, title: '제목임2', content: '비어있음3', done: 0 },
  ])

  const [donetoDoList, setdoneToDoList] = useState([//useState안씀
    { id: 4, title: '완료4', content: '완료4', done: 0 }
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
    setToDoList([...toDoList, newtodolist])//멥 꼭 만들어주기
  }

  const deleteToDO = (id) => {
    setToDoList(toDoList.filter((list) => list.id !== id))
  }

  const doneToDo = (id) => {
    console.log(id)
    const a = toDoList.filter((list) => list.id == id)
    console.log(a)
    setdoneToDoList([...donetoDoList, a])
    setToDoList(toDoList.filter((list) => list.id !== id))
  }
  return (
    <div>
      <div>

        제목<input value={toDoTitle} onChange={titleHander} />
        내용<input value={toDoContent} onChange={contentHander} />

        <button onClick={addToDO}>추가</button>

      </div>
      <div>
        todolist<br />
        {toDoList.map((list) => {
          return (
            <div>
              제목:{list.title}내용:{list.content}
              <button onClick={() => deleteToDO(list.id)}>삭재</button>
              <button onClick={() => doneToDo(list.id)}>완료</button>
            </div>
          )
        })}
      </div>
      <div>
        완료했다
        {donetoDoList.map((list) => {
          return (
            <div>
              제목:{list.title}내용:{list.content}
            </div>
          )
        })}
      </div>
    </div >
  )
}

export default App