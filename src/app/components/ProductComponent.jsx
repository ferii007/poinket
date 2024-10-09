
import momentTimezone from 'moment-timezone';
import moment from 'moment';
import '../tweaks/momentLocale';
import { useEffect, useState } from 'react';

const ProductComponent = () => {
    const [formattedTime, setFormattedTime] = useState('');

    useEffect(() => {
        moment.locale('id');

        const timeZone = momentTimezone.tz("Asia/Jayapura").format('yy-M-DD HH:mm');
        const time = moment(timeZone).format('dddd, D MMM YYYY - HH:mm');

        setFormattedTime(time)
    }, [])

    return(
        <>
            <h1>Hello World {formattedTime}</h1>
        </>
    )
}

export default ProductComponent