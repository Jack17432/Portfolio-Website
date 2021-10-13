import * as React from 'react'
import {
    funContainer,
    funWrapper,
    dot,
    dotGrow
} from './styles/fun.module.css'
import {useEffect, useRef} from "react";

const Fun = () => {
    const container = useRef(null);

    useEffect(()=>{
        let row = 15;
        let col = 15;
        const circleArr = [];

        for(let i = 0; i < col; i++){
            circleArr[i] = [];
            for(let j = 0; j < row; j++){
                const circle = document.createElement('div');
                circle.classList.add(dot);
                container.current.appendChild(circle);
                circleArr[i].push(circle);
            }
        }

        circleArr.forEach((col, i) => {
           col.forEach((circle, j) => {
              circle.addEventListener('click', () => {
                  growCircle(i, j);
              });
           });
        });

        function growCircle(i, j) {
            if(circleArr[i] && circleArr[i][j]){
                if(!circleArr[i][j].classList.contains(dotGrow)){
                    circleArr[i][j].classList.add(dotGrow);

                    setTimeout(() => {
                        growCircle(i+1, j);
                        growCircle(i-1, j);
                        growCircle(i, j+1);
                        growCircle(i, j-1);

                    }, 100);

                    setTimeout(() => {
                        circleArr[i][j].classList.remove(dotGrow);
                    }, 300);

                }
            }
        }

    }, [])


    return (
        <div className={funWrapper}>
            <h1>Page is work in progress</h1>
            <p>Click these dots while your bored.</p>
            <div id={'container'} ref={container} className={funContainer}/>
        </div>
    )
}

export default Fun