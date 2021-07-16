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

export { getData };
