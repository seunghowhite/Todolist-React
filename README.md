# **📘리엑트 ToDoList만들기**
---
## 목차
+ ### 화면구성
  + 화면설명
  + 기능설명
+ ### 컴포넌트 설명
  + 1.InputToDo
  + 2.ShowToDo, ShowDoneToDo
  + 3.Buttons
    
---


## 🙂화면구성

### 화면설명
<img width="835" alt="제목 없음" src="https://user-images.githubusercontent.com/105100315/222123416-cf88951e-48df-4a95-bdca-a001e0e918b8.png">

위에서부터 InputToDo, ShowToDo, ShowDoneToDo 이렇게  3개의 구역으로 나눴습니다.

- InputToDot영역: 제목과 내용을 작성폼, 추가버튼
- ShowToDo영역: 완료하기 전인 list들을 보여주는 구역
- ShowDoneToDo영역: 완료한 list들을 보여주는 구역

### 기능설명
- todolist추가 

![KakaoTalk_20230301_211410184](https://user-images.githubusercontent.com/105100315/222137785-b1b188e2-2012-4439-ba7d-4aea6e0b6228.gif)
- todolist 완료, 취소

![KakaoTalk_20230301_211710886](https://user-images.githubusercontent.com/105100315/222138254-244c6861-175d-4780-acd4-a8d841c32b19.gif)

- todolist 삭제
 
![KakaoTalk_20230301_211959832](https://user-images.githubusercontent.com/105100315/222138445-d7c61428-3b97-4323-8c71-b9156760f3d5.gif)

---

## 🙂컴포넌트 설명

### 컴포넌트는 총4개로 구성했습니다.
**InputToDo** , **ShowToDo** , **ShowDoneToDo** , **Buttons** 컴포넌트 이렇게 있습니다.


### 0.App.js에서 
- InputToDo, ShowToDo, ShowDoneToDo 이렇게 각각 나누어 집니다. 보여지는 List는 state명을 toDoList로 설정 하였습니다.
```c
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
```
---
### 1.InputToDo 컴포넌트

- 제목title과 내용content을 받을 state를 각각 설정하고, 입력 발생시 값을 받아오는 Hander도 각각 설정해 두었습니다.

- 버튼 클릭시 Hander로 받온 값들을 새로운객체로 저장하여 기존 값에 넣어준뒤 초기화를 진행시킵니다.

- button을 Buttons컴포넌트를 사용하여 추가 라는 children값을 보내고 있습니다.
```c
unction InputToDo({ toDoList, setToDoList }) {

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
      setToDoList([...toDoList, newtodolist])
      setToDoTitle('')
      setToDoContent('')
    }
  }

  return (
    <div className='top'>
      <div className='title'><span>Todolist</span></div>
      <div className='write'>

        <input value={toDoTitle} onChange={titleHander} placeholder="제목을 입력하세요" />
        <input value={toDoContent} onChange={contentHander} placeholder="내용을 입력하세요" />
        <br />
        <Buttons addToDO={addToDO}>추가</Buttons>

      </div>
    </div>
  )
}
```
---
### 2.ShowToDo, ShowDoneToDo 컴포넌트 

- 삭재버튼과 완료(취소)버튼이 있습니다. 

- 각각 id값을 이용하여 toDoList의 값을 삭제하거나 isDone인 완료값을 변경 합니다.

- 리스트를 보여줄때 isDone값을 이용하여 필터메서드를 사용뒤 map메서드를 이용하여 화면에 출력합니다.

- 여기서 마찬가지로 button을 Buttons컴포넌트를 사용하여 추가 라는 children값을 보내고 있습니다.

```c
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
            <div className='todotitle'>{list.title}</div>
            <div className='content'>{list.content}</div>
            <Buttons deleteToDO={deleteToDO} id={list.id}>삭제</Buttons>
            <Buttons doneToDo={doneToDo} id={list.id}>완료</Buttons>

          </div>
        )
      })}
    </div>
  )
}
```
---
### 3.Buttons컴포넌트

- 각각 받아온 관련된 함수와 children값들을 이용해 버튼들의 이름과 함수를 적용합니다.
```c
function Buttons(props) {

  if (props.children === '추가') {
    return (<button className="w-btn-outline1 w-btn-green-outline" onClick={props.addToDO}>{props.children}</button>)
  } else if (props.children === '삭재') {
    return (<button className="w-btn-outline w-btn-red-outline" onClick={() => props.deleteToDO(props.id)}>{props.children}</button>)
  } else if (props.children === '완료') {
    return (<button className="w-btn-outline w-btn-green-outline" onClick={() => props.doneToDo(props.id)}>{props.children}</button>)
  } else if (props.children === '취소') {
    return (<button className="w-btn-outline w-btn-green-outline" onClick={() => props.cancelToDO(props.id)}>{props.children}</button>)
  }

}
```
