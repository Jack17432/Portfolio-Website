import * as React from 'react'
import '../components/styles/global.css'
import Layout from "../components/layout";
import '../components/styles/global.css'
import SmallCardArea from "../components/smallCardArea";
import Header from "../components/header";
import {StaticImage} from "gatsby-plugin-image";
import SmallCardInternal from "../components/smallCardInternal";
import SmallCardExternal from "../components/smallCardExternal";

const ProjectsPage = () => {
    return (
        <Layout pageTitle={"Projects"}>
            <Header>
                <SmallCardArea>
                    <SmallCardInternal>  </SmallCardInternal>
                    <SmallCardExternal img={ <StaticImage src={'../images/TimeTableApp.jpg'} alt={'TimeTableApp'}/> } path='https://github.com/Jack17432/uTimeTable'
                    > uTimeTable </SmallCardExternal>
                    <SmallCardInternal>  </SmallCardInternal>
                    <SmallCardInternal>  </SmallCardInternal>
                    <SmallCardExternal img={ <StaticImage src={"../images/PORTRAIT.jpg"} alt={"Portrait"}/> } path='https://github.com/Jack17432/Portfolio-Website'
                    > Portfolio </SmallCardExternal>
                    <SmallCardInternal>  </SmallCardInternal>
                    <SmallCardInternal>  </SmallCardInternal>
                    <SmallCardInternal>  </SmallCardInternal>
                    <SmallCardInternal>  </SmallCardInternal>
                    <SmallCardInternal>  </SmallCardInternal>
                    <SmallCardInternal>  </SmallCardInternal>
                    <SmallCardInternal> More </SmallCardInternal>
                    <SmallCardInternal>  </SmallCardInternal>
                </SmallCardArea>
            </Header>
        </Layout>
    )
}

export default ProjectsPage