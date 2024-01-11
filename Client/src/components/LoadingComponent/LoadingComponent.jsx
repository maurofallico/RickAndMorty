import styled from './LoadingComponent.module.css'

function LoadingComponent () {
       
   return (
        <div className={styled.container}>
        <p className={styled.loadingText}>Loading Characters...</p>
        <p className={styled.smallText}>This server is hosted on Render on their free plan. So the first time it runs, it may takes about 50 seconds to load.</p>
        </div>
    )
}

export default LoadingComponent