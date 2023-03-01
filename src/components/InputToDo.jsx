import React, { useState } from 'react'
import Buttons from './Buttons'

function InputToDo({ toDoList, setToDoList }) {
  // const [toDoList, setToDoList] = useState([//useState안씀

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

    if (toDoContent === '' || toDoTitle === '') {
      alert('값을 입력하세요')
    } else {
      setToDoList([...toDoList, newtodolist])//멥 꼭 만들어주기
      setToDoTitle('')
      setToDoContent('')
    }
  }

  return (
    <div className='top'>
      <div className='title'><span>Todolist</span></div>
      <div className='write'>
        <input value={toDoTitle} onChange={titleHander} placeholder="제목을 입력하세요" required />
        <input value={toDoContent} onChange={contentHander} placeholder="내용을 입력하세요" required />
        <br />
        <Buttons addToDO={addToDO}>추가</Buttons>


      </div>
    </div>
  )
}

export default InputToDo