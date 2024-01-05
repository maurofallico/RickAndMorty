import styled from './LoadingComponent.module.css'

function LoadingComponent () {
    return (
        <div className={styled.container}>
        <p className={styled.loadingText}>Loading Characters...</p>
        </div>
    )
}

export default LoadingComponent