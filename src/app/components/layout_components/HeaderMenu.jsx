import {
    HeaderMenuContainer
} from "./../../styled_components/HeaderMenuStyled";

import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';

import momentTimezone from 'moment-timezone';
import moment from 'moment';
import './../../tweaks/momentLocale';
import useTranslationHook from './../../tweaks/locales/index';

const HeaderMenu = () => {
    const { translations } = useTranslationHook();
    const dataLogin = useSelector((state) => state.dataLogin);
    const dataFromLocalStorage = useSelector((state) => state.dataFromLocalStorage);

    const [formattedTime, setFormattedTime] = useState('...');

    const updateTime = () => {
        const timeZone = momentTimezone.tz(dataLogin.outlet_time_zone).format('yy-M-DD HH:mm');
        const time = moment(timeZone).format('dddd, D MMM YYYY - HH:mm');
        setFormattedTime(time);
    };

    useEffect(() => {
        moment.locale(dataFromLocalStorage.languageData.lang_code);
        updateTime();
    }, [dataFromLocalStorage])

    useEffect(() => {
        updateTime();

        const intervalId = setInterval(() => {
            updateTime();
        }, 1000);

        return () => clearInterval(intervalId);
    }, [dataLogin])

    return(
        <>
            <HeaderMenuContainer>
                <h1 className="header-outlet-name">
                    {dataLogin.outlet_name}
                </h1>

                <h4 className="header-outlet-time">
                    <span>{dataLogin.outlet_line_time} | {translations.line_time}</span>
                </h4>

                <h4 className="header-outlet-time">
                    <span>{formattedTime} | {translations.local_time}</span>
                </h4>
            </HeaderMenuContainer>
        </>
    )
}

export default HeaderMenu