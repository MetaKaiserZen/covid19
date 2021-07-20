import { hito1, menuHome } from "./home.js";
import { hito2, menuChile } from "./chile.js";
import { postLogin, error, cerrarSesion } from "./login.js";

$(document).ready(() => {
  init();
  $("#ingresarBtn").click(async (e) => {
    e.preventDefault();
    const email = $("#js-input-email").val();
    const password = $("#js-input-password").val();
    const JWT = await postLogin(email, password);
    JWT ? init() : error();
    location.reload();
  });
  $("#homeBtn").click(async (e) => {
    e.preventDefault();
    await hito1();
  });
  $("#chileBtn").click(async (e) => {
    e.preventDefault();
    await hito2();
  });
  $("#cerrarBtn").click((e) => {
    e.preventDefault();
    cerrarSesion();
  });
});

const init = async () => {
  const token = localStorage.getItem("jwt-token");
  if (token) {
    hito2();
    menuChile();
  } else {
    hito1();
    menuHome();
  }
};
