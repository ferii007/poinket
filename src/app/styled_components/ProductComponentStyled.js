import styled from 'styled-components';

import {
    mobileResolutionPotrait,
    mobileResolutionLandscape,
    tabletResolutionMin,
    tabletResolutionMax,
} from './globalStyled';


const ProductComponentContainer = styled.div`
    overflow-y: scroll;
    margin-top: 6.5rem;
    padding-bottom: 7.5rem;
    height: 100%;

    &::-webkit-scrollbar {
        display: none;
    }
    scrollbar-width: none;

    /* Mobile Potrait (max-width: ${mobileResolutionPotrait}) */
    @media only screen and (max-width: ${mobileResolutionPotrait}) and (orientation: portrait) {
        margin-top: 0;
        padding-bottom: 1rem;
    }

    /* Mobile Landscape (max-width: ${mobileResolutionLandscape}) */
    @media only screen and (max-width: ${mobileResolutionLandscape}) and (orientation: landscape) {

    }

    /* Tablet Potrait */
    @media only screen and (min-width: ${tabletResolutionMin}) and (max-width: ${tabletResolutionMax}) and (orientation: portrait) {
        margin-top: 0;
        padding-bottom: 1rem;
    }
`;

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

const ProductBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    // justify-content: center;
    // align-items: center;
    
    /* Mobile Potrait (max-width: ${mobileResolutionPotrait}) */
    @media only screen and (max-width: ${mobileResolutionPotrait}) and (orientation: portrait) {
        justify-content: center;
    }

    /* Mobile Landscape (max-width: ${mobileResolutionLandscape}) */
    @media only screen and (max-width: ${mobileResolutionLandscape}) and (orientation: landscape) {
        justify-content: center;
    }

    /* Tablet Potrait */
    @media only screen and (min-width: ${tabletResolutionMin}) and (max-width: ${tabletResolutionMax}) and (orientation: portrait) {
        
    }
`;

const ProductList = styled.div`
    position: relative;
    background: white;
    flex: 0 0 auto;
    width: 100%;
    height: 100%;
    min-width: 15rem;
    max-width: 15rem;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
    overflow: hidden;

    .product-img {
        width: 100%;
        height: 12rem;
        background: rgba(0, 0, 0, 0.2);
    }

    .product-img img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }

    .product-info {
        padding: 1rem 0.6rem;
    }

    .product-name {
        font-size: 1rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
    }

    .product-price {
        font-size: 0.9rem;
        font-weight: 600;
        color: rgba(0, 0, 0, 0.5);

        margin-bottom: 2rem;
    }

    .product-stock {
        font-size: 0.7rem;
        font-weight: 600;
        color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: end;
        position: absolute;
        bottom: 0.5rem;
        right: 0.5rem;

        .stock-available {
            background: var(--primary-color);
            color: white;
            padding: 0.5rem;
            border-radius: 0.5rem;
        }

        .stock-unavailable {
            color: red;
        }
    }

    /* Mobile Potrait (max-width: ${mobileResolutionPotrait}) */
    @media only screen and (max-width: ${mobileResolutionPotrait}) and (orientation: portrait) {
        min-width: 20rem;
        max-width: 20rem;
    }

    /* Mobile Landscape (max-width: ${mobileResolutionLandscape}) */
    @media only screen and (max-width: ${mobileResolutionLandscape}) and (orientation: landscape) {
        min-width: 12rem;
        max-width: 12rem;
    }

    /* Tablet Potrait */
    @media only screen and (min-width: ${tabletResolutionMin}) and (max-width: ${tabletResolutionMax}) and (orientation: portrait) {
        
    }
`;

const CategoriesContainer = styled.div`
    background-color: var(--third-color);
    position: sticky;
    top: 0;
    z-index: 1;

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

const AllCategoriesContainer = styled.div`
    position: absolute;
    z-index: 1;
    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(1px);
    inset: 8.5rem 0 0;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none;
    }
    scrollbar-width: none;

    /* Mobile Potrait (max-width: ${mobileResolutionPotrait}) */
    @media only screen and (max-width: ${mobileResolutionPotrait}) and (orientation: portrait) {
        inset: 2rem 0;
    }

    /* Mobile Landscape (max-width: ${mobileResolutionLandscape}) */
    @media only screen and (max-width: ${mobileResolutionLandscape}) and (orientation: landscape) {

    }

    /* Tablet Potrait */
    @media only screen and (min-width: ${tabletResolutionMin}) and (max-width: ${tabletResolutionMax}) and (orientation: portrait) {
        inset: 2.5rem 0;
    }
`;

const AllCategoriesMenu = styled.ul `
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 1rem 0.5rem;

    li {
        flex: 0 0 auto;
        background: var(--primary-color);
        color: white;
        padding: 0.7rem 1rem;
        border-radius: 0.5rem;
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
        cursor: pointer;
        transition: all 0.1s ease-in-out;
    }

    li:hover {
        transform: scale(1.05);
    }
`;

export {
    ProductComponentContainer,
    ProductContainer,
    CategoriesContainer,
    CategoriesBox,
    CategoriesMenu,
    ProductBox,
    ProductList,
    AllCategoriesContainer,
    AllCategoriesMenu,
}