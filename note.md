package.json: 프로젝트를 관리하는 설정파일   
npm start명령을 실행 할 경우 package.json의 scripts내에 start:react-scripts start는 src의 index.js가 실행.   
   
   
index.js의 정의한 ReactDOM.render(arg1,arg2)   
arg1를 (<App/>), JSX문법   
arg2에 그린다. ex)document.getElementById('root'), "/public/index.html"에서 dom을 찾아 랜더링 한다.    
   
   
React엔진 - 데이터 변경을 감지해서 UI를 랜더링함   
실행과정 index.html - SPA(single page application)   
   
[JSX문법]   
함수App return할 경후 하나의 Dom만 리턴 가능하다.