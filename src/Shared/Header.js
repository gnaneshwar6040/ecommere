import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Header(){

    let count = useSelector(state => state.counter)
    
    var [navClassList, setnavClassList]=useState("collapse navbar-collapse")
    var isNAvShowing=false

    function handleNavToggle(){
        if(isNAvShowing==false){
            isNAvShowing=true
            setnavClassList("navbar-collapse")
        }
        else{
            isNAvShowing=false
            setnavClassList("collapse navbar-collapse")
        }
    }
    return(
        <nav className="navbar shadow mt-4 navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand">
                    <img src="https://www.softwareschool.co/static/media/tl6.2441b21d3acc37b35ce6.png" width="150px" />
                 </a>
            </div>
             <button className="navbar-toggler" onClick={event => handleNavToggle()}>
                <span className="navbar-toggler-icon"></span>
            </button>
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
                    <li className="nav-item"><a href="/Products" className="nav-link">Products</a></li>
                    <li className="nav-item"><a href="/ProfileUpdate" className="nav-link">ProfileUpdate</a></li>
                    <li className="nav-item"><a href="/productsData" className="nav-link">ReadData</a></li>                                      
                    <li className="nav-item"><a href="/users-List" className="nav-link">Users</a></li>
                    <li className="nav-item"><a href="/Icons" className="nav-link">Icons</a></li>
                    <li className="nav-item"><a href="/Layout" className="nav-link">Layout</a></li>
                    <li className="nav-item"><a href="/Redux" className="nav-link">Redux:{count}</a></li>
                    <li className="nav-item"><a href="/Login" className="nav-link">Login</a></li>
                    <li className="nav-item"><a href="/Create-Account" className="nav-link">SignUP</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;