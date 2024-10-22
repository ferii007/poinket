import styled from 'styled-components';

const mobileResolutionPotrait = `480px`;
const mobileResolutionLandscape = `1020px`;
const tabletResolutionMin = `765px`;
const tabletResolutionMax = `1024px`;


const DefaultButton = styled.button`
    color: #FFF;
    background-color: var(--primary-color);
    padding: 0.4rem 1rem;
    border: 2px solid var(--secondary-color);
    border-radius: 0.3rem;
    cursor: pointer;
    transition: all 0.1s ease-in-out;

    &:hover, &.dropdown-active {
        background-color: var(--secondary-color);
        color: #FFF;
    }
`;

const LoaderAnimationContainer = styled.div`
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    background-color: var(--third-color);
    display: inline-block;
    padding-top: 3rem;
`;

const ModalBackdrop = styled.div.attrs(({ onClose }) => ({
    onClick: onClose,
}))`
    position: fixed;
    background-color: rgba(0, 0, 0, 0.1);
    z-index: 999;
    width: 100vw;
    height: 100vh;
    overflow: scroll;
    top: 0;
`;

const ModalContainer = styled.div.attrs(() => ({
    onClick: (e) => e.stopPropagation(),
}))`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 0%);
    padding: 2rem 0;
    width: 90%;
    max-width: 720px;
`;

const ModalBox = styled.div`
    background-color: white;
    padding: 1rem;
    border-radius: 0.7rem;
    box-shadow: 0 0.4rem 4rem rgba(0, 0, 0, 0.1);
`;

const ModalHeader = styled.div`
    font-size: 1.3rem;
    font-weight: 600;
    padding-bottom: 0.4rem;
    margin-bottom: 0.4rem;
    border-bottom: 1px solid var(--secondary-color);
    display: flex;
    justify-content: space-between;
    align-items: center;

    .icon {
        cursor: pointer;
        font-weight: normal;
        font-size: 1rem;
    }
`;

const ModalBody = styled.div`
    font-size: 1rem;
    font-weight: normal;
    padding: 1rem 0;
`;

const ModalFooter = styled.div`
    padding-top: 0.4rem;
    margin-top: 0.4rem;
    border-top: 1px solid var(--secondary-color);
    display: flex;
    gap: 1rem;

    &[position="right"] {
        justify-content: flex-end;
    }

    &[position="center"] {
        justify-content: center;
    }
`;

const DropdownContainer = styled.div`
    position: relative;
    display: inline-block;
`;

const DropdownButton = styled.button`
    background-color: #FFF;
    padding: 0.4rem 1rem;
    border: 2px solid rgba(0, 0, 0, 0.3);
    border-radius: 0.3rem;
    cursor: pointer;
    transition: all 0.1s ease-in-out;

    &:hover, &.dropdown-active {
        background-color: var(--primary-color);
        color: #FFF;
        border-color: var(--secondary-color);
    }
`;

const DropdownMenu = styled.div`
    position: absolute;
    box-shadow: 0px 1rem 2rem rgba(0, 0, 0, 0.2);
    border-radius: 0.4rem;
    min-width: 160px;
    z-index: 1;
    margin-top: 0.5rem;
`;

const DropdownItem = styled.div`
    padding: 0.3rem 1rem;
    cursor: pointer;
    background-color: #FFF;
    font-family: var(--font-nunito);
    font-weight: 600;

    &.highlighted {
        background-color: var(--primary-color);
        color: #FFF;
    }

    &:hover {
        background-color: var(--primary-color);
        color: #FFF;
    }
`;

const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;

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

const MainBox = styled.div`
    position: absolute;
    top: 0.4rem;
    bottom: 0.4rem;
    left: 7.5rem;
    right: 0;

    /* Mobile Potrait (max-width: ${mobileResolutionPotrait}) */
    @media only screen and (max-width: ${mobileResolutionPotrait}) and (orientation: portrait) {
        left: 0.5rem;
        right: 0.5rem;
        top: 12.5rem;
        bottom: 0;
    }

    /* Mobile Landscape (max-width: ${mobileResolutionLandscape}) */
    @media only screen and (max-width: ${mobileResolutionLandscape}) and (orientation: landscape) {
    
    }

    /* Tablet Potrait */
    @media only screen and (min-width: ${tabletResolutionMin}) and (max-width: ${tabletResolutionMax}) and (orientation: portrait) {
        left: 0.5rem;
        right: 0.5rem;
        top: 12.5rem;
        bottom: 0;
    }
`;

const MainElement = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 0.8rem;
    height: 100%;
    
    .container-1 {
        overflow: hidden;
        position: relative;
        // margin-top: 6.5rem;
        // padding-bottom: 1.5rem;

        &::-webkit-scrollbar {
            display: none;
        }
        scrollbar-width: none;
    }

    .grid-2 {
        background: blue;
        height: 100%;
        overflow: hidden;
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 0.4rem;

        .test-1 {
            height: 100%;
            overflow: scroll;

            &::-webkit-scrollbar {
                display: none;
            }
            scrollbar-width: none;
        }

        .test-2 {
            background: yellow;
        }
    }

    /* Mobile Potrait (max-width: ${mobileResolutionPotrait}) */
    @media only screen and (max-width: ${mobileResolutionPotrait}) and (orientation: portrait) {
        grid-template-columns: 2fr 0;
        gap: 0;

        .container-1 {
            margin-top: 0;
        }

        .grid-2 {
            display: none;
        }
    }

    /* Mobile Landscape (max-width: ${mobileResolutionLandscape}) */
    @media only screen and (max-width: ${mobileResolutionLandscape}) and (orientation: landscape) {
    
    }

    /* Tablet Potrait */
    @media only screen and (min-width: ${tabletResolutionMin}) and (max-width: ${tabletResolutionMax}) and (orientation: portrait) {
        grid-template-columns: 2fr 0;
        gap: 0;

        .container-1 {
            margin-top: 0;
        }

        .grid-2 {
            display: none;
        }
    }
`;

export {
    DefaultButton,
    LoaderAnimationContainer,
    mobileResolutionPotrait,
    mobileResolutionLandscape,
    tabletResolutionMin,
    tabletResolutionMax,
    ModalBackdrop,
    ModalContainer,
    ModalBox,
    ModalHeader,
    ModalBody,
    ModalFooter,
    DropdownContainer,
    DropdownButton,
    DropdownMenu,
    DropdownItem,
    MainContainer,
    MainBox,
    MainElement
}