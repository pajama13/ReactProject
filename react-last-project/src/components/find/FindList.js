import {useState,useEffect} from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";

function FindList(){
    const [type,setType]=useState(1)
    const [word,setWord]=useState('제주')
    //const [ss,setSs]=useState('제주') //useState에서 값초기화, input에 value=ss 넣기
    const [fdata,setFdata]=useState([])
    const [curpage,setCurpage]=useState(1)
    const [totalpage,setTotalpage]=useState(0)
    //const [count,setCount]=useState(0)

    useEffect(()=>{
        axios.get("http://localhost/jeju/find_list_react",{
            params:{ //매개변수명이 Controller에서 받는 매개변수명과 같아야 함!
                page:curpage,
                type:type,
                word:word
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
            axios.get("http://localhost/jeju/find_list_react",{
                params:{ //매개변수명이 Controller에서 받는 매개변수명과 같아야 함!
                    page:curpage,
                    type:type,
                    word:word
                }
            }).then(response=>{
                console.log(response.data)
                setFdata(response.data)
                setCurpage(response.data[0].curpage)
                setTotalpage(response.data[0].totalpage)
            }).catch(response=>{
                setTotalpage(0)
            })
        }
    }
    const typeChange=(e)=>{
        setType(e.target.value) //input 입력값 받기
        setWord('')
    }
    const dataChange=(e)=>{
        setWord(e.target.value) //input 입력값 받기
    }
/*    const findData=()=>{
        //alert(ss)
        setCurpage(1)
        axios.get("http://localhost/jeju/find_list_react",{
            params:{ //매개변수명이 Controller에서 받는 매개변수명과 같아야 함!
                page:curpage,
                type:type,
                word:word
            }
        }).then(response=>{
            console.log(response.data)
            setFdata(response.data)
            setCurpage(response.data[0].curpage)

            setTotalpage(response.data[0].totalpage)
        }).catch(response=>{
            setTotalpage(0)
        })
    }*/
    const prev=()=>{
        const prevPage = curpage>1?curpage-1:curpage;
        setCurpage(prevPage);
        axios.get("http://localhost/jeju/find_list_react",{
            params:{ //매개변수명이 Controller에서 받는 매개변수명과 같아야 함!
                page:prevPage,
                type:type,
                word:word
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
        axios.get("http://localhost/jeju/find_list_react",{
            params:{ //매개변수명이 Controller에서 받는 매개변수명과 같아야 함!
                page:nextPage,
                type:type,
                word:word
            }
        }).then(response=>{
            console.log(response.data)
            setFdata(response.data)
            setTotalpage(response.data[0].totalpage)
        })
    }
    const types=["","food","location","hotel","car"]
    let html=fdata.map((data,index)=>
        <li className={index%4==0?'one_quarter first':'one_quarter'}
            style={{"boxShadow":"0 2px 10px rgba(0,0,0,0.3","width":"248px","height":"303px"}}>

            <NavLink to={"/jeju/"+types[type]+"_detail/"+data.no}>
                <img src={data.poster} style={{"width":"248px","height":"248px"}}/>
                <p style={{"textAlign":"center"}}>{data.title}</p>
            </NavLink>
        </li>
    )
    return(
        <div className="wrapper row3">
            <main className="hoc container clear">
                <div className="content">
                    <div id="gallery">
                        <select name={type} onChange={typeChange} className={"find_input"} style={{"margin":"0 0 10px 0"}}>
                            <option selected>검색구분</option>
                            <option value={"1"}>제주맛집</option>
                            <option value={"2"}>제주즐길거리</option>
                            <option value={"3"}>제주호텔</option>
                            <option value={"4"}>제주렌트카</option>
                        </select>
                        <figure>


                            <div style={{"margin":"20px 0","float":"left"}}>
                                <input type={"text"} value={word} size={"30"} className={"input-sm find_input"}
                                    style={{"float":"left","display":"inline-block"}}
                                    onKeyDown={dataKeyDown} onChange={dataChange}/>
                                {/*<input type={"button"} value="검색" className={"input-sm find_btn"} onClick={findData} style={{"float":"left"}}/>*/}
                            </div>

                            <ul className="nospace clear">
                                {html}
                            </ul>
                        </figure>
                    </div>

                </div>
                <div className={"text-center pagination"}>
                    <button className={"btn btn-sm btn-primary page_btn"} onClick={prev} >이전</button>
                    {curpage}&nbsp;&nbsp;/&nbsp;&nbsp;{totalpage}
                    <button className={"btn btn-sm btn-primary page_btn"} onClick={next}>다음</button>
                </div>
                <div className="clear"></div>
            </main>
        </div>
    )
}

export default FindList