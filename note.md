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
1.concat   
a=[1,2,3]   
b=a.concat(4)    
//a-[1,2,3]
//b-[1,2,3,4]   
   
2.filter   
3.   
4.   
5.spread 연산(...변수)   
a=[1,2,3]   
b=[...a]
b.push(4)  
//a-[1,2,3]
//b-[1,2,3,4]   

