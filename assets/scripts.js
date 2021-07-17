import { initChart } from './grafico.js';
import { getData } from './consumoApi.js';
import { paintTable } from './mostrarTabla.js';

initChart();

const datos = await getData();

paintTable(datos);
