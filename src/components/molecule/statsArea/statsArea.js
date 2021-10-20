import * as React from 'react'
import {
    container
} from './statsArea.module.css'

const StatsArea = ({ bgColor, children }) => {

    return (
        <div className={container} style={{ backgroundColor: bgColor }}>
            { children }
        </div>
    )
}

export default StatsArea