import Styles from "./navbar.module.css"

import logo from "../images/logo.png"

import appName from "../images/logo1.png"

export function Navbar(){

    return(

        <>

        <div className={Styles.navbar}>

            <img src={logo} className={Styles.applogo} alt="logo"/>

            <img src={appName} className={Styles.appname} alt="logo"/>

        </div>
        
        </>
    )
} 