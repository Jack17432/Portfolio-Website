import * as React from 'react'
import { Link } from 'gatsby'
import {
    container,
    heading,
} from './styles/layout.module.css'
import NavBar from "./navBar";

const Layout = ({ pageTitle, children }) => {
    return (
        <div className={ container }>
            <title>{ pageTitle }</title>
            <NavBar> </NavBar>
            {children}
        </div>
    )
}

export default Layout