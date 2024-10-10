import styled from 'styled-components';

const SidebarMenuContainer = styled.div`
    padding: 0;
    background-color: var(--secondary-color);
    position: fixed;
    top: 0;
    bottom: 0;
    overflow: hidden;
    width: 5rem;
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
`

export {
    SidebarMenuContainer,
    SidebarMenuList
}