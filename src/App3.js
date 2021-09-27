
import {useState, useMemo} from 'react'
//useMemo실습
const App = ()=>{
    const [list, setList] = useState([1,2,3,4]);
    const [str, setStr] = useState("abc");
    const addListSum = () =>{
        let ret=0;
        list.forEach(n=>ret+=n);
        console.log('리스트 합 실행');
        return ret;
    }

    const addResult = useMemo(()=>addListSum,[list])

    return <div>
        <button onClick={()=>setList([...list,100])}>리스트 더하기</button><br></br>
        합계:{addResult()}
        <button onClick={()=>{setStr("cbd")}}>문자열 변경</button><br></br>
        문자열:{str}
    </div>
}


export default App;