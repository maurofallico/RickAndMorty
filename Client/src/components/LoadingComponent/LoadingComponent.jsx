import styled from './LoadingComponent.module.css'
import {useEffect, useState} from 'react'

function LoadingComponent () {
    const [segundos, setSegundos] = useState(0)


    useEffect(() => {
        setTimeout(() => {
                setSegundos(segundos+1)
          }, 5);

        }, [segundos]); 

        

        const formattedSegundos = `${String(Math.floor(segundos / 60)).padStart(2, '0')}s ${String(segundos % 60).padStart(2, '0')}`;



        
   return (
        <div className={styled.container}>
        <p className={styled.loadingText}>Loading Characters...</p>
        <p className={styled.simpleText}>{formattedSegundos}</p>
        <p className={styled.smallText}>This server is hosted on Render on their free plan. So the first time it runs, it may takes about 50 seconds to load.</p>
        </div>
    )
}

export default LoadingComponent