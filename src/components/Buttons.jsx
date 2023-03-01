import React from 'react'

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

export default Buttons