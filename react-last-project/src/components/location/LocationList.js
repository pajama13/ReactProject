import {useState,useEffect} from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";

function LocationList(){
    const [locationList,setLocationList]=useState([])
    const [curpage,setCurpage]=useState(1)
    const [totalpage,setTotalpage]=useState(0)
    const [startPage,setStartPage]=useState(0)
    const [endPage,setEndPage]=useState(0)
    useEffect(()=>{
        axios.get("http://localhost/jeju/location_list_react",{
            params:{
                page:curpage
            }
        }).then(response=>{
            console.log(response.data)
            setLocationList(response.data)
        })
    },[])
    useEffect(()=>{
        axios.get("http://localhost/jeju/location_page_react",{
            params:{
                page:curpage
            }
        }).then(response=>{
            console.log(response.data)
            setTotalpage(response.data.totalpage)
            setCurpage(response.data.curpage)
            setStartPage(response.data.startPage)
            setEndPage(response.data.endPage)
        })
    },{})
    //이벤트 처리
    const pages=(page)=>{
        axios.get("http://localhost/jeju/location_list_react",{
            params:{
                page:page
            }
        }).then(response=>{
            console.log(response.data)
            setLocationList(response.data)
        })
        axios.get("http://localhost/jeju/location_page_react",{
            params:{
                page:page
            }
        }).then(response=>{
            console.log(response.data)
            setTotalpage(response.data.totalpage)
            setCurpage(response.data.curpage)
            setStartPage(response.data.startPage)
            setEndPage(response.data.endPage)
        })
    }
    const pageChange=(page)=>{
        pages(page)
    }
    const pagePrev=(page)=>{
        pages(startPage-1)
    }
    const pageNext=(page)=>{
        pages(endPage+1)
    }
    let html=locationList.map((location,index)=>
        <li className={index%4==0?'one_quarter first':'one_quarter'} style={{"boxShadow":"0 2px 10px rgba(0,0,0,0.3"}}>
            <NavLink to={"/jeju/location_detail/"+location.no}>
                <img src={location.poster} style={{"width":"248px","height":"248px"}}/>
                <p style={{"textAlign":"center"}}>{location.title}</p>
            </NavLink>
        </li>
    )
    let row=[]
    if(startPage>1)
    {
        //배열에 추가
        row.push(<li><a href="#" onClick={()=>pagePrev()}>&laquo; 이전</a></li>)
    }
    for(let i=startPage;i<=endPage;i++)
    {
        if(i==curpage)
        {
            row.push(<li className="current"><a href={"#"} onClick={()=>pageChange(i)}>{i}</a></li>)
        }
        else
        {
            row.push(<li><a href={"#"} onClick={()=>pageChange(i)}>{i}</a></li>)
        }
    }
    if(endPage<totalpage)
    {
        //배열에 추가
        row.push(<li><a href="#" onClick={()=>pageNext()}>다음 &raquo;</a></li>)
    }
    return(
        <div className="wrapper row3">
            <main className="hoc container clear">
                <div className="content">
                    <div id="gallery">
                        <figure>
                            <header className="heading">이번 제주는 여기 어때요?</header>
                            <ul className="nospace clear">
                                {html}
                            </ul>
                        </figure>
                    </div>
                    <nav className="pagination">
                        <ul>
                            {row}
                        </ul>
                    </nav>
                </div>
                <div className="clear"></div>
            </main>
        </div>
    )
}
export default LocationList