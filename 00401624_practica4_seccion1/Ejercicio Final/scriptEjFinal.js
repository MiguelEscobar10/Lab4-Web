function obtenerActividadDelDia(dia) {
  let actividad;
  
  switch (dia.toLowerCase()) {
    case 'lunes':
      actividad = "Atender un cliente específico.";
      break;
    case 'martes':
      actividad = "Visitar una agencia fuera de la ciudad.";
      break;
    case 'miércoles':
      actividad = "Llevar a mi hija al ballet (balé).";
      break;
    case 'jueves':
      actividad = "Priorizar entregas de desarrollo.";
      break;
    case 'viernes':
      actividad = "Atender problemas de manera remota.";
      break;
    case 'sábado':
      actividad = "Hacer lo que mi esposa quiera.";
      break;
    case 'domingo':
      actividad = "¡Día libre! Hoy no tienes actividades programadas.";
      break;
    default:
      actividad = "No se ha proporcionado un día válido.";
      break;
  }
  
  return actividad;
}



document.addEventListener('DOMContentLoaded', () => {

  const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const fechaActual = new Date();
  const nombreDiaActual = dias[fechaActual.getDay()]; 
  
  const actividadDeHoy = obtenerActividadDelDia(nombreDiaActual);
  
  const divRecordatorio = document.getElementById('recordatorio-diario');
  
  divRecordatorio.innerHTML = `
    <p>
      Hoy es <span class="dia-semana">${nombreDiaActual}</span>.
      <span class="actividad">${actividadDeHoy}</span>
    </p>
  `;

});