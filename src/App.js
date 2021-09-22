//import logo from './logo.svg';
import './App.css';

let name = "김동욱";
const age = 29;
const list = [1,2,3]

//object수정하기
const a={id:1,name:"홍길동",phone:"1111"}
const b={...a, name:"김동욱"}
console.log(b);


//JSX문법
function App() {
  return <div>
      <div>안녕하세요! {name} 입니다.</div>
      <h1>나이는 {age}세 입니다.</h1>
      <hr/>
      <div>{list.map((n)=><h3 key={n}>번호{n}</h3>)}</div>
    </div>
}

export default App;
