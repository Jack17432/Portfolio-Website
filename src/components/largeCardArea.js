import * as React from 'react'
import "../components/styles/global.css"
import{ cardAreaLargeContainer } from './styles/cardArea.module.css'

const LargeCardArea = ( { children }) => {
    return (
        <div className={cardAreaLargeContainer}>
            {children}
        </div>
    )
}

export default LargeCardArea