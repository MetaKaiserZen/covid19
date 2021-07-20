const graficoChile = (chile) => {
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
};

export { graficoChile };
