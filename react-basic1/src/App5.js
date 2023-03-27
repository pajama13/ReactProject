import {Component,Fragment} from "react";
import axios from "axios"

class App5 extends Component{
    constructor(props) {
        super(props);
        //state => 멤버변수 설정
        //이벤트 등록
        this.state={
            foodloca:[]
            //,fno:1
        }
    }

    componentDidMount() {
        //let _this=this
        axios.get("http://localhost/food/food_location_react").then(response=>{
            console.log(response.data)
            this.setState({foodloca:response.data})
            //setState => render 재호출(데이터 변경)
        })
    }
    render() {
        const html=this.state.foodloca.map(fl=>
            <div className="col-md-4">
                <div className="thumbnail">
                    <img src={fl.poster} style={{"width":"100%"}}/>
                    <div className="caption">
                        <p>{fl.title}</p>
                    </div>
                </div>
            </div>
        )
        return(
            <Fragment>
                <div className={"row"}>
                    {html}
                </div>
            </Fragment>
        )
    }
}

export default App5;