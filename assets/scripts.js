import { getData} from './consumoApi.js'
import { paintTable} from './mostrarTabla.js'

// $(document).ready( async function() {
// })

const datos = await getData();
paintTable(datos);