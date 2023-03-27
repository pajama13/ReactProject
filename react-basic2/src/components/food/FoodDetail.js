import {Component, Fragment} from "react";
import {useState,useEffect} from "react";
import {useParams} from "react-router";
import axios from "axios";
import {NavLink} from "react-router-dom";

function FoodDetail(props){
    /* 받은 값은 setFoodDetail에 저장 */
    const [foodDetail,setFoodDetail]=useState({})
    let {fno}=useParams();
    useEffect(()=>{
        axios.get('http://localhost/food/food_detail_react',{
            params:{
                fno:fno
            }
        }).then(response=>{
            console.log(response.data)
            setFoodDetail(response.data)
        })
    },{})
    let poster=String(foodDetail.poster)
    const img=poster.split("^")
    let html=img.map(m=>
        <td><img src={m} style={{"width":"100%"}}/></td>
    )
    return(
        <Fragment>
            <div className={"row"}>
            <table className="table">
                <tr>
                    {html}
                </tr>
            </table>
            <div style={{"height":"10px"}}></div>
            <table class="table">
            <tbody>
                <tr>
                    <td width="20%" className="text-center" colspan="2">
                    <h3 style={{"display":"inline"}}>{foodDetail.name}</h3>&nbsp;
                    <h3 style={{"display":"inline","color":"orange"}}>{foodDetail.score}</h3>
                </td>
                </tr>
            <tr>
                <th width="20%" className="text-center">주소</th>
            <td width="80%">{foodDetail.address}</td>
            </tr>
                <tr>
                    <th width="20%" className="text-center">전화</th>
                <td width="80%" >{foodDetail.tel}</td>
            </tr>
                <tr>
                    <th width="20%" className="text-center">음식종류</th>
                <td width="80%" >{foodDetail.type}</td>
            </tr>
                <tr>
                    <th width="20%" className="text-center">가격대</th>
                <td width="80%" >{foodDetail.price}</td>
            </tr>
                <tr>
                    <th width="20%" className="text-center">주차</th>
                <td width="80%" >{foodDetail.parking}</td>
            </tr>
                <tr>
                    <th width="20%" className="text-center">영업시간</th>
                    <td width="80%" >{foodDetail.time}</td>
            </tr>
                <tr>
                    <th width="20%" class="text-center">메뉴</th>
                <td width="80%" >{foodDetail.menu}</td>
            </tr>
                <tr>
                    <td colspan="2" className="text-right">
                    <NavLink to={"/food/food_list/"+foodDetail.cno} className={"btn btn-sm btn-info"}>목록</NavLink>
                </td>
            </tr>
            </tbody>
            </table>
            </div>
        </Fragment>
    )
}
export default FoodDetail