let paintTable = (datos) =>{
    let plasmar = document.getElementById("plasmar-tr");
    datos.forEach(e =>
        plasmar.innerHTML +=
        `
            <tr>
                <td class="align-middle font-weight-bold"> ${e.location} </td>
                <td class="align-middle"> ${e.confirmed} </td>
                <td class="align-middle"> ${e.deaths} </td>
                <td class="align-middle"> ${e.recovered} </td>
                <td class="align-middle"> ${e.active} </td>
                <td> 
                     <button type="submit" class="btn btn-danger"> Ver detalle </button> 
                </td>
           </tr>`
    );
}
export { paintTable }