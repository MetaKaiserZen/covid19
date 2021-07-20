import { getData, getChile } from "./consumoApi.js";

const initChart = async () => {
  const paises = localStorage.getItem("paises-storage");
  let datos;
  if (paises) {
    datos = JSON.parse(localStorage.getItem("paises-storage"));
  } else {
    datos = await getData();
  }

  // Se rescatan los valores por separado

  const activos = datos.filter((a) => {
    return a.active >= 10000;
  });

  let locations = [];

  for (let i = 0; i < activos.length; i++) {
    locations[i] = activos[i].location;
  }

  let actives = [];

  for (let i = 0; i < activos.length; i++) {
    actives[i] = activos[i].active;
  }

  let confirmed = [];

  for (let i = 0; i < activos.length; i++) {
    confirmed[i] = activos[i].confirmed;
  }

  let deaths = [];

  for (let i = 0; i < activos.length; i++) {
    deaths[i] = activos[i].deaths;
  }

  let recovered = [];

  for (let i = 0; i < activos.length; i++) {
    recovered[i] = activos[i].recovered;
  }

  var ctx = document.getElementById("myChart");

  const data = {
    labels: locations,
    datasets: [
      {
        label: "Casos Activos",
        data: actives,
        backgroundColor: ["rgba(255, 0, 0, 1)"],
      },
      {
        label: "Casos Confirmados",
        data: confirmed,
        backgroundColor: ["rgba(255, 255, 0, 1)"],
      },
      {
        label: "Casos Muertos",
        data: deaths,
        backgroundColor: ["rgba(192, 192, 192, 1)"],
      },
      {
        label: "Casos Recuperados",
        data: recovered,
        backgroundColor: ["rgba(0, 255, 255, 1)"],
      },
    ],
  };

  new Chart(ctx, {
    type: "bar",
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
};

const graficoChile = async () => {
  const chileSt = localStorage.getItem("chile-storage");
  let chile;
  if (chileSt) {
    chile = JSON.parse(localStorage.getItem("chile-storage"));
  } else {
    chile = await getChile();
  }
  let graficoCanvasChile = document.getElementById("graficoChile");
  let conNum = [],
    mueNum = [],
    recNum = [],
    labels = [];

  chile[0].data.forEach((roja) => {
    conNum.push(roja.total);
    labels.push(roja.date);
  });

  chile[1].data.forEach((roja) => {
    mueNum.push(roja.total);
  });

  chile[2].data.forEach((roja) => {
    recNum.push(roja.total);
  });

  var confirmados = {
    label: "Confirmados",
    data: conNum,
    lineTension: 0,
    fill: false,
    borderColor: "orange",
  };

  var muertos = {
    label: "Muertos",
    data: mueNum,
    lineTension: 0,
    fill: false,
    borderColor: "gray",
  };

  var recuperados = {
    label: "Recuperados",
    data: recNum,
    lineTension: 0,
    fill: false,
    borderColor: "blue",
  };

  var speedData = {
    labels: labels,
    datasets: [confirmados, muertos, recuperados],
  };

  var chartOptions = {
    legend: {
      display: true,
      position: "top",
      labels: {
        boxWidth: 80,
        fontColor: "black",
      },
    },
  };

  var lineChart = new Chart(graficoCanvasChile, {
    type: "line",
    data: speedData,
    options: chartOptions,
  });
  $("#loader").html("");
};

export { initChart, graficoChile };
