import * as React from 'react'
import Layout from "../components/layout";
import '../components/styles/global.css'
import Fun from "../components/fun";
import Header from "../components/header";

const AboutPage = () => {
    return (
        <Layout pageTitle={"About me"}>
            <Header>
                <Fun/>
            </Header>
        </Layout>
    )
}

export default AboutPage