import {useState,useEffect} from "react";
import {NavLink} from "react-router-dom";

function Header(props){

        return(
        <div className="wrapper row1" style={{"background":"white","color":"black","box-shadow":"2px 2px 10px 1px rgba(0, 0, 0, 0.2)","z-index":"99"}}>
            <header id="header" className="hoc clear" >
                <div id="logo" className="fl_left">
                    <h1><NavLink to={"/"} >제주에 빠지다</NavLink></h1>
                </div>
                <nav id="mainav" className="fl_right">
                    <ul className="clear">
                        <li><NavLink to={"/jeju/find_list"}>전체검색</NavLink></li>
                        <li><a className="drop" href="#">제주 가볼만한 곳</a>
                            <ul>
                                <li><NavLink to={"/jeju/food_list"}>제주맛집</NavLink></li>
                                <li><NavLink to={"/jeju/location_list"}>제주 즐길거리</NavLink></li>
                            </ul>
                        </li>
                        <li><NavLink to={"/jeju/hotel_list"}>제주숙박</NavLink></li>
                        <li><NavLink to={"/jeju/car_list"}>렌트카</NavLink></li>
                        {/*<li><NavLink to={"/jeju/food_find"}>맛집검색</NavLink></li>*/}
                        <li><NavLink to={"/news/news_list"}>뉴스검색</NavLink></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header










