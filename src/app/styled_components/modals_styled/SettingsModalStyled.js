import styled from 'styled-components';

const mobileResolutionPotrait = `480px`;
const mobileResolutionLandscape = `959px`;
const tabletResolutionMin = `765px`;
const tabletResolutionMax = `1024px`;



const SettingsModalBackdrop = styled.div`
    position: fixed;
    background-color: rgba(0, 0, 0, 0.1);
    z-index: 999;
    width: 100vw;
    height: 100vh;
`;

const SettingsModalContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 100%);
    padding: 5rem 10rem;

    /* Mobile Potrait (max-width: ${mobileResolutionPotrait}) */
    @media only screen and (max-width: ${mobileResolutionPotrait}) and (orientation: portrait) {
        
    }

    /* Mobile Landscape (max-width: ${mobileResolutionLandscape}) */
    @media only screen and (max-width: ${mobileResolutionLandscape}) and (orientation: landscape) {
        transform: translate(-50%, 50%);
    }

    /* Tablet Potrait */
    @media only screen and (min-width: ${tabletResolutionMin}) and (max-width: ${tabletResolutionMax}) and (orientation: portrait) {
        
    }
`;

export {
    SettingsModalBackdrop,
    SettingsModalContainer,
}