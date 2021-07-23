import { initChart } from './mostrarGrafico.js';
import { getData } from './consumoApi.js';
import { paintTable } from './mostrarTabla.js';
import { initChile } from './chile.js';

initChart();

const datos = await getData();

paintTable(datos);

initChile();
