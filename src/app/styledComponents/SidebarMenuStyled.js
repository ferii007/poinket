import styled from 'styled-components';

const mobileResolutionPotrait = `480px`;
const mobileResolutionLandscape = `959px`;
const tabletResolutionMin = `765px`;
const tabletResolutionMax = `1024px`;



const SidebarMenuContainer = styled.div`
    padding: 0 0.5rem;
    background-color: var(--secondary-color);
    position: fixed;
    top: 0;
    bottom: 0;
    overflow: hidden;
    z-index: 1;
    

    /* Mobile Potrait (max-width: ${mobileResolutionPotrait}) */
    @media only screen and (max-width: ${mobileResolutionPotrait}) and (orientation: portrait) {
        bottom: unset;
        left: 0;
        right: 0;
        padding: 0.5rem;
    }

    /* Mobile Landscape (max-width: ${mobileResolutionLandscape}) */
    @media only screen and (max-width: ${mobileResolutionLandscape}) and (orientation: landscape) {
    
    }

    /* Tablet Potrait */
    @media only screen and (min-width: ${tabletResolutionMin}) and (max-width: ${tabletResolutionMax}) and (orientation: portrait) {
        bottom: unset;
        left: 0;
        right: 0;
        padding: 0.7rem;
    }
`;

const SidebarMenuList = styled.ul`
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    margin-top: 3rem;
    gap: 0.7rem;

    .menu-list {
        font-size: 0.8rem;
        font-family: var(--font-nunito);
        font-weight: 700;
        color: #FFF;
        width: 4rem;
        padding: 0.5rem 0.2rem;
        border-radius: 0.5rem;
        cursor: pointer;
        word-wrap: break-word;
        text-align: center;
        transition: background-color 0.2s ease;
    }

    .menu-list.menu-active {
        background-color: var(--primary-color);
    }

    .menu-list:not(.menu-active):hover {
        background-color: var(--primary-color);
    }


    /* Mobile Potrait (max-width: ${mobileResolutionPotrait}) */
    @media only screen and (max-width: ${mobileResolutionPotrait}) and (orientation: portrait) {
        margin-top: 0;
        flex-direction: row;
    }

    /* Mobile Landscape (max-width: ${mobileResolutionLandscape}) */
    @media only screen and (max-width: ${mobileResolutionLandscape}) and (orientation: landscape) {
        margin-top: 2rem;
    }

    /* Tablet Potrait */
    @media only screen and (min-width: ${tabletResolutionMin}) and (max-width: ${tabletResolutionMax}) and (orientation: portrait) {
        margin-top: 0;
        flex-direction: row;
    }
`

export {
    SidebarMenuContainer,
    SidebarMenuList
}