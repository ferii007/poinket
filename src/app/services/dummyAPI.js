import axios from 'axios';

const dataOutlet = async (onSuccess, onError, onFinally) => {
    try {
        const response = await axios.get('/dummyAPI/dataOutletAPI.json');
        if (onSuccess) {
            onSuccess(response.data);
        }
    } catch (error) {
        if (onError) {
            onError(error);
        }
    } finally {
        if (onFinally) {
            onFinally();
        }
    }
};

export { dataOutlet, }