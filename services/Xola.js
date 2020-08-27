const { default: Axios } = require('axios');

import axios from 'axios';

const client = axios.create({
    baseURL: 'https://sandbox.xola.com/api',
});

const Xola = {
    async getButton(id) {
        const { data } = await client.get(`/buttons/${id}`, { params: { expand: 'product' } });
        return data;
    },
};

export default Xola;
