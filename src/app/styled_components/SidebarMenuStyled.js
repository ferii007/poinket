import styled from 'styled-components';

import {
    mobileResolutionPotrait,
    mobileResolutionLandscape,
    tabletResolutionMin,
    tabletResolutionMax,
} from './globalStyled';


const SidebarMenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 3rem 0.5rem;
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
        flex-direction: row;
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
        flex-direction: row;
    }
`;

const SidebarMenuList = styled.ul`
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    gap: 0.7rem;

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

    .checkout-menu {
        display: none;
    }

    &:first-child {
        overflow: scroll;
    }

    &:not(:first-child) {
        padding-top: 0.8rem;
    }

    &::-webkit-scrollbar {
        display: none;
    }

    & {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }

    /* Mobile Potrait (max-width: ${mobileResolutionPotrait}) */
    @media only screen and (max-width: ${mobileResolutionPotrait}) and (orientation: portrait) {
        flex: 0 0 auto;
        padding: 0;
        flex-direction: row;

        &:first-child {
            overflow: scroll;
            max-width: 14.3rem;
        }

        &:not(:first-child) {
            padding-top: 0;
            margin-left: 0.7rem;
        }

        .menu-list {
            width: 5rem;
        }

        .checkout-menu {
            display: block;
        }
    }

    /* Mobile Landscape (max-width: ${mobileResolutionLandscape}) */
    @media only screen and (max-width: ${mobileResolutionLandscape}) and (orientation: landscape) {
        padding: 0;
    }

    /* Tablet Potrait */
    @media only screen and (min-width: ${tabletResolutionMin}) and (max-width: ${tabletResolutionMax}) and (orientation: portrait) {
        flex: 0 0 auto;
        padding: 0;
        flex-direction: row;

        &:first-child {
            max-width: 34rem;
        }
            
        &:not(:first-child) {
            padding-top: 0;
            margin-left: 0.8rem;
        }
        
        .checkout-menu {
            display: block;
        }
    }
`;

export {
    SidebarMenuContainer,
    SidebarMenuList
}