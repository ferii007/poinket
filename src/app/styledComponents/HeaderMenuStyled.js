import styled from 'styled-components';

const mobileResolutionPotrait = `480px`;
const mobileResolutionLandscape = `959px`;
const tabletResolutionMin = `765px`;
const tabletResolutionMax = `1024px`;



const HeaderMenuContainer = styled.div`
    position: fixed;
    left: 7rem;
    top: 1rem;

    .header-outlet-name {
        font-size: 1.3rem;
        font-weight: 600;
    }

    .header-outlet-time {
        font-size: 0.8rem;
        font-weight: 600;
        color: rgba(0, 0, 0, 0.5);
        margin-top: 1rem;
    }
    

    /* Mobile Potrait (max-width: ${mobileResolutionPotrait}) */
    @media only screen and (max-width: ${mobileResolutionPotrait}) and (orientation: portrait) {
        
    }

    /* Mobile Landscape (max-width: ${mobileResolutionLandscape}) */
    @media only screen and (max-width: ${mobileResolutionLandscape}) and (orientation: landscape) {
    
    }

    /* Tablet Potrait */
    @media only screen and (min-width: ${tabletResolutionMin}) and (max-width: ${tabletResolutionMax}) and (orientation: portrait) {
        
    }
`;

export {
    HeaderMenuContainer
}