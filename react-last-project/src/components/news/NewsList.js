import {useState,useEffect} from "react";
import axios from "axios";


function NewsList(){
    const [newsList,setNewsList]=useState([])
    const [title,setTitle]=useState('제주') //디폴트값 지정

    //데이터 받기
    useEffect(()=>{
        axios.get("http://localhost/news/news_list_react",{
            params:{
                title:title
            }
        }).then(response=>{
            console.log(response.data)
            setNewsList(response.data)
        })
    },[])
    const dataChange=(e)=>{
        setTitle(e.target.value)
    }
    const dataKeyDown=(e)=>{
        axios.get("http://localhost/news/news_list_react", {
            params:{
                title:title
            }
        }).then(response=>{
            console.log(response.data)
            setNewsList(response.data)
        })
    }
    // const findData=()=>{
    //     axios.get("http://localhost/news/news_list_react", {
    //         params:{
    //             title:title
    //         }
    //     }).then(response=>{
    //         console.log(response.data)
    //         setNewsList(response.data)
    //     })
    // }
    //읽은 데이터 출력
    let html=newsList.map((news)=>
        <table className={"table news_table"}>
            <a href={news.link} target={"_blank"}>
                <tr>
                    <td>
                        <h3
                            style={{"color":"#2bb4ed","fontWeight":"bold","fontSize":"20px"}}
                            dangerouslySetInnerHTML={{__html:news.title}}>
                        </h3>
                    </td>
                </tr>
                <tr>
                    <td dangerouslySetInnerHTML={{__html:news.description}}></td>
                </tr>
                <tr>
                    <td className={"text-left"} style={{"color":"gray"}}>작성일&nbsp;&nbsp;{news.pubDate}</td>
                </tr>
                <hr style={{"border-bottom":"1px solid lightgray"}}/>
            </a>
        </table>
    )
    return(
        <div className="wrapper row3">
            <main className="hoc container clear">
                <div className="content">
                    <div id="gallery">
                        <figure>
                            <div style={{"margin":"20px 0","float":"left"}}>
                                <input type={"text"} size={"30"}  className={"input-sm find_input"}
                                       autoComplete={"off"} placeholder={'"'+title+'"에 대한 뉴스 검색결과'}
                                       style={{"float":"left","display":"inline-block"}}
                                       onKeyDown={dataKeyDown} onChange={dataChange}/>
                                {/*<input type={"button"} value="검색" className={"input-sm"} onClick={findData}/>*/}
                            </div>
                            {/*<input type={"text"} value={title} size={"30"} className={"input-sm"}
                                   onKeyDown={dataKeyDown} onChange={dataChange}/>*/}
                        </figure>
                        <table className={"table"}>
                            <tbody>
                            <tr>
                                <td style={{"padding":"0"}}>
                                    {html}
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    )
}
export default NewsList