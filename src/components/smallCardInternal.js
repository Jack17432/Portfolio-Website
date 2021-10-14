import * as React from 'react'
import {
    card,
    imgStyle,
    container
} from './styles/smallCard.module.css'
import {Link} from "gatsby";

const SmallCard = ( { img, children, path } ) => {
    return (
        <Link className={card} to={ path }>
            <div className={imgStyle}>
                { img }
            </div>
            <div className={container}>
                { children }
            </div>
        </Link>
    )
}

export default SmallCard