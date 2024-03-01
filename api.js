import axios from 'axios';

export const useApi = () => {
    const baseURL = 'https://cafe-apostrof.jhdevelopers.eu/api/'; // Replace with actual base URL
    // const storeUser = useStoreUser(); // You need to define useStoreUser function

    return axios.create({
        baseURL,
    });
};
