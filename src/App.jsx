
import React, { useState } from 'react';
import './App.css'

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천','맛집추천','파이썬독학'])

  let [추천수, 개추] = useState([0,0,0]);

  let [modal, setModal] = useState(0);

  let [title, setTitle] = useState(0); 
  // state = 자주변경되는 html 자동으로 재랜더링 해줘서

  let [입력값, 입력값변경] = useState('');

  function tg(){
    let copy = [...글제목];
        copy[0] = '여자코트 추천';
        글제목변경(copy);
  }

  return (
  <div className='App'>
    <div className='black-nav'>
    <h4>ReactBlog</h4>
    </div>

      <button onClick={()=>{
        let abc = [...글제목]
        abc.sort()
        글제목변경(abc)
      }}>가나다순정렬</button>

      <button onClick={()=>{
        let copy = [...글제목];
        copy[0] = '여자코트 추천';
        글제목변경(copy);
      }}>글수정</button>
{/* 
    <div className='list'>
    <h4 onClick={()=>{setModal(!modal)}}>{글제목[0]} <span onClick={()=>{ 개추(추천수 + 1) }}>👍</span> {추천수} </h4>
    <p>2월 17일 발행</p>
    </div>

    <div className='list'>
    <h4 onClick={()=>{setModal(!modal)}}>{글제목[1]}</h4>
    <p>2월 17일 발행</p>
    </div>

    <div className='list'>
    <h4 onClick={()=>{setModal(!modal)}}>{글제목[2]}</h4>
    <p>2월 17일 발행</p>
    </div> */}

      {
        글제목.map(function(a, i){
          return  (
            <div className='list' key={i}>
            <h4 onClick={()=>{
              setModal(!modal)
              setTitle(i)
            }}>{글제목[i]} 
              <span onClick={(e)=>{
                e.stopPropagation();
                let copy = [...추천수]
                copy[i]++;
                개추(copy)
                 }}>👍</span> {추천수[i]} 
                 </h4>
            <p>2월 17일 발행</p>
            <button onClick={()=>{
             let copy=[...글제목];
             copy.splice(i,1)
             글제목변경(copy)
              }}>삭제</button>
             </div>
          )
        })
      }

      <input  onChange={(e)=>{ 
        입력값변경(e.target.value);
        
      }} />
      <button onClick={()=>{
             let copy=[...글제목];
             copy.splice(0, 0, 입력값)
             글제목변경(copy)
              }}>등록</button>


      {
        modal == true ? <Modal  title={title} tg={tg}  글제목={글제목}/> : null
        
      }

    
  </div>
  );
}

// 컴포넌트 문법
// state 사용시 어려움 발생

// const Modal = ()=>{
//   return(
//     asdfsadf
//   )
// }


function Modal(props){
  return(

      <div className='modal'>
      <h4>{ 
      props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={props.tg}>글수정</button>
    </div>
    
  
  )
}

class Modal2 extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      name : 'kim',
      age : 20
    }
  }
  render(){
    return(
      <div>안녕 {this.state.age}
        <button onClick={()=>{
          this.setState({age:21})
        }}>버튼</button>
      </div>
    )
  }
}

export default App
