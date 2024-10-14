import styled from 'styled-components';

const mobileResolutionPotrait = `480px`;
const mobileResolutionLandscape = `959px`;
const tabletResolutionMin = `765px`;
const tabletResolutionMax = `1024px`;



const LoaderAnimationContainer = styled.div`
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    background-color: var(--third-color);
    // background-color: rgba(0, 0, 0, 1);
    display: inline-block;
    padding-top: 3rem;
`;

export {
    LoaderAnimationContainer,
}