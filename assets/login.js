$(document).ready(function () {
  $("#js-form").submit(async (e) => {
    e.preventDefault();
    const email = $("#js-input-email").val();
    const password = $("#js-input-password").val();
    const JWT = await postData(email, password);
    JWT ? window.location.replace("/covid19/chile.html") : error();
  });
});

const postData = async (email, password) => {
  try {
    const response = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      body: JSON.stringify({ email: email, password: password }),
    });
    const { token } = await response.json();
    let aux = false;
    if (token) {
      localStorage.setItem("jwt-token", token);
      aux = token;
    }
    return aux;
  } catch (error) {
    console.log(error);
  }
};

const init = async () => {
  const token = localStorage.getItem("jwt-token");
  if (token) {
    $("#btnsSession").html(`
      <a class="btn btn-dark text-light" href="/covid19/chile.html">
        Situación Chile
      </a>
      <a
        type="button"
        class="btn btn-dark text-light"
        onclick="cerrarSesion()"
      >
        Cerrar Sesión
      </a>
    `);
  } else {
    if ("http://localhost:3000/covid19/" != window.location)
      window.location.href = "/covid19";
  }
};
init();

const cerrarSesion = () => {
  localStorage.clear();
  location.reload();
};

const error = () => {
  $("#js-input-email").val("");
  $("#js-input-password").val("");
  $("#js-input-error").html(
    '<span class="text-danger mb-3">Error al Ingresar</span>'
  );
};
