import * as React from 'react'
import {
    container
} from './zoneButton.module.css'

const ZoneButton = ({x, y, zonePrim, zoneSec, icon, setZone }) => {

    return (
        <div className={container} style={{
            backgroundColor: zonePrim,
            color: zoneSec,
            top: y,
            left: x
        }} onClick={() => setZone(zonePrim)}>
            {icon}
        </div>
    )
}

export default ZoneButton