import React from "react"
import {
    container
} from './card.module.css'

const Card = ({ height, width, bgColor, color, children }) => {
    return (
        <div className={container} style={{ height: height, width : width, backgroundColor: bgColor , color: color}}>
            { children }
        </div>
    )
}

export default Card