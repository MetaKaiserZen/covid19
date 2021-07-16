var data = [];
var activeCase;
let datacovid = (() => {
  const url = "http://localhost:3000/api/total";
  const getData = async () => {
    const resp = await fetch(url);
    data = await resp.json();
    console.log(data);
    return data;
  };
  return getData;
})();
datacovid();
