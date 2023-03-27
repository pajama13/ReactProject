import {Component,Fragment} from "react";
//Class형태, Function형태 (state => Hooks)
//1개의 기능이 1개의 컴포넌트가 됨 => 게시판 기능, 댓글 기능, 우편번호 검색 등
class App1 extends Component{
    constructor(props){ //생성자
        super(props);
    }
    /*
        생성자 함수
        1. 변수 선언
        2. 이벤트 등록
    */
    componentDidMount() {
        //Vue.js에서 mounted:function()과 같은 것
    }
    
    render() {
        //화면UI 만드는 곳 => html 작성
        //괄호를 내릴 땐 좌측 괄호가 무조건 코드 옆에 있어야 함
        //index.js render()에서 <App1 /> 호출 후 return 값 받아서 #root.innerHTML 넣기
        return(
            <Fragment>
            <div>
                <h1 style={{"color":"red"}}>안녕! 리액트!</h1>
                <h3>안녕! 리액트!</h3>
            </div>
            <div>
                <h1>안녕! 리액트!</h1>
                <h3>안녕! 리액트!</h3>
            </div>
            </Fragment>
        )
    }
}

export default App1; //끝나면 반드시 export 작성
