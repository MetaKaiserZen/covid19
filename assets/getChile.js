import { graficoChile } from "./graficoChile.js";

const getChile = async () => {
  Promise.all([
    fetch("http://localhost:3000/api/confirmed", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    }),
    fetch("http://localhost:3000/api/deaths", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    }),
    fetch("http://localhost:3000/api/recovered", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    }),
  ])
    .then((responses) =>
      Promise.all(responses.map((response) => response.json()))
    )
    .then((data) => {
      graficoChile(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export { getChile };
