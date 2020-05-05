const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const getInfo = async(direccion) => {

    try {
        const coordenadas = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coordenadas.latitud, coordenadas.longitud)

        return `El clima de ${direccion} es de ${temp}`;
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`
    }
};



getInfo(argv.direccion)
    .then(res => console.log(res))
    .catch(err => console.log(err))