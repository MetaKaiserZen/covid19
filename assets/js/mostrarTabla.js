import { getCountry } from "./consumoApi.js";

// Función que despliega la tabla junto con los datos

let paintTable = (datos) => {
  let plasmar = document.getElementById("plasmar-tr");

  datos.forEach(
    (e) =>
      (plasmar.innerHTML += `<tr>
            <td class="align-middle font-weight-bold"> ${e.location} </td>
            <td class="align-middle"> ${e.confirmed} </td>
            <td class="align-middle"> ${e.deaths} </td>
            <td class="align-middle"> ${e.recovered} </td>
            <td class="align-middle"> ${e.active} </td>
            <td> <button type="button" class="btn btn-danger btn-covid" value="${e.location}" data-toggle="modal" data-target="#staticBackdrop"> Ver detalle </button> </td>
        </tr>`)
  );

  // Se levanta un Modal que muestra un gráfico

  $(".btn-covid").on("click", function () {
    let country = $(this).val();

    const initModal = async () => {
      const datos = await getCountry(country);

      // Validación para mostrar datos si no encuentra el país

      if (!datos.location) {
        datos.location = "Unknown";
      } else {
        let ctx = document.getElementById("myModal");

        const data = {
          labels: ["Activos", "Muertos", "Recuperados", "Confirmados"],
          datasets: [
            {
              label: "Detalles",
              data: [
                datos.active,
                datos.deaths,
                datos.recovered,
                datos.confirmed,
              ],
              fill: true,
              backgroundColor: [
                "rgba(255, 0, 0, 1)",
                "rgba(192, 192, 192, 1)",
                "rgba(0, 255, 255, 1)",
                "rgba(255, 255, 0, 1)",
              ],
            },
          ],
        };

        let myChart = new Chart(ctx, {
          type: "pie",
          data: data,
          options: {
            elements: {
              line: {
                borderWidth: 3,
              },
            },
          },
        });

        // Se destruye el gráfico al cerrar el Modal

        $("#staticBackdrop").on("hidden.bs.modal", function () {
          $("#staticBackdropLabel").text("");

          myChart.destroy();
        });
      }

      $("#staticBackdropLabel").text(`Estadísticas de ${datos.location}`);
    };

    initModal();
  });
};

export { paintTable };
