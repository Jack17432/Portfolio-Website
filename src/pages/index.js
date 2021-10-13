import * as React from 'react'
import "../components/styles/global.css"
import Layout from "../components/layout";
import LargeCard from "../components/largeCard";
import LargeCardArea from "../components/largeCardArea";
import { imgCardStyle } from "../components/styles/global.module.css"
import {StaticImage} from "gatsby-plugin-image";

const IndexPage = () => {
    return (
        <Layout pageTitle={"csgraham.xyz"}>
            <LargeCardArea>
                <LargeCard img={<StaticImage src={"../images/PORTRAIT.jpg"} alt={"Portrait"} className={imgCardStyle}/>}>
                    <h1>Hello,</h1>
                    <h1>I'm Christopher Graham</h1>
                </LargeCard>
            </LargeCardArea>
        </Layout>
    )
}

export default IndexPage