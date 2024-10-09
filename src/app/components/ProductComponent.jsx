import moment from 'moment-timezone';

const currentDate = moment.tz("Asia/Jayapura").format('YYYY-MM-DD HH:mm:ss');

const ProductComponent = () => {
    return(
        <>
            <h1>Hello World {currentDate}</h1>
        </>
    )
}

export default ProductComponent