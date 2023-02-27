import React, { useState } from 'react'
import './App.css';

function App() {
  const [toDoList, setToDoList] = ([
    { id: 1, title: '제목임1', content: '비어있음1' },
    { id: 2, title: '제목임2', content: '비어있음3' },
    { id: 3, title: '제목임2', content: '비어있음3' },
  ])
  const [toDoTitle, setToDoTitle] = useState('')
  const [toDoContent, setToDoContent] = useState('')

  const titleHander = (evnet) => { setToDoTitle(evnet.target.value) }
  const contentHander = (evnet) => { setToDoContent(evnet.target.value) }

  const addToDO = () => {
    const newtodolist = {
      id: toDoList.length + 1,
      title: toDoTitle,
      content: toDoContent
    }
    setToDoList(...toDoList, newtodolist)
  }
  return (
    <div>
      <div>
        제목<input value={toDoTitle} onChange={titleHander} />
        내용<input value={toDoContent} onChange={contentHander} />
        <button onClick={addToDO}>추가</button>
      </div>
      <div>

        <div>제목:{toDoList.title}내용:{toDoList.content}</div>


      </div>
    </div>
  )
}

export default App