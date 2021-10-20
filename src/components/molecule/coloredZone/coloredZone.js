import React from 'react'
import {
    container,
    wrapper
} from './coloredZone.module.css'
import WaveSection from "../../atom/waveSection/waveSection";

const ColoredZone = ({color, children}) => {
    return (
        <div className={container}>
            <WaveSection zone={color} height={'5rem'} invert={'true'}/>
            <div className={wrapper} style={{backgroundColor: color}}>
                { children }
            </div>
            <WaveSection zone={color} height={'5rem'}/>
        </div>
    )
}

export default ColoredZone