import * as React from 'react'
import { Link } from 'gatsby'
import {
    cardLargeContainer,
    cardTextArea,
} from './styles/largeCard.module.css'
import {StaticImage} from "gatsby-plugin-image";

const LargeCard = ({ img, children }) => {
    return (
        <div className={cardLargeContainer}>
            {img}
            <div className={cardTextArea}>
                {children}
            </div>
        </div>
    )
}

export default LargeCard