const barra1 = document.getElementById('barra1');

new Chart(barra1, {
  type: 'bar',
  data: {
    labels: ['Tiempo', 'Partidas'],
    datasets: [{
      label: 'Cantidad', // Mantener la palabra "Cantidad"
      data: [12, 19], // Asegúrate de que los datos correspondan a las etiquetas
      backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)'], // Colores menos transparentes
      borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'], // Bordes sólidos
      borderWidth: 1
    }]
  },
  options: {
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
          pointStyle: 'line'
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

const barra2 = document.getElementById('barra2');

new Chart(barra2, {
  type: 'bar',
  data: {
    labels: ['Acertadas', 'Incorrectas'],
    datasets: [{
      label: 'Cantidad', // Mantener la palabra "Cantidad"
      data: [12, 19], // Asegúrate de que los datos correspondan a las etiquetas
      backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)'], // Colores menos transparentes
      borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'], // Bordes sólidos
      borderWidth: 1
    }]
  },
  options: {
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
          pointStyle: 'line'
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});



const barra3 = document.getElementById('barra3');

new Chart(barra3, {
  type: 'doughnut',
  data: {
    labels: ['Categoria 1', 'Categoria 2', 'Categoria 3'],
    datasets: [{
      label: 'Cantidad',
      data: [12, 19, 17], // Cuatro datos correspondientes a las cuatro etiquetas
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)', 
        'rgba(54, 162, 235, 0.5)', 
        'rgba(255, 206, 86, 0.5)' 
    
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)', 
        'rgba(54, 162, 235, 1)', 
        'rgba(255, 206, 86, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

const barra4 = document.getElementById('barra4');

new Chart(barra4, {
  type: 'doughnut',
  data: {
    labels: ['Acertadas', 'Incorrectas'],
    datasets: [{
      label: '# Cantidad',
      data: [12, 19], // Solo dos datos correspondientes a las dos etiquetas
      backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)'], // Colores menos transparentes
      borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'], // Bordes sólidos
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
