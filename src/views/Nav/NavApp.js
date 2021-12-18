import React from 'react'
import '../Scss/Nav.scss'
import {
    Link,NavLink
  } from "react-router-dom";

class NavApp extends React.Component{


    render(){
        return (
            <div class="topnav">
                <NavLink to="/"  activeClassName='active' exact='true'>Home</NavLink>
                <NavLink to="/todo"  activeClassName='active'>Todo</NavLink>
                <NavLink to="/about" activeClassName='active'>About</NavLink>
                <NavLink to="/users" activeClassName='active'>Users</NavLink>
            </div>
        )
    }
}

export default NavApp