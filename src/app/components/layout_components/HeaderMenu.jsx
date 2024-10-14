import {
    HeaderMenuContainer
} from "./../../styledComponents/HeaderMenuStyled";

import { useEffect } from "react";

import { useSelector } from 'react-redux';

const HeaderMenu = () => {
    const dataOutlet = useSelector((state) => state.dataOutlet);

    useEffect(() => {
        console.log('dataOutlet', dataOutlet);
    }, [dataOutlet])

    return(
        <>
            <HeaderMenuContainer>
                <h1 className="header-outlet-name">
                    {dataOutlet.outlet_name}
                </h1>

                <h4 className="header-outlet-time">
                    Sunday, June 20 2021
                </h4>
            </HeaderMenuContainer>
        </>
    )
}

export default HeaderMenu