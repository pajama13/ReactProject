import {useState, useEffect, Fragment} from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";


function Home (){
    const [foodTop,setFoodTop]=useState([])
    const [hotelTop,setHotelTop]=useState([])

    useEffect( ()=> {
        axios.get("http://localhost/jeju/food_top3").then(response=>{
            console.log(response.data)
            setFoodTop(response.data)
        })
    }, [])

    useEffect( ()=> {
        axios.get("http://localhost/jeju/hotel_top3").then(response=>{
            console.log(response.data)
            setHotelTop(response.data)
        })
    }, [])
    let html1=hotelTop.map((hotel)=>
        <li className="one_third">
            <article><NavLink to={"/jeju/hotel_detail/"+hotel.hno}><img src={hotel.hotel_image} style={{"width":"100%"}}/></NavLink>
                <h6 className="heading">{hotel.name}</h6>
            </article>
        </li>
    )
    let html2=foodTop.map((food)=>
        <li className="one_third">
            <article><NavLink to={"/jeju/food_detail/"+food.no}><img src={food.poster} style={{"width":"100%"}}/></NavLink>
                <h6 className="heading">{food.title}</h6>
            </article>
        </li>
    )
    //검색
/*    const [word,setWord]=useState('')
    const dataKeyDown=(e)=>{
        if(e.keyCode==13)
        {
            axios.get("http://localhost/jeju/find_list_react",{
                params:{ //매개변수명이 Controller에서 받는 매개변수명과 같아야 함!
                    word:word
                }
            })
        }
    }*/

    return (
        <Fragment>
            <div className="bgded" style={{"backgroundImage":"url('images/jeju2.png')","width":"1200px","height":"495px","margin":"0 auto"}}>
                <div id="pageintro" className="hoc clear">
                    <article>
                        <h3 className="heading" style={{"fontSize":"80px"}}>제주의 계절을 느껴보세요</h3>
                        {/*<input type={"text"} size="60"
                               style={{"margin":"0 auto","border":"0","height":"50px","borderRadius":"60px","color":"black","padding":"0 30px"}}/>*/}
                    </article>
                </div>
            </div>

            <div className="bgded light" style={{"background":"white"}}>
                <section id="services" className="hoc container clear">
                    <h3>머물기 좋은 제주 호텔</h3>
                    <ul className="nospace group elements elements-three" style={{}}>

                        {html1}

                    </ul>
                </section>
            </div>

            <div className="bgded light" style={{"background":"white","margin":"0 0 50px 0"}}>
                <section id="services" className="hoc container clear">
                    <h3 style={{}}>꼭 가봐야할 제주 맛집</h3>
                    <ul className="nospace group elements elements-three" style={{}}>

                        {html2}

                    </ul>
                </section>
            </div>
        </Fragment>
    )
}

export default Home;