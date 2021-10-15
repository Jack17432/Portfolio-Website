import React from "react"
import NavBar from "../../molecule/navigation/navigation"
import {
    mainContainer
} from './layout.module.css'
import "../../global/style.css"

export default function Layout( { children } ) {
    return (
        <div>
            <NavBar/>
            <main className={mainContainer}>
                {children}
            </main>
        </div>
    )
}
