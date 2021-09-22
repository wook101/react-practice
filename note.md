package.json: 프로젝트를 관리하는 설정파일   
npm start명령을 실행 할 경우 package.json의 scripts내에 start:react-scripts start는 src의 index.js가 실행.   
   
   
index.js의 정의한 ReactDOM.render(arg1,arg2)   
arg1를 (<App/>), JSX문법   
arg2에 그린다. ex)document.getElementById('root'), "/public/index.html"에서 dom을 찾아 랜더링 한다.    
   
   
React엔진 - 데이터 변경을 감지해서 UI를 랜더링함   
실행과정 index.html - SPA(single page application)   
   
[JSX문법]   
함수App return할 경우 하나의 Dom만 리턴 가능하다.

자바스크립트의 변수 선언 let, const
JSX에서는 IF문 사용불가, 하지만 3항연산 가능

[깊은복사 함수](불변함수)   
1.concat  //추가하기   
a=[1,2,3]   
b=a.concat(4)    
//b [1,2,3,4]   
   
2.filter //삭제하기   
b=a.filter((n)=>{return n!==1}); //filter의 인자에는 함수가 들어감, 함수의 return값은 bool이며 true만 걸러낸다.   
//b [2,3]    
      
3.slice //잘라내기   
b=a.slice(0,2)   
//b [1,2]     
       

4.map //반복하기, forEach와 같으나 리턴값이 있음  
forEach //반복하기, void임 리턴값이 없음  
a.forEach((n)=>{});   
b=a.map((n)=>{n});   
//b [1,2,3]   
   
5.spread 연산(...변수)   
b=[...a]   
b.push(4)  
//b [1,2,3,4]   

