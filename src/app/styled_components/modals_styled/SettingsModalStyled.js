import styled from 'styled-components';

import {
    mobileResolutionPotrait,
    mobileResolutionLandscape,
    tabletResolutionMin,
    tabletResolutionMax,
} from './../globalStyled';


const SettingsInfoContainer = styled.div`
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
    padding-bottom: 1rem;

    .setting-outlet-icon {
        background-color: var(--third-color);
        border-radius: 50%;
        width: 5rem;
        height: 5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }

    .setting-outlet-icon img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }

    .setting-outlet-info {
        flex: 0 0 80%;
    }
        
    .setting-outlet-header {
        font-size: 1.3rem;
        font-weight: 600;
        display: flex;
        align-items: center;
        flex-wrap: wrap-reverse;
        gap: 0.3rem;
    }

    .setting-outlet-name {
        max-width: 20rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        white-space: normal;
    }

    .setting-outlet-address {
        font-size: 0.8rem;
        font-weight: 600;
        color: rgba(0, 0, 0, 0.5);
        margin-top: 0.3rem;
        max-height: 5rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        white-space: normal;
    }
    
    .setting-staff-name {
        font-size: 1rem;
        font-weight: 500;
        background-color: var(--third-color);
        cursor: pointer;
        padding: 0.1rem 0.4rem; 
        border: 2px solid rgba(0, 0, 0, 0.3);
        border-radius: 0.4rem;
        display: flex;
        align-items: center;
        gap: 0.7rem;
        margin-left: 0.5rem;
    }

    /* Mobile Potrait (max-width: ${mobileResolutionPotrait}) */
    @media only screen and (max-width: ${mobileResolutionPotrait}) and (orientation: portrait) {
        .setting-staff-name {
            margin-left: 0;
        }    
    }

    /* Mobile Landscape (max-width: ${mobileResolutionLandscape}) */
    @media only screen and (max-width: ${mobileResolutionLandscape}) and (orientation: landscape) {
        
    }

    /* Tablet Potrait */
    @media only screen and (min-width: ${tabletResolutionMin}) and (max-width: ${tabletResolutionMax}) and (orientation: portrait) {
        
    }
`;

const SettingsFormContainer = styled.div`
    // padding: 1rem 0;
`;

const SettingsFormGroup = styled.div`
    padding-top: 1rem;
    
    .setting-form-label {
        font-size: 0.8rem;
        font-weight: 600;
        margin-bottom: 0.3rem;
    }
`;

export {
    SettingsInfoContainer,
    SettingsFormContainer,
    SettingsFormGroup
}