
const $tiempo = document.querySelector('.tiempo'),
$fecha = document.querySelector('.fecha');

function digitalClock(){
  let f = new Date(),
  dia = f.getDate(),
  mes = f.getMonth(),
  anio = f.getFullYear(),
  diaSemana = f.getDay();

let timeString = f.toLocaleTimeString();
  $tiempo.innerHTML = timeString;



}
setInterval(() => {
  digitalClock()
}, 1000);