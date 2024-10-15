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

const ModalBackdrop = styled.div.attrs(({ onClose }) => ({
    onClick: onClose,
}))`
    position: fixed;
    background-color: rgba(0, 0, 0, 0.1);
    z-index: 999;
    width: 100vw;
    height: 100vh;
    overflow: scroll;
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
    border-bottom: 1px solid red;
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
    border-top: 1px solid red;
`;

export {
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
    ModalFooter
}