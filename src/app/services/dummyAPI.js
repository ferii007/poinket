import axios from 'axios';

const dataOutlet = async (onSuccess, onError) => {
    try {
        const response = await axios.get('/dummyAPI/dataOutletAPI.json');
        if (onSuccess) {
            onSuccess(response.data);
        }
    } catch (error) {
        if (onError) {
            onError(error);
        }
    }
};

export { dataOutlet, }