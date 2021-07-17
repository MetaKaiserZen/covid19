var barChart,
  barPrin,
  aux = false;

// Función para gráfico principal y los modals
// Variables Paises: viene de consumo de apis getData
// Variable Caja: son dos opciones, una viene del id del canvas de gráfico principal y la otra id viene // del id modal Content(código puesto en el index.html)

const grafico = (paises, caja = "grafico") => {
  let graficoCanvas = document.getElementById(caja);
  let headerCanvas = document.getElementById("headerGrafico");

  let actNum = [],
    conNum = [],
    mueNum = [],
    recNum = [],
    labels = [];

  paises.forEach((pais) => {
    actNum.push(pais.active);
    conNum.push(pais.confirmed);
    mueNum.push(pais.deaths);
    recNum.push(pais.recovered);
    labels.push(pais.location);
  });

  let activos = {
    label: "Casos Activos",
    data: actNum,
    backgroundColor: "#E53935",
  };
  let confirmados = {
    label: "Casos Confirmados",
    data: conNum,
    backgroundColor: "#FDD835",
  };
  let muertos = {
    label: "Casos Muertos",
    data: mueNum,
    backgroundColor: "#E0E0E0",
  };
  let recuperados = {
    label: "Casos Recupedados",
    data: recNum,
    backgroundColor: "#00ACC1",
  };

  if (caja != "grafico") {
    aux && barChart.destroy();
    headerCanvas.innerHTML = `<h2 class="text-center">${labels[0]}</h2>`;
    const data = {
      labels: ["Activos", "Confirmados", "Muertos", "Recuperados"],
      datasets: [
        {
          data: [actNum[0], conNum[0], mueNum[0], recNum[0]],
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(75, 192, 192)",
            "rgb(255, 205, 86)",
            "rgb(201, 203, 207)",
            "rgb(54, 162, 235)",
          ],
        },
      ],
    };

    barChart = new Chart(graficoCanvas, {
      type: "pie",
      data: data,
    });

    aux = true;
  } else {
    var covid = {
      labels: labels,
      datasets: [activos, confirmados, muertos, recuperados],
    };

    barPrin = new Chart(graficoCanvas, {
      type: "bar",
      data: covid,
    });
  }
};

export { grafico };
