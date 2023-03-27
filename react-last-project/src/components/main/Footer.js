import {useState, useEffect, Fragment} from "react";
import axios from "axios";
function Footer(){
    const [news,setNews]=useState([])
    useEffect(()=>{
        axios.get("http://localhost/news/news_recent_react",{
        }).then(response=>{
            console.log(response.data)
            setNews(response.data)
        })
    },[])
    //쿠키
    let cookie=document.cookie.split(";")
    let cc=[]
    for(let i=cookie.length-1;i>=0;i--)
    {
        let a=cookie[i]
        let b=a.substring(a.indexOf("=")+1)
        cc.push(b.trim())
    }
    let m=cc.map((mm,index)=>
        <li style={{"width":"20%"}}>
            <a className="" href="#">
                <img src={mm} alt="" style={{"width":"100px","height":"100px"}}/>
            </a>
        </li>
    )
    let news7=news.map((news)=>
        <li style={{"padding":"0","margin":"0"}}>
            <a href={news.link} target={"_blank"}>
                <tr>
                    <td style={{"padding":"0","color":"gray"}}>
                        <h3 dangerouslySetInnerHTML={{__html:news.title}}>
                        </h3>
                    </td>
                </tr>
            </a>
        </li>
    )

    return(
        <Fragment>
        <div className="bgded row4" style={{"background":"white","borderTop":"1px solid lightgray"}}>
            <footer id="footer" className="hoc clear">
                <div className="one_half first">
                    <h6 className="heading">최신 뉴스보기</h6>
                    <ul className="nospace linklist">
                        {news7}
                    </ul>
                </div>
                <div className="one_half">
                    <h6 className="heading">최근 방문기록</h6>
                    <ul className="nospace clear latestimg">
                        {m}
                    </ul>
                </div>
            </footer>
        </div>
        <div className="wrapper row5">
            <div id="copyright" className="hoc clear">
                <p className="fl_left">Copyright &copy; 2023-03-23 강남 쌍용교육센터 <a href="#">박지민</a></p>
                <p className="fl_right">Template by <a href="https://www.os-templates.com/"s
                                                      >https://github.com/pajama13</a></p>
            </div>
        </div>
        </Fragment>
    )
}

export default Footer