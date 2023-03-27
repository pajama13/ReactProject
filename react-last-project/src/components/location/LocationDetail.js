import {useState,useEffect} from "react";
import {useParams} from "react-router";
import axios from "axios";
function LocationDetail(props)
{
    let {no}=useParams()
    let type=2 //추가
    const [locationDetail,setLocationDetail]=useState({})
    useEffect(()=>{
        //원본
/*        axios.get("http://localhost/jeju/location_detail_react",{
            params:{
                no:no
            }
        }).then(response=>{
            console.log(response.data)
            setLocationDetail(response.data)
        })*/
        //추가
        axios.get("http://localhost/jeju/all_detail_before",{
            params:{
                no:no,
                type:type
            }
        }).then(response=>{
            console.log(response.data)
            setLocationDetail(response.data)
        })
    },{})
    document.cookie="location"+parseInt(no)+"="+locationDetail.poster;
    return(
        <div className="wrapper row3">
            <main className="container clear detail_container" style={{"padding":"80px 0","margin":"0 auto","width":"1140px"}}>
                <table className="table" style={{"width":"40%","float":"left"}}>
                    <tr style={{"border":"0"}}>
                        <td>
                            <img src={locationDetail.poster} style={{"width":"100%","boxShadow":"0 2px 10px rgba(0,0,0,0.4)"}}/>
                        </td>
                    </tr>
                </table>
                <table className="table table_content" style={{"width":"55%","float":"right"}}>
                    <tr style={{"border":"0"}}>
                        <td className="td-line" width="20%" colSpan="2" style={{"padding":"10px 10px 40px 0"}}>
                            <h3 style={{"display":"inline","font-size":"32px"}}>{locationDetail.title}</h3>&nbsp;
                        </td>
                    </tr>
                    <tr>
                        <th width="20%" className="text-center">소개</th>
                        <td className="td-line" width="80%">{locationDetail.content}</td>
                    </tr>
                    <tr>
                        <th width="20%" className="text-center">이용요금</th>
                        <td className="td-line" width="80%">{locationDetail.price}원</td>
                    </tr>
                    <tr>
                        <th width="20%" className="text-center">주소</th>
                        <td className="td-line" width="80%">{locationDetail.addr}</td>
                    </tr>
                    <tr>
                        <th width="20%" className="text-center">구분</th>
                        <td className="td-line" width="80%" >{locationDetail.type}</td>
                    </tr>
                </table>
            </main>
        </div>
    )
}

export default LocationDetail