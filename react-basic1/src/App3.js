import {Component,Fragment} from "react";
class App3 extends Component{
    //props는 index.js에서 <파일명 변수명={값}> 부분을 받아오는 것
    constructor(props) {
        super(props);
    }

    //영화진흥원 실시간 예매율
    render() {
        const html=this.props.movie.map((m)=>
            <tr>
                <td className={"text-center"}>{m.rank}</td>
                <td className={"text-center"}>
                    <img src={'https://www.kobis.or.kr'+m.thumbUrl} style={{"width":"30px","height":"30px"}}/>
                </td>
                <td>{m.movieNm}</td>
                <td className={"text-center"}>{m.genre}</td>
                <td className={"text-center"}>{m.director}</td>
                <td className={"text-center"}>{m.watchGradeNm}</td>
            </tr>
        )
        return(
            <div className={"row"}>
                <table className={"table"}>
                    <thead>
                    <tr>
                        <th className={"text-center"}>순위</th>
                        <th></th>
                        <th className={"text-center"}>영화명</th>
                        <th className={"text-center"}>장르</th>
                        <th className={"text-center"}>감독</th>
                        <th className={"text-center"}>등급</th>
                    </tr>
                    </thead>
                    <tbody>
                    {html}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default App3;