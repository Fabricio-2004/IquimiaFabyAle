document.addEventListener('DOMContentLoaded', function() {
    
    const boton = document.getElementById('BotonV1');
    boton.addEventListener('click', function() {
      window.location.href = 'ranking.html';
    });
  
    const boton2 = document.getElementById('BotonV2');
    boton2.addEventListener('click', function() {
      window.location.href = 'tablausuarios.html';
    });

    const boton3 = document.getElementById('BotonV3');
    boton3.addEventListener('click', function() {
      window.location.href = 'estadisticas.html';
    });
  
  });