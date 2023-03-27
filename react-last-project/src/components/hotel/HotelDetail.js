import {useState,useEffect} from "react";
import {useParams} from "react-router";
import axios from "axios";

function HotelDetail(){
    let {no}=useParams()
    const [hotelDetail,setHotelDetail]=useState({})
    useEffect(()=>{
        axios.get("http://localhost/jeju/all_detail_before",{
            params:{
                no:no,
                type:3
            }
        }).then(response=>{
            console.log(response.data)
            setHotelDetail(response.data)
        })
    },{})
    document.cookie="hotel"+parseInt(no)+"="+hotelDetail.hotel_image;
    return(
        <div className="wrapper row3">
            <main className="container clear detail_container" style={{"padding":"80px 0","margin":"0 auto","width":"1140px"}}>
                <table className="table" style={{"width":"40%","float":"left"}}>
                    <tr style={{"border":"0"}}>
                        <td>
                            <img src={hotelDetail.hotel_image} style={{"width":"100%","boxShadow":"0 2px 10px rgba(0,0,0,0.4)"}}/>
                        </td>
                    </tr>
                </table>
                <table className="table table_content" style={{"width":"55%","float":"right"}}>
                    <tr style={{"border":"0"}}>
                        <td className="td-line" width="20%" colSpan="2" style={{"padding":"10px 10px 40px 0"}}>
                            <h3 style={{"display":"inline","font-size":"32px"}}>{hotelDetail.name}</h3>&nbsp;
                        </td>
                    </tr>
                    <tr>
                        <th width="20%" className="text-center">등급</th>
                        <td className="td-line" width="80%">{hotelDetail.grade}</td>
                    </tr>
                    <tr>
                        <th width="20%" className="text-center">주소</th>
                        <td className="td-line" width="80%">{hotelDetail.addr}</td>
                    </tr>
                    <tr>
                        <th width="20%" className="text-center">이용시간</th>
                        <td className="td-line" width="80%">{hotelDetail.time}</td>
                    </tr>
                </table>
            </main>
        </div>
    )
}

export default HotelDetail