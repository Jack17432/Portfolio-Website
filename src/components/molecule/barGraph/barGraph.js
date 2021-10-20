import React from "react"
import {
    container
} from './barGraph.module.css'

const BarGraph = ({ height, width, bgColor, children }) => {
    return (
        <div className={container} style={{ height: height, width : width, backgroundColor: bgColor }}>
            { children }
        </div>
    )
}

export default BarGraph