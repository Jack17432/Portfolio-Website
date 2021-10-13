import * as React from 'react'
import {
    headerContainer
} from './styles/header.module.css'

const Header = ( { children }) => {
    return (
        <div className={headerContainer}>
            { children }
        </div>
    )
}

export default Header