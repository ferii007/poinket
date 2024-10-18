import styled from 'styled-components';

import {
    mobileResolutionPotrait,
    mobileResolutionLandscape,
    tabletResolutionMin,
    tabletResolutionMax,
} from './globalStyled';


const ProductContainer = styled.div`
    padding-top: 1rem;
    
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

const CategoriesContainer = styled.div`
    background-color: var(--third-color);
    position: sticky;
    top: 0;
    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        border-bottom: 0.2rem solid rgba(0, 0, 0, 0.5);
        border-radius: 0.5rem;
        opacity: 0.5;
    }
`;

const CategoriesBox = styled.div`
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    padding-bottom: 0.3rem;
    
    &::-webkit-scrollbar {
        width: 0.2rem;
        height: 0.2rem;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: var(--primary-color);
        border-radius: 0.5rem;
    }
`;

const CategoriesMenu = styled.ul`
    display: flex;
    align-items: center;
    gap: 1.7rem;
    .list-category {
        flex: 0 0 auto;
        cursor: pointer;
        font-size: 0.8rem;
        font-weight: 600;
        color: rgba(0, 0, 0, 0.5);
        transition: all 0.2s ease-in-out;
    }

    .list-category.active-category {
        color: var(--primary-color);
    }

    .list-category:hover {
        color: var(--primary-color);
    }
`;

export {
    ProductContainer,
    CategoriesContainer,
    CategoriesBox,
    CategoriesMenu
}