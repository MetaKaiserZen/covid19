import { graficoChile } from "./mostrarGrafico.js";

const hito2 = async () => {
  $("#contenido").html(`
    <!-- Container -->
    <div class="container">
      <div class="d-flex align-items-center justify-content-center" id="loader">
        <div class="lds-facebook"><div></div><div></div><div></div></div>
        <h2>Cargando</h2>
      </div>
      <canvas id="graficoChile" width="300" height="150" class="py-5"></canvas>
    </div>
  `);
  graficoChile();
};

const menuChile = () => {
  $("#menu").html(`
    <li class="nav-item">
      <a class="nav-link btn btn-dark" href="#" id="homeBtn">Home</a>
    </li>
    <li class="nav-item">
      <a
        class="nav-link btn btn-dark" id="chileBtn"
        >Situación Chile</a
      >
    </li>
    <li class="nav-item">
      <a
        class="nav-link btn btn-dark" id="cerrarBtn"
        >Cerrar Sesión</a
      >
    </li>
  `);
};

export { hito2, menuChile };
