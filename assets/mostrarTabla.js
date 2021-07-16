// Función que despliega la tabla junto con los datos

let paintTable = (datos) =>
{
    let plasmar = document.getElementById('plasmar-tr');

    datos.forEach(e => plasmar.innerHTML +=
        `<tr>
            <td class="align-middle font-weight-bold"> ${e.location} </td>
            <td class="align-middle"> ${e.confirmed} </td>
            <td class="align-middle"> ${e.deaths} </td>
            <td class="align-middle"> ${e.recovered} </td>
            <td class="align-middle"> ${e.active} </td>
            <td> <button type="button" class="btn btn-danger btn-covid" value="${e.location}" data-toggle="modal" data-target="#staticBackdrop"> Ver detalle </button> </td>
        </tr>`
    );
}

export { paintTable };
