import { getChile } from "./getChile.js";

$(document).ready(async function () {
  const data = await getChile();
});
