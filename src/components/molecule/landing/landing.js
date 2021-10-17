import * as React from 'react'
import {useEffect, useState} from 'react'
import {container, wrapper} from './landing.module.css'
import ZoneButton from "../../atom/zoneButton/zoneButton";
import ShowCase from "../../atom/showCase/showCase";
import WaveSection from "../../atom/waveSection/waveSection";

const Landing = () => {

    const [ zone, setZone ] = useState(['var(--pastel-pink-primary)']);

    const zoneDict = {
        0: 'pink',
        1: 'blue',
        2: 'purple',
        3: 'green',
        4: 'yellow'
    }

    const colourPrimaryDict = {
        'pink': 'var(--pastel-pink-primary)',
        'blue': 'var(--pastel-blue-primary)',
        'purple': 'var(--pastel-purple-primary)',
        'green': 'var(--pastel-green-primary)',
        'yellow': 'var(--pastel-yellow-primary)'
    }
    const colourSecondaryDict = {
        'pink': 'var(--pastel-pink-secondary)',
        'blue': 'var(--pastel-blue-secondary)',
        'purple': 'var(--pastel-purple-secondary)',
        'green': 'var(--pastel-green-secondary)',
        'yellow': 'var(--pastel-yellow-secondary)'
    }

    const icon = {
        'hands': <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="hands-helping" className="svg-inline--fa fa-hands-helping fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M488 192H336v56c0 39.7-32.3 72-72 72s-72-32.3-72-72V126.4l-64.9 39C107.8 176.9 96 197.8 96 220.2v47.3l-80 46.2C.7 322.5-4.6 342.1 4.3 357.4l80 138.6c8.8 15.3 28.4 20.5 43.7 11.7L231.4 448H368c35.3 0 64-28.7 64-64h16c17.7 0 32-14.3 32-32v-64h8c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24zm147.7-37.4L555.7 16C546.9.7 527.3-4.5 512 4.3L408.6 64H306.4c-12 0-23.7 3.4-33.9 9.7L239 94.6c-9.4 5.8-15 16.1-15 27.1V248c0 22.1 17.9 40 40 40s40-17.9 40-40v-88h184c30.9 0 56 25.1 56 56v28.5l80-46.2c15.3-8.9 20.5-28.4 11.7-43.7z"/></svg>,
        'robot': <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="robot" className="svg-inline--fa fa-robot fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M32,224H64V416H32A31.96166,31.96166,0,0,1,0,384V256A31.96166,31.96166,0,0,1,32,224Zm512-48V448a64.06328,64.06328,0,0,1-64,64H160a64.06328,64.06328,0,0,1-64-64V176a79.974,79.974,0,0,1,80-80H288V32a32,32,0,0,1,64,0V96H464A79.974,79.974,0,0,1,544,176ZM264,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,264,256Zm-8,128H192v32h64Zm96,0H288v32h64ZM456,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,456,256Zm-8,128H384v32h64ZM640,256V384a31.96166,31.96166,0,0,1-32,32H576V224h32A31.96166,31.96166,0,0,1,640,256Z"/></svg>,
        'grade': <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="graduation-cap" className="svg-inline--fa fa-graduation-cap fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"/></svg>,
        'code': <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="code" className="svg-inline--fa fa-code fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"/></svg>,
        'child': <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="child" className="svg-inline--fa fa-child fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M120 72c0-39.765 32.235-72 72-72s72 32.235 72 72c0 39.764-32.235 72-72 72s-72-32.236-72-72zm254.627 1.373c-12.496-12.497-32.758-12.497-45.254 0L242.745 160H141.254L54.627 73.373c-12.496-12.497-32.758-12.497-45.254 0-12.497 12.497-12.497 32.758 0 45.255L104 213.254V480c0 17.673 14.327 32 32 32h16c17.673 0 32-14.327 32-32V368h16v112c0 17.673 14.327 32 32 32h16c17.673 0 32-14.327 32-32V213.254l94.627-94.627c12.497-12.497 12.497-32.757 0-45.254z"/></svg>
    }

    function getRandColour() {
        let randNum = Math.floor(Math.random() * 5);
        return colourPrimaryDict[zoneDict[randNum]]
    }

    useEffect(() => {
        const interval = setInterval(() => setZone(getRandColour), 5000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className={container}>
            <div className={wrapper} style={{ backgroundColor: zone }}>

                <ShowCase/>

                <ZoneButton x={'18vw'} y={'14vh'}
                            zonePrim={colourPrimaryDict['pink']} zoneSec={colourSecondaryDict['pink']}
                            icon={icon['child']} setZone={setZone}/>
                <ZoneButton x={'14vw'} y={'72vh'}
                            zonePrim={colourPrimaryDict['blue']} zoneSec={colourSecondaryDict['blue']}
                            icon={icon['code']} setZone={setZone}/>
                <ZoneButton x={'40vw'} y={'8vh'}
                            zonePrim={colourPrimaryDict['purple']} zoneSec={colourSecondaryDict['purple']}
                            icon={icon['grade']} setZone={setZone}/>
                <ZoneButton x={'82vw'} y={'17vh'}
                            zonePrim={colourPrimaryDict['green']} zoneSec={colourSecondaryDict['green']}
                            icon={icon['robot']} setZone={setZone}/>
                <ZoneButton x={'85vw'} y={'78vh'}
                            zonePrim={colourPrimaryDict['yellow']} zoneSec={colourSecondaryDict['yellow']}
                            icon={icon['hands']} setZone={setZone}/>

            </div>

            <WaveSection zone={zone} height={'5rem'}/>
        </div>
    )
}

export default Landing