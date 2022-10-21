import "./style.css";

window.onload = function() {
  //write your code here
  const excusa = document.getElementById("excuse");
  excusa.innerHTML = generarExcusa();
};
function generarExcusa() {
  let quien = ["Mi perro", "Mi cuñado", "La gata", "El vecino"];
  let accion = ["se ha comido", "ha tirado", "ha roto", "ha quemado"];
  let que = ["mis deberes", "la televisión", "la moto", "el ordenador"];
  let cuando = [
    "esta misma mañana.",
    "durante la comida.",
    "cuando estaba a punto de salir de casa.",
    "por la noche."
  ];

  let indiceQuien = Math.floor(Math.random() * quien.length);
  let indiceAccion = Math.floor(Math.random() * accion.length);
  let indiceQue = Math.floor(Math.random() * que.length);
  let indiceCuando = Math.floor(Math.random() * cuando.length);

  return (
    quien[indiceQuien] +
    " " +
    accion[indiceAccion] +
    " " +
    que[indiceQue] +
    " " +
    cuando[indiceCuando]
  );
}
