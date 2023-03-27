import {useState,useEffect} from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";

function FoodFind(){
    const [ss,setSs]=useState('제주') //useState에서 값초기화, input에 value=ss 넣기
    const [fdata,setFdata]=useState([]);
    const [curpage,setCurpage]=useState(1);
    const [totalpage,setTotalpage]=useState(0);

    useEffect(()=>{
        axios.get("http://localhost/jeju/find_react",{
            params:{ //매개변수명이 Controller에서 받는 매개변수명과 같아야 함!
                page:curpage,
                title:ss
            }
        }).then(response=>{
            console.log(response.data)
            setFdata(response.data)
            setCurpage(response.data[0].curpage)
            setTotalpage(response.data[0].totalpage)
        })
    },[])
    const dataKeyDown=(e)=>{
        setCurpage(1)
        if(e.keyCode==13)
        {
            axios.get("http://localhost/jeju/find_react",{
                params:{ //매개변수명이 Controller에서 받는 매개변수명과 같아야 함!
                    page:curpage,
                    title:ss
                }
            }).then(response=>{
                console.log(response.data)
                setFdata(response.data)
                setCurpage(response.data[0].curpage)
                setTotalpage(response.data[0].totalpage)
            })
        }
    }
    const dataChange=(e)=>{
        setSs(e.target.value) //input 입력값 받기
     }
    const findData=()=>{
        //alert(ss)
        setCurpage(1)
        axios.get("http://localhost/jeju/find_react",{
            params:{ //매개변수명이 Controller에서 받는 매개변수명과 같아야 함!
                page:curpage,
                title:ss
            }
        }).then(response=>{
            console.log(response.data)
            setFdata(response.data)
            setCurpage(response.data[0].curpage)
            setTotalpage(response.data[0].totalpage)
        })
    }
    const prev=()=>{
        const prevPage = curpage>1?curpage-1:curpage;
        setCurpage(prevPage);
        axios.get("http://localhost/jeju/find_react",{
            params:{ //매개변수명이 Controller에서 받는 매개변수명과 같아야 함!
                page:prevPage,
                title:ss
            }
        }).then(response=>{
            console.log(response.data)
            setFdata(response.data)
            setTotalpage(response.data[0].totalpage)
        })
    }
    const next=()=>{
        const nextPage=curpage<totalpage?curpage+1:curpage
        setCurpage(nextPage);
        axios.get("http://localhost/jeju/find_react",{
            params:{ //매개변수명이 Controller에서 받는 매개변수명과 같아야 함!
                page:nextPage,
                title:ss
            }
        }).then(response=>{
            console.log(response.data)
            setFdata(response.data)
            setTotalpage(response.data[0].totalpage)
        })
    }

    let html=fdata.map((food,index)=>
        <li className={index%4==0?'one_quarter first':'one_quarter'} /*style={{"boxShadow":"0 2px 10px rgba(0,0,0,0.3"}}*/>
            <NavLink to={"/jeju/food_detail/"+food.no}>
                <img src={food.poster}/>
                <p style={{"textAlign":"center"}}>{food.title}</p>
            </NavLink>
        </li>
    )
    return(
        <div className="wrapper row3">
            <main className="hoc container clear">
                <div className="content">
                    <div id="gallery">
                        <figure>
                            <header className="heading inline">
                                <input type={"text"} value={ss} size={"30"} className={"input-sm"} onKeyDown={dataKeyDown} onChange={dataChange}/>
                                <input type={"button"} value="검색" className={"input-sm"} onClick={findData}/>
                            </header>
                            <ul className="nospace clear">
                                {html}
                            </ul>
                        </figure>
                    </div>
                    
                </div>
                <div className={"text-center"}>
                    <button className={"btn btn-sm btn-primary"} onClick={prev} >이전</button>
                    {curpage} / {totalpage}
                    <button className={"btn btn-sm btn-primary"} onClick={next}>다음</button>
                </div>
                <div className="clear"></div>
            </main>
        </div>
    )
}

export default FoodFind