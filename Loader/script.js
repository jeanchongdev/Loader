window.addEventListener('load', function() {
  var loader = document.querySelector('.loader');
  var content = document.querySelectorAll('.content');

  // Mostrar el loader
  loader.style.display = 'block';

  // Ocultar el loader y mostrar el contenido después de 3 segundos (3000 milisegundos)
  setTimeout(function() {
      loader.style.display = 'none';
      content.forEach(function(element) {
          element.style.display = 'block';
      });
  }, 3000);
});
