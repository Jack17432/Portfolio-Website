import React from 'react'
import {
    container,
    wrapper
} from './bar.module.css'

const Bar = ({size, color, children}) => {
    return (
        <div className={container} style={{width: size, backgroundColor: color}}>
            <div className={wrapper}>
                { children }
            </div>
        </div>
    )
}

export default Bar