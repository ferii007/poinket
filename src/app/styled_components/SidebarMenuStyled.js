import styled from 'styled-components';

import {
    mobileResolutionPotrait,
    mobileResolutionLandscape,
    tabletResolutionMin,
    tabletResolutionMax,
} from './globalStyled';


const SidebarMenuContainer = styled.div`
    background-color: var(--secondary-color);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: fixed;
    top: 0.4rem;
    left: 0;
    bottom: 0.4rem;
    overflow: hidden;
    padding: 1rem 0;
    z-index: 1;
    max-width: 6.5rem;
    

    /* Mobile Potrait (max-width: ${mobileResolutionPotrait}) */
    @media only screen and (max-width: ${mobileResolutionPotrait}) and (orientation: portrait) {
        max-width: unset;
        max-height: 5rem;
        flex-direction: row;
        align-items: baseline;
        top: 0;
        bottom: unset;
        left: 0;
        right: 0;
        padding: 0 0.5rem;
    }

    /* Mobile Landscape (max-width: ${mobileResolutionLandscape}) */
    @media only screen and (max-width: ${mobileResolutionLandscape}) and (orientation: landscape) {
    
    }

    /* Tablet Potrait */
    @media only screen and (min-width: ${tabletResolutionMin}) and (max-width: ${tabletResolutionMax}) and (orientation: portrait) {
        max-width: unset;
        max-height: 5rem;
        flex-direction: row;
        align-items: baseline;
        top: 0;
        bottom: unset;
        left: 0;
        right: 0;
        padding: 0 0.5rem;
    }
`;

const SidebarMenuList = styled.ul`
    display: flex; 
    flex: 0 0 auto;
    flex-direction: column; 
    align-items: baseline; 
    gap: 0.7rem;
    overflow: hidden;
    padding: 0 0.5rem;
    position: relative;

    &::-webkit-scrollbar {
        width: 0.3rem;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--primary-color);
        // border-radius: 1rem;
    }
    
    &:first-child {
        overflow-x: hidden;
        overflow-y: scroll;
        max-height: 70%;
    }

    .menu-list {
        flex: 0 0 auto;
        font-size: 0.8rem;
        font-family: var(--font-nunito);
        font-weight: 700;
        color: #FFF;
        width: 5.5rem;
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
        padding: 0.5rem 0;
        flex-direction: row;
        
        &:first-child {
            overflow-x: scroll;
            overflow-y: hidden;
            max-width: 50%;
        }
    }

    /* Mobile Landscape (max-width: ${mobileResolutionLandscape}) */
    @media only screen and (max-width: ${mobileResolutionLandscape}) and (orientation: landscape) {
        &:first-child {
            max-height: 55%;
        }
    }

    /* Tablet Potrait */
    @media only screen and (min-width: ${tabletResolutionMin}) and (max-width: ${tabletResolutionMax}) and (orientation: portrait) {
        padding: 0.5rem 0;
        flex-direction: row;
        
        &:first-child {
            overflow-x: scroll;
            overflow-y: hidden;
            max-width: 70%;
        }
    }
`;

export {
    SidebarMenuContainer,
    SidebarMenuList
}