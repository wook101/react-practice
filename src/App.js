//import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Sub from './Sub'

let name = "김동욱";
const age = 29;
const list = [1,2,3]

//object수정하기
const a={id:1,name:"홍길동",phone:"1111"}
const b={...a, name:"김동욱"}
console.log(b);


//map과 spread응용하기
const users=[
  {id:1,name:"이승우",phone:"1111"},
  {id:2,name:"김지연",phone:"2222"},
  {id:3,name:"우지호",phone:"3333"}
];
const updateUserDto = {id:2,name:"김동욱"};
const newUser = users.map((obj) => obj.id===updateUserDto.id ? {...obj, ...updateUserDto} : obj ); 
console.log("newUser", newUser);



//JSX문법
function App() {
  //useState
  //let num=0;
  const [num, setNumber] = useState(1);  //react에 hocks 라이브러리
  const add = ()=>{
    setNumber(num+1);   //리액트가 내부적으로 num값을 변경, setNumber를 호출하는 순간 return 내부가 모두 다시 그려져 랜더링 된다.
    console.log(num);
  };

  return <div>
      <div>안녕하세요! {name} 입니다.</div>
      <h1>나이는 {age}세 입니다.</h1>
      <hr/>
      <div>{list.map((n)=><h3 key={n}>번호{n}</h3>)}</div>
      <div>숫자:{num}</div>
      <button onClick={add}>더하기</button> 
      
    </div>
}

export default App;
