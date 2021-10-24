import React from "react"
import Layout from "../../components/organisms/layout/layout";
import {
    button,
    ball
} from './project.module.css'

export default function Home() {

    const allParticle = [];
    const allParticlePos = [];
    const allParticleVel = [];
    const gravity = -0.1;
    const friction = 1;
    const leftWall = -200;
    const rightWall = 300;
    const floor = -100;
    const roof = -500;

    function getDist(obj1, obj2) {
        let dist = 0;
        let pos1 = allParticlePos[obj1];
        let pos2 = allParticlePos[obj2];

        let temp1 = [0, 0];
        let temp2 = [0, 0];

        temp1[0] = pos1[0] + 10;
        temp1[1] = pos1[1] + 10;
        temp2[0] = pos2[0] + 10;
        temp2[1] = pos2[1] + 10;

        let xDif = temp1[0] - temp2[0];
        let yDif = temp1[1] - temp2[1];

        dist  = Math.sqrt(xDif**2 + yDif**2);

        let angle = 0;
        if (-1 < (yDif / xDif) && 1 > (yDif / xDif)) {
            angle = Math.asin(yDif / xDif);
        } else {
            angle = Math.asin(xDif / yDif);
        }

        return [dist, angle];
    }

    function collision(obj1, obj2, info) {
        // TODO, to collision work
    }

    function fire(obj, allParticle, allParticlePos, allParticleVel) {
        const particle = document.createElement('div');
        particle.className = ball;
        allParticle.push(particle);
        allParticlePos.push([50, 0]);

        let x = Math.random() * 10 - 5;
        let y = Math.floor(-(Math.random() * 5 + 5));

        allParticleVel.push([x, y]);
        obj.appendChild(particle);
    }

    setInterval(() => {
        for(let i = 0; i < allParticle.length; i++){
            // Update particle pos
            allParticle[i].style.top = (allParticlePos[i][1] + allParticleVel[i][1]) + 'px';
            allParticle[i].style.left = (allParticlePos[i][0] + allParticleVel[i][0]) + 'px';

            // Set particle pos and vel in array
            allParticlePos[i][1] = allParticlePos[i][1] + allParticleVel[i][1];
            allParticlePos[i][0] = allParticlePos[i][0] + allParticleVel[i][0];
            allParticleVel[i][1] = allParticleVel[i][1] - gravity;


            // Check for hit
            for(let x = i + 1; x < allParticle.length; x++){
                const diffDist = getDist(i, x);
                if (diffDist[0] < 20){
                    console.log(diffDist);
                }
            }

            if (allParticlePos[i][1] > floor || allParticlePos[i][1] < roof) {
                allParticleVel[i][1] = -allParticleVel[i][1] * friction;

                if (allParticlePos[i][1] > floor) {
                    allParticlePos[i][1] = floor;
                } else {
                    allParticlePos[i][1] = roof;
                }
            }

            if (leftWall > allParticlePos[i][0] || allParticlePos[i][0] > rightWall) {
                allParticleVel[i][0] = -allParticleVel[i][0] * friction;

                if (leftWall > allParticlePos[i][0]) {
                    allParticlePos[i][0] = leftWall;
                } else {
                    allParticlePos[i][0] = rightWall
                }
            }
        }
    }, 10);

    return (
        <Layout>
            <button id={'cannon'} className={button} onClick={() => fire(document.getElementById('cannon'), allParticle, allParticlePos, allParticleVel)}>
                Click me!
            </button>
        </Layout>
    )
}
