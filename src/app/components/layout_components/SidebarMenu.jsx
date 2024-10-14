import { 
    SidebarMenuContainer,
    SidebarMenuList
} from "./../../styledComponents/SidebarMenuStyled";

import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';

import { useState } from "react";

const SidebarMenu = () => {
    const [activeMenu, setActiveMenu] = useState('products');

    const menu = [
        {
            icon: <ProductionQuantityLimitsOutlinedIcon style={{ fontSize: '1.8rem' }} />,
            name: 'Products',
            active: 'products',
        },
        {
            icon: <Inventory2OutlinedIcon style={{ fontSize: '1.8rem' }} />,
            name: 'Bills',
            active: 'bills',
        },
        {
            icon: <SettingsOutlinedIcon style={{ fontSize: '1.8rem' }} />,
            name: 'Settings',
            active: 'settings',
        }
    ];

    const handleChangeActiveMenu = (currentActive) => {
        if (activeMenu === currentActive) {
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
        </>
    )
}

export default SidebarMenu