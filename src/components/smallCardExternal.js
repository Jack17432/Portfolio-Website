import * as React from 'react'
import {
    card,
    imgStyle,
    container
} from './styles/smallCard.module.css'

const SmallCard = ( { img, children, path} ) => {
    return (
        <a href={ path } target="_blank" className={card}>
            <div className={imgStyle}>
                { img }
            </div>
            <div className={container}>
                { children }
            </div>
        </a>
    )
}

export default SmallCard