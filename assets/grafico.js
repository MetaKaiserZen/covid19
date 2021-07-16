var barChart,
  barPrin,
  aux = false;

// Función para gráfico principal y los modals
// Variables Paises: viene de consumo de apis getData
// Variable Caja: son dos opciones, una viene del id del canvas de gráfico principal y la otra id viene // del id modal Content(código puesto en el index.html)

const grafico = (paises, caja = "grafico") => {
  var graficoCanvas = document.getElementById(caja);

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

  var covid = {
    labels: labels,
    datasets: [activos, confirmados, muertos, recuperados],
  };

  if (caja != "grafico") {
    aux && barChart.destroy();
    barChart = new Chart(graficoCanvas, {
      type: "bar",
      data: covid,
    });
    aux = true;
  } else {
    barPrin = new Chart(graficoCanvas, {
      type: "bar",
      data: covid,
    });
  }
};

export { grafico };
