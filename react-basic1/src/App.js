import logo from './logo.svg';
import './App.css';
/*
    index.js => App 호출(<App/>), return 값 받기 => index.html <div id="root"></div>에 전달

    펑션 호출 방법(jsx형식=javascript+xml)
    function Con() { } => <Com/>

    문법
    xml형식
      -함수명/클래스명 => 첫자는 무조건 대문자
      -html 태그명은 무조건 소문자
      -html 제작 시 무조건 root태그 존재 필요 => 전체를 감싸는 1개의 태그 필요
        <div> => root태그
           <div>
             <h1></h1>
           </div>
           <div>
             <h3></h3>
           </div>
        </div>
      -속성명은 반드시 큰따옴표"" 사용
      -css 사용 시 <태그 className="">
      -태그 내부에 style 쓸 때 => <태그 style={{"속성":"값"}}>


    props 고정값
    state 변경값
*/
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
