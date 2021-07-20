const postLogin = async (email, password) => {
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

export { error, cerrarSesion, postLogin };
