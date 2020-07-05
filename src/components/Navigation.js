import React from "react";
import {Link} from "react-router-dom";
import "./Navigation.css"

function Navigation () {
    //a 태그는 html을 새로고침한다
    //react에서 SPA로써 새로고침없이 화면전환만 원할 경우 => react-router-dom의 link 메소드 사용하기! 
    return <div className="navi">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
    </div>
}

export default Navigation