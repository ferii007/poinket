import {
    HeaderMenuContainer
} from "./../../styled_components/HeaderMenuStyled";

import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';

import momentTimezone from 'moment-timezone';
import moment from 'moment';
import './../../tweaks/momentLocale';

const HeaderMenu = () => {
    const dataOutlet = useSelector((state) => state.dataOutlet);

    const [formattedTime, setFormattedTime] = useState('...');

    useEffect(() => {
        console.log('dataOutlet', dataOutlet);

        moment.locale(dataOutlet.outlet_location_code);

        const updateTime = () => {
            const timeZone = momentTimezone.tz(dataOutlet.outlet_time_zone).format('yy-M-DD HH:mm');
            const time = moment(timeZone).format('dddd, D MMM YYYY - HH:mm');
            setFormattedTime(time);
        };

        updateTime();

        const intervalId = setInterval(() => {
            updateTime();
        }, 1000);

        return () => clearInterval(intervalId);
    }, [dataOutlet])

    return(
        <>
            <HeaderMenuContainer>
                <h1 className="header-outlet-name">
                    {dataOutlet.outlet_name}
                </h1>

                <h4 className="header-outlet-time">
                    <span>{dataOutlet.outlet_line_time} | Line time</span>
                </h4>

                <h4 className="header-outlet-time">
                    <span>{formattedTime} | Local time</span>
                </h4>
            </HeaderMenuContainer>
        </>
    )
}

export default HeaderMenu