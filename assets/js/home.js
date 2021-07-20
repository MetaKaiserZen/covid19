import { initChart } from "./mostrarGrafico.js";
import { getData } from "./consumoApi.js";
import { paintTable } from "./mostrarTabla.js";

const hito1 = async () => {
  $("#contenido").html(`
  <!-- Modal Login-->
  <div class="modal fade" data-backdrop="static" id="loginModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <form id="">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Iniciar Sesión</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M10.5 5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm.061 3.073a4 4 0 10-5.123 0 6.004 6.004 0 00-3.431 5.142.75.75 0 001.498.07 4.5 4.5 0 018.99 0 .75.75 0 101.498-.07 6.005 6.005 0 00-3.432-5.142z"></path></svg>
                </span>
              </div>
              <input type="text" class="form-control" placeholder="Usuario" aria-label="Username" aria-describedby="basic-addon1" id="js-input-email">
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M6.5 5.5a4 4 0 112.731 3.795.75.75 0 00-.768.18L7.44 10.5H6.25a.75.75 0 00-.75.75v1.19l-.06.06H4.25a.75.75 0 00-.75.75v1.19l-.06.06H1.75a.25.25 0 01-.25-.25v-1.69l5.024-5.023a.75.75 0 00.181-.768A3.995 3.995 0 016.5 5.5zm4-5.5a5.5 5.5 0 00-5.348 6.788L.22 11.72a.75.75 0 00-.22.53v2C0 15.216.784 16 1.75 16h2a.75.75 0 00.53-.22l.5-.5a.75.75 0 00.22-.53V14h.75a.75.75 0 00.53-.22l.5-.5a.75.75 0 00.22-.53V12h.75a.75.75 0 00.53-.22l.932-.932A5.5 5.5 0 1010.5 0zm.5 6a1 1 0 100-2 1 1 0 000 2z"></path></svg>
                </span>
              </div>
              <input type="password" class="form-control" placeholder="Contraseña" aria-label="Username" aria-describedby="basic-addon2" id="js-input-password">
            </div>
            <div id="js-input-error"></div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
            <button type="submit" class="btn btn-primary" id="ingresarBtn">Ingresar</button>
          </div>
        </div>
      </div>
    </form>
  </div>
  
  <!-- Modal Contenido-->
  <div
    class="modal fade"
    id="staticBackdrop"
    data-backdrop="static"
    data-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel"></h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span>&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <canvas id="myModal" width="400" height="400"></canvas>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-dismiss="modal"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Container -->
  <div class="container">
    <canvas id="myChart" width="300" height="150" class="py-5"></canvas>
    <table class="table table-striped table-hover shadow">
      <thead class="thead-dark">
        <tr>
          <th scope="col">País</th>
          <th scope="col">Confirmados</th>
          <th scope="col">Muertos</th>
          <th scope="col">Recuperados</th>
          <th scope="col">Activos</th>
          <th scope="col">Gráfico</th>
        </tr>
      </thead>
      <tbody id="plasmar-tr"></tbody>
    </table>
  </div>`);
  initChart();
  const pais = localStorage.getItem("paises-storage");
  let datos;
  if (pais) {
    datos = JSON.parse(localStorage.getItem("paises-storage"));
  } else {
    datos = await getData();
  }
  paintTable(datos);
};

const menuHome = () => {
  $("#menu").html(`
    <li class="nav-item">
      <a class="nav-link btn btn-dark" href="/covid19">Home</a>
    </li>
    <li class="nav-item">
      <a
        class="nav-link btn btn-dark"
        data-toggle="modal"
        data-target="#loginModal"
        >Iniciar Sesión</a
      >
    </li>
  `);
};

export { hito1, menuHome };
