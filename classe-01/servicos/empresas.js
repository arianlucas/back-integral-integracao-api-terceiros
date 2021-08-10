const axios = require("axios");

const instanciaAxios = axios.create({
    baseURL: 'https://companyenrichment.abstractapi.com/v1/',
    params: {
        api_key: '0edd6f53159e4cc797688e8e17280578'
    }
})


module.exports = instanciaAxios;