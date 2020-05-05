const axios = require('axios');

const getClima = async(lat, lon) => {

    const instance = axios.create({
        baseURL: 'https://api.openweathermap.org/data/2.5',
    });

    const response = await instance.get('/weather', {
        params: {
            lat,
            lon,
            appid: 'bef8703e41b2039645f1835b9e47f5da',
            units: 'metric'

        }
    })

    return response.data.main.temp;
}

module.exports = {
    getClima
}