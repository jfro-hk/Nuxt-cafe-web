import axios from 'axios';
import config from "./config.js";
export const useApi = () => {
    const baseURL = `${config.api}/`; // Replace with actual base URL
    // const storeUser = useStoreUser(); // You need to define useStoreUser function

    return axios.create({
        baseURL,
    });
};
