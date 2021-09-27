import { useEffect, useState } from "react";

//useEffect 실습
const App2 = ()=> {
  const [search,setSearch] = useState(0);
  const [data,setData] =  useState(0);


  const download = ()=>{
    let downloadData = 10;
    setData(downloadData);
  }

  //실행시점: (1)App2()함수가 최초 실행될때(마운트 될때), 
  //          (2)상태 변수가 변경될때(상태변수가 의존리스트에 등록되어 있을때), 
  //           첫번째 인자 callback, 두번째인자 dependency 의존리스트로 관리
  useEffect(()=>{ 
    console.log("userEffect 실행됨!");
    download();
  },[search]);


  return <div>
      <h1>하이</h1>
      <button onClick={()=>{setSearch()}}>검색하기</button><br></br>
      데이터: {data}
      <button onClick={()=>{setData(data+1)}}>더하기</button>
    </div>
}

export default App2;
