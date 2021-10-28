import React from "react"
import Layout from "../components/organisms/layout/layout";
import Landing from "../components/molecule/landing/landing";
import StatsArea from "../components/molecule/statsArea/statsArea";
import Card from "../components/atom/card/card";
import BarGraph from "../components/molecule/barGraph/barGraph";
import Bar from '../components/atom/bar/bar'
import ColoredZone from "../components/molecule/coloredZone/coloredZone";

export default function Home() {
    return (
      <Layout>
          <Landing/>

          <StatsArea bgColor={'white'}>
              <Card width={'500px'} bgColor={'var(--pastel-blue-primary)'} color={'var(--text-primary-dark)'}>
                  <h1> Programing languages </h1>
                  <p>
                      I have been coding sine 2014, so im still pretty new. Most of my programing experience is just
                      having fun doing calculators and stuff like that in java. However I am now using mostly python
                      since it is so much easir to do everything.
                  </p>
              </Card>
              <BarGraph width={'800px'}>
                  <Bar size={'80%'} color={'var(--pastel-blue-primary)'}> Python </Bar>
                  <Bar size={'50%'} color={'var(--pastel-pink-primary)'}> Tensorflow </Bar>
                  <Bar size={'70%'} color={'var(--pastel-blue-primary)'}> Java </Bar>
                  <Bar size={'40%'} color={'var(--pastel-pink-primary)'}> Android App Development </Bar>
              </BarGraph>
          </StatsArea>

          <ColoredZone color={'var(--pastel-blue-primary)'}>

          </ColoredZone>
      </Layout>
  )
}
