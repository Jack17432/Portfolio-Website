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

            // Check if ball is outside of field
            for(let i = 0; i < allParticle.length; i++){

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
