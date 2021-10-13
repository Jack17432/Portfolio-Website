import * as React from 'react'
import {
    container,
} from './styles/smallCardArea.module.css'

const SmallCardArea = ( { children }) => {
    return (
        <section className={container}>
            { children }
        </section>
    )
}

export default SmallCardArea