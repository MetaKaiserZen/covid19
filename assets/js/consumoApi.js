// Consulta a los casos totales

const getData = async () => {
  try {
    const resp = await fetch("http://localhost:3000/api/total");

    const { data } = await resp.json();

    const paisesSt = localStorage.getItem("paises-storage");
    if (!paisesSt) localStorage.setItem("paises-storage", JSON.stringify(data));

    return data;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

// Consulta a los casos por países

const getCountry = async (country) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/countries/${country}`
    );

    const { data } = await response.json();

    return data;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

// Consulta a los casos de Chile

const getChile = async () => {
  const token = localStorage.getItem("jwt-token");
  let urls = [
    "http://localhost:3000/api/confirmed",
    "http://localhost:3000/api/deaths",
    "http://localhost:3000/api/recovered",
  ];
  try {
    const response = await Promise.all(
      urls.map((url) =>
        fetch(url, {
          method: "GET",
          headers: {
            Authorization: "Bearer " + token,
          },
        })
      )
    ).then((results) => Promise.all(results.map((r) => r.json())));
    const chileSt = localStorage.getItem("chile-storage");
    if (!chileSt)
      localStorage.setItem("chile-storage", JSON.stringify(response));
    return response;
  } catch (error) {
    console.error(error);
  }
};

export { getData, getCountry, getChile };
