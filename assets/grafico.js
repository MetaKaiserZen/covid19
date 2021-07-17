import { getData } from './consumoApi.js';

const initChart = async () =>
{
    const posts = await getData()

    const activos = posts.filter((post) =>
    {
        return post.active >= 10000
    });

    let locations = [];

    for (let i = 0; i < activos.length; i++)
    {
        locations[i] = activos[i].location
    }

    let actives = [];

    for (let i = 0; i < activos.length; i++)
    {
        actives[i] = activos[i].active
    }

    let confirmed = [];

    for (let i = 0; i < activos.length; i++)
    {
        confirmed[i] = activos[i].confirmed
    }

    let deaths = [];

    for (let i = 0; i < activos.length; i++)
    {
        deaths[i] = activos[i].deaths
    }

    let recovered = [];

    for (let i = 0; i < activos.length; i++)
    {
        recovered[i] = activos[i].recovered
    }

    var ctx = document.getElementById('myChart');

    const data =
    {
        labels: locations,
        datasets:
        [
            {
                label: 'Casos Activos',
                data: actives,
                backgroundColor:
                [
                    'rgba(255, 0, 0, 1)'
                ]
            },
            {
                label: 'Casos Confirmados',
                data: confirmed,
                backgroundColor:
                [
                    'rgba(255, 255, 0, 1)'
                ]
            },
            {
                label: 'Casos Muertos',
                data: deaths,
                backgroundColor:
                [
                    'rgba(192, 192, 192, 1)'
                ]
            },
            {
                label: 'Casos Recuperados',
                data: recovered,
                backgroundColor:
                [
                    'rgba(0, 255, 255, 1)'
                ]
            }
        ]
    }

    new Chart(ctx,
    {
        type: 'bar',
        data: data,
        options:
        {
            scales:
            {
                y:
                {
                    beginAtZero: true
                }
            }
        }
    });
}

export { initChart };
