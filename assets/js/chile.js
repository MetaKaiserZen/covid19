import { apiLogin } from './login.js';
import { getChile } from './consumoApi.js';

var myChart = '';

const initChile = async () =>
{
    $('#modalForm').submit(async (event) =>
    {
        event.preventDefault();

        const toggleNavbar = (iniciar, situacion, cerrar) =>
        {
            $('#iniciarSesion').toggle(iniciar);
            $('#situacionChile').toggle(situacion);
            $('#cerrarSesion').toggle(cerrar);
        }

        const toggleContainer = (paises, chile) =>
        {
            $('#paisesContainer').toggle(paises);
            $('#chileContainer').toggle(chile);
        }

        const email = $('#emailForm').val();
        const password = $('#passwordForm').val();

        await apiLogin(email, password);

        const initLogin = async () =>
        {
            // Si se llama por await se demoran en exceso los datos de Chile

            const token = localStorage.getItem('jwt-token');

            if (token != 'undefined')
            {
                $('#validacionSesion').text('');
                $('#validacionSesion').removeClass('invalid-label');
                $('#validacionContenedor').removeClass('alert alert-danger');
                $('#emailForm').prop('disabled', true);
                $('#passwordForm').prop('disabled', true);
                $('#equisForm').hide();
                $('#entrarForm').prop('disabled', true);

                await getChile(token);

                $('#sesionModal').modal('hide');

                $('#sesionModal').on('hidden.bs.modal', () =>
                {
                    $('#emailForm').prop('disabled', false);
                    $('#passwordForm').prop('disabled', false);
                    $('#equisForm').show();
                    $('#entrarForm').prop('disabled', false);

                    $('#modalForm').trigger('reset');

                    toggleNavbar(false, true, true);
                });
            }
            else
            {
                $('#validacionContenedor').addClass('alert alert-danger');
                $('#validacionSesion').addClass('invalid-label');
                $('#validacionSesion').text('??Datos incorrectos!');
            }
        }

        initLogin();

        $('#homePage').on('click', function()
        {
            toggleContainer(true, false);
        });

        $('#situacionChile').on('click', function()
        {
            toggleContainer(false, true);

            const initChart = () =>
            {
                // Consumir datos desde el Storage

                let chile = JSON.parse(localStorage.getItem('chile-storage'));

                let confirmados = [];
                let muertos = [];
                let recuperados = [];
                let labels = [];

                chile[0].data.forEach((roja) =>
                {
                    confirmados.push(roja.total);
                    labels.push(roja.date);
                });

                chile[1].data.forEach((roja) =>
                {
                    muertos.push(roja.total);
                });

                chile[2].data.forEach((roja) =>
                {
                    recuperados.push(roja.total);
                });

                let ctx = $('#chileChart');

                const data =
                {
                    labels: labels,
                    datasets:
                    [
                        {
                            label: 'Confirmados',
                            data: confirmados,
                            fill: false,
                            borderColor: 'rgb(255, 201, 14)',
                            tension: 0.1
                        },
                        {
                            label: 'Muertos',
                            data: muertos,
                            fill: false,
                            borderColor: 'rgb(192, 192, 192)',
                            tension: 0.1
                        },
                        {
                            label: 'Recuperados',
                            data: recuperados,
                            fill: false,
                            borderColor: 'rgb(153, 217, 234)',
                            tension: 0.1
                        }
                    ]
                };

                // Variable global para evitar cargar nuevamente el gr??fico

                if (myChart === '')
                {
                    new Chart(ctx,
                    {
                        type: 'line',
                        data: data
                    });

                    myChart = 'myChart';
                }
            }

            initChart();
        });

        $('#cerrarSesion').on('click', function()
        {
            localStorage.removeItem('jwt-token');
            localStorage.removeItem('chile-storage');

            toggleNavbar(true, false, false);
            toggleContainer(true, false);
        });
    });
};

export { initChile };

