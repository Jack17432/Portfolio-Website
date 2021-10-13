import * as React from 'react'
import Layout from "../components/layout";
import '../components/styles/global.css'
import SmallCardArea from "../components/smallCardArea";
import SmallCard from "../components/smallCard";
import Header from "../components/header";

const ProjectsPage = () => {
    return (
        <Layout pageTitle={"Projects"}>
            <Header>
                <SmallCardArea>
                    <SmallCard> 1 </SmallCard>
                    <SmallCard> 2 </SmallCard>
                    <SmallCard> 3 </SmallCard>
                    <SmallCard> 4 </SmallCard>
                    <SmallCard> 5 </SmallCard>
                    <SmallCard> 6 </SmallCard>
                    <SmallCard> 7 </SmallCard>
                    <SmallCard> 8 </SmallCard>
                    <SmallCard> 9 </SmallCard>
                    <SmallCard> 10 </SmallCard>
                    <SmallCard> 11 </SmallCard>
                    <SmallCard> 12 </SmallCard>
                    <SmallCard> 13 </SmallCard>
                </SmallCardArea>
            </Header>
        </Layout>
    )
}

export default ProjectsPage