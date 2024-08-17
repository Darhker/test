// script.js
const fechaEvento = new Date('2024-12-20T12:00:00'); // Cambia la fecha y hora del evento

function actualizarContador() {
    const ahora = new Date();
    const tiempoRestante = fechaEvento - ahora;

    const segundos = Math.floor(tiempoRestante / 1000) % 60;
    const minutos = Math.floor(tiempoRestante / 1000 / 60) % 60;
    const horas = Math.floor(tiempoRestante / 1000 / 60 / 60) % 24;
    const dias = Math.floor(tiempoRestante / 1000 / 60 / 60 / 24);

    document.getElementById('reloj').textContent = `${dias} días ${horas}h ${minutos}m ${segundos}s`;
}

actualizarContador();
setInterval(actualizarContador, 1000);
