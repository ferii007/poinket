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
        margin-bottom: 1rem;
    }

    .header-outlet-time {
        font-size: 0.8rem;
        font-weight: 600;
        color: rgba(0, 0, 0, 0.5);
        margin-bottom: 0.2rem;
    }
    

    /* Mobile Potrait (max-width: ${mobileResolutionPotrait}) */
    @media only screen and (max-width: ${mobileResolutionPotrait}) and (orientation: portrait) {
        top: 6.5rem;
        left: 0.5rem;

        .header-outlet-name {
            margin-bottom: 0.8rem;
        }
    }

    /* Mobile Landscape (max-width: ${mobileResolutionLandscape}) */
    @media only screen and (max-width: ${mobileResolutionLandscape}) and (orientation: landscape) {
        left: 6.5rem;
    }

    /* Tablet Potrait */
    @media only screen and (min-width: ${tabletResolutionMin}) and (max-width: ${tabletResolutionMax}) and (orientation: portrait) {
        top: 6.5rem;
        left: 0.5rem;

        .header-outlet-name {
            margin-bottom: 0.8rem;
        }
    }
`;

export {
    HeaderMenuContainer
}