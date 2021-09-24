import { useEffect, useState } from "react";
import Sub from './Sub';
import {num} from './Sub';
//useEffect 실습
const App2 = ()=> {

  const [data,setData] =  useState(0);

  useEffect(()=>{ //실행시점: App2()함수가 최초 실행될때(마운트 될때), 첫번째 인자 callback
    console.log("userEffect 실행됨!");
  });


  return <div>
      <h1>하이</h1>
      데이터: {data}
      <Sub/>
      서브 컴포넌트에서 가져온 num: {num}
    </div>
}

export default App2;
