import * as React from 'react'
import { Link } from 'gatsby'
import {
    navBar,
    navLink,
    navLinkItem,
    navLinkItemActive
} from './styles/navBar.module.css'


const NavBar = () => {
    return (
         <nav className={navBar}>
            <div className={navLink}>
                <Link to={"/"} className={navLinkItem} activeClassName={navLinkItemActive}>Home</Link>
                <Link to={"/about"} className={navLinkItem} activeClassName={navLinkItemActive}>About me</Link>
                <Link to={"/projects"} className={navLinkItem} activeClassName={navLinkItemActive}>Projects</Link>
            </div>
        </nav>
    )
}

export default NavBar