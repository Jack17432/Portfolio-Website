import * as React from 'react'
import {
    container
} from './showCase.module.css'
import {StaticImage} from "gatsby-plugin-image";

const ShowCase = ({ children }) => {
    return (
        <div className={container}>
            { children }
        </div>
    )
}

export default ShowCase