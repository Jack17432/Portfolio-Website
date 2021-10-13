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
                    <SmallCard> Project 1 </SmallCard>
                    <SmallCard> Project 2 </SmallCard>
                    <SmallCard> Project 3 </SmallCard>
                    <SmallCard> Project 4 </SmallCard>
                    <SmallCard> Project 5 </SmallCard>
                    <SmallCard> Project 6 </SmallCard>
                    <SmallCard> Project 7 </SmallCard>
                    <SmallCard> Project 8 </SmallCard>
                    <SmallCard> Project 9 </SmallCard>
                    <SmallCard> Project 10 </SmallCard>
                    <SmallCard> Project 11 </SmallCard>
                    <SmallCard> Project 12 </SmallCard>
                    <SmallCard> Project Main </SmallCard>
                </SmallCardArea>
            </Header>
        </Layout>
    )
}

export default ProjectsPage