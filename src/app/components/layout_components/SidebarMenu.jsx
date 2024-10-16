import useTranslationHook from './../../tweaks/locales/index';

import { 
    SidebarMenuContainer,
    SidebarMenuList
} from "./../../styled_components/SidebarMenuStyled";

import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';

import { useState } from "react";
import SettingsModal from "../modals/SettingsModal";

const SidebarMenu = () => {
    const { translations } = useTranslationHook();
    const [activeMenu, setActiveMenu] = useState('products');
    const [isSettingsModalVisible, setIsSettingsModalisVisible] = useState(false);

    const toggleSettingsModal = () => setIsSettingsModalisVisible(!isSettingsModalVisible);

    const menu = [
        {
            icon: <ProductionQuantityLimitsOutlinedIcon style={{ fontSize: '1.8rem' }} />,
            name: translations.products,
            active: 'products',
        },
        {
            icon: <Inventory2OutlinedIcon style={{ fontSize: '1.8rem' }} />,
            name: translations.bills,
            active: 'bills',
        },
        {
            icon: <SettingsOutlinedIcon style={{ fontSize: '1.8rem' }} />,
            name: translations.settings,
            active: 'settings',
        }
    ];

    const handleChangeActiveMenu = (currentActive) => {
        if (activeMenu === currentActive) {
            return;
        }

        if (currentActive === 'settings') {
            toggleSettingsModal();

            return;
        }

        setActiveMenu(currentActive);
    }

    return(
        <>
            <SidebarMenuContainer>
                <SidebarMenuList>
                    {menu.map((item, index) => (
                        <li 
                            key={`menu-list-${index}`} 
                            className={`menu-list ${activeMenu === item.active ? 'menu-active' : ''}`} 
                            onClick={() => handleChangeActiveMenu(item.active)}
                        >
                            {item.icon}

                            <span style={{ display: 'block' }}>{item.name}</span>
                        </li>
                    ))}
                </SidebarMenuList>
            </SidebarMenuContainer>

            <SettingsModal
                isVisible={isSettingsModalVisible} toggleSettingsModal={toggleSettingsModal}
            />
        </>
    )
}

export default SidebarMenu