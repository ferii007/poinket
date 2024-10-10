import { 
    SidebarMenuContainer,
    SidebarMenuList
} from "./../../styledComponents/SidebarMenuStyled";

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { useState } from "react";

const SidebarMenu = () => {
    const [activeMenu, setActiveMenu] = useState('home');

    const menu = [
        {
            icon: <HomeOutlinedIcon style={{ fontSize: '1.8rem' }} />,
            name: 'Home',
            active: 'home',
        },
        {
            icon: <SettingsOutlinedIcon style={{ fontSize: '1.8rem' }} />,
            name: 'Setting',
            active: 'setting',
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

                            <span>{item.name}</span>
                        </li>
                    ))}
                </SidebarMenuList>
            </SidebarMenuContainer>
        </>
    )
}

export default SidebarMenu