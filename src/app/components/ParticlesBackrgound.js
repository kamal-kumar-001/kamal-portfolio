'use client'
import React, { useCallback } from 'react'
import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
import { loadSlim } from "tsparticles-slim";
import particlesConfig from '../helpers/particlesConfig';


const ParticlesBackrgound = ({ children }) => {
    const particlesInit = useCallback(async engine => {
        // console.log(engine);
        await loadSlim(engine);

        // LOAD ANY ONE 
        // await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);


    return (

        <>

            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}

                options={particlesConfig}

            />
            {children}
        </>



    )
}

export default ParticlesBackrgound