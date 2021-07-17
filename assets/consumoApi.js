// Consulta a los casos totales

const getData = async () =>
{
    try
    {
        const resp = await fetch('http://localhost:3000/api/total');

        const {data} = await resp.json();

        return data;
    }
    catch (error)
    {
        console.error(`Error: ${error}`);
    }
} 

// Consulta a los casos por países

const getCountry = async (country) =>
{
    try
    {
        const response = await fetch(`http://localhost:3000/api/countries/${country}`);

        const {data} = await response.json();

        return data;
    }
    catch (error)
    {
        console.error(`Error: ${error}`);
    }
}

export { getData, getCountry };
