import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8001/';

export const getAllProducts = async () => {
    const response = await axios.get(`${BASE_URL}api/products/`);
    return response.data;
};

export const getAllProductsbyid = async (id) => {
    const response = await axios.get(`${BASE_URL}api/product-detail/${id}/`)
    return response.data;


}
