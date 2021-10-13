import * as React from 'react'
import {
    card
} from './styles/smallCard.module.css'

const SmallCard = ( { children } ) => {
    return (
        <div className={card}>
            { children }
        </div>
    )
}

export default SmallCard