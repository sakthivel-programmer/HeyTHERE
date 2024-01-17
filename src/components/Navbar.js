import Styles from "./navbar.module.css"
import logo from "../images/logo.png"
import { Outlet } from "react-router-dom"
export function Navbar(){
    return(
        <>
        <div className={Styles.navbar}>
            <img src={logo} alt="logo"/>
            <h1>HeyTHERE</h1>
        </div>
        {/* <Outlet/> */}
        </>
    )
} 