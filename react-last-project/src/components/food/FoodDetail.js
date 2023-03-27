import {useState,useEffect} from "react";
import {useParams} from "react-router";
import axios from "axios";
/* global kakao*/
function FoodDetail(props)
{
    let {no}=useParams()
    let type=1
    const [foodDetail,setFoodDetail]=useState({})
    useEffect(()=>{
        axios.get("http://localhost/jeju/all_detail_before",{
            params:{
                no:no,
                type:type
            }
        }).then(response=>{
            console.log(response.data)
            setFoodDetail(response.data)
        })
    },{})
    document.cookie="food"+parseInt(no)+"="+foodDetail.poster;
/*    useEffect(()=>{
        const script=document.createElement("script")
        script.async=true //비동기화
        script.src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=32c8b981048bb9ecf1ccc44705676320&libraries=services"
        document.head.appendChild(script)
        script.onload=()=> {
            var mapContainer = document.getElementById('map'), // 지도를 표시할 div
                mapOption = {
                    center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
                    level: 3 // 지도의 확대 레벨
                };

            // 지도를 생성합니다
            var map = new kakao.maps.Map(mapContainer, mapOption);

            // 주소-좌표 변환 객체를 생성합니다
            var geocoder = new kakao.maps.services.Geocoder();

            // 주소로 좌표를 검색합니다
            geocoder.addressSearch(foodDetail.addr2, function (result, status) {

                // 정상적으로 검색이 완료됐으면
                if (status === kakao.maps.services.Status.OK) {

                    var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                    // 결과값으로 받은 위치를 마커로 표시합니다
                    var marker = new kakao.maps.Marker({
                        map: map,
                        position: coords
                    });

                    // 인포윈도우로 장소에 대한 설명을 표시합니다
                    var infowindow = new kakao.maps.InfoWindow({
                        content: '<div style={{"width":"150px","text-align":"center","padding":"6px 0"}}>'+foodDetail.title+'</div>'
                    });
                    infowindow.open(map, marker);

                    // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                    map.setCenter(coords);
                }

            })
        }
    },{})*/
    return(
        <div className="wrapper row3">
        <main className="container clear detail_container" style={{"padding":"80px 0","margin":"0 auto","width":"1140px"}}>
            <table className="table" style={{"width":"40%","float":"left"}}>
                <tr style={{"border":"0"}}>
                    <td>
                        <img src={foodDetail.poster} style={{"width":"100%","boxShadow":"0 2px 10px rgba(0,0,0,0.4)"}}/>
                    </td>
                </tr>
            </table>
            <table className="table table_content" style={{"width":"55%","float":"right"}}>
            <tr style={{"border":"0"}}>
                <td className="td-line" width="20%" colSpan="2" style={{"padding":"10px 10px 40px 0"}}>
                <h3 style={{"display":"inline","font-size":"32px"}}>{foodDetail.title}</h3>&nbsp;
            </td>
            </tr>
            <tr>
                <th width="20%" className="text-center">주소</th>
                <td className="td-line" width="80%">{foodDetail.addr}</td>
            </tr>
            <tr>
                <th width="20%" className="text-center">전화</th>
                <td className="td-line" width="80%">{foodDetail.tel}</td>
            </tr>
            <tr>
                <th width="20%" className="text-center">음식종류</th>
                <td className="td-line" width="80%">{foodDetail.type}</td>
            </tr>
            <tr>
                <th width="20%" className="text-center">주차</th>
                <td className="td-line" width="80%" >{foodDetail.parking}</td>
            </tr>
            <tr>
                <th width="20%" className="text-center">영업시간</th>
                <td className="td-line" width="80%" >{foodDetail.time}</td>
            </tr>
            <tr>
                <th width="20%" className="text-center">메뉴</th>
                <td className="td-line" width="80%" >{foodDetail.menu}</td>
            </tr>
            </table>
        </main>
        </div>
    )
}

export default FoodDetail