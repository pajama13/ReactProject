import {useState,useEffect} from "react";
import {useParams} from "react-router";
import axios from "axios";

function CarDetail(){
    let {no}=useParams()
    const [carDetail,setCarDetail]=useState({})
    useEffect(()=>{
        axios.get("http://localhost/jeju/all_detail_before",{
            params:{
                no:no,
                type:4
            }
        }).then(response=>{
            console.log(response.data)
            setCarDetail(response.data)
        })
    },{})
    document.cookie="car"+parseInt(no)+"="+carDetail.car_IMAGE;
    return(
        <div className="wrapper row3">
            <main className="container clear detail_container" style={{"padding":"80px 0","margin":"0 auto","width":"1140px"}}>
                <table className="table" style={{"width":"40%","float":"left"}}>
                    <tr style={{"border":"0"}}>
                        <td>
                            <img src={carDetail.car_IMAGE} style={{"width":"100%","boxShadow":"0 2px 10px rgba(0,0,0,0.4)"}}/>
                        </td>
                    </tr>
                </table>
                <table className="table table_content" style={{"width":"55%","float":"right"}}>
                    <tr style={{"border":"0"}}>
                        <td className="td-line" width="20%" colSpan="2" style={{"padding":"10px 10px 40px 0"}}>
                            <h3 style={{"display":"inline","font-size":"32px"}}>{carDetail.car_NAME}</h3>&nbsp;
                        </td>
                    </tr>
                    <tr>
                        <th width="20%" className="text-center">이용요금</th>
                        <td className="td-line" width="80%">{carDetail.car_PRICE}원</td>
                    </tr>
                    <tr>
                        <th width="20%" className="text-center">구분</th>
                        <td className="td-line" width="80%">{carDetail.car_TYPE}</td>
                    </tr>
                    <tr>
                        <th width="20%" className="text-center">옵션1</th>
                        <td className="td-line" width="80%">{carDetail.car_OPTION1}</td>
                    </tr>
                    <tr>
                        <th width="20%" className="text-center">옵션2</th>
                        <td className="td-line" width="80%" >{carDetail.car_OPTION2}</td>
                    </tr>
                </table>
            </main>
        </div>
    )
}

export default CarDetail