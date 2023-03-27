import {Component,Fragment} from "react";
import {NavLink} from "react-router-dom";
class Header extends Component{
    render() {
        return(
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <NavLink className="navbar-brand" to={"/"}>리액트 연습</NavLink>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="active"><NavLink to={"/"}>홈</NavLink></li>
                        <li className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown" href="#">서울여행
                                <span className="caret"></span></a>
                            <ul className="dropdown-menu">
                                <li><NavLink to={"/seoul/location"}>명소</NavLink></li>
                                <li><NavLink to={"/seoul/nature"}>자연</NavLink></li>
                                <li><NavLink to={"/seoul/shop"}>쇼핑</NavLink></li>
                            </ul>
                        </li>
                        <li><a href="#">커뮤니티</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header;