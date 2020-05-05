const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const instance = axios.create({
        baseURL: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com',
        headers: { 'X-RapidAPI-Key': 'ae2c1c57fcmsh56a6e7624bd8506p1e7be9jsn4025ebaacd1e' }
    });

    const response = await instance.get('/latlon.php', {
        params: {
            location: dir
        }
    })

    if (response.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = response.data.Results[0];
    const direccion = data.name;
    const latitud = data.lat;
    const longitud = data.lon;

    return {
        direccion,
        latitud,
        longitud
    };
}

module.exports = {
    getLugarLatLng
}