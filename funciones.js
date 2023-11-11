

/* código JavaScript para manejar la apertura y cierre de la versión ampliada de los certiifxc*/

document.addEventListener('DOMContentLoaded', function () {
    const certificados = document.querySelectorAll('.certificado');
    const certificadoAmpliado = document.querySelector('.certificado-ampliado');
  
    certificados.forEach(function (certificado) {
      certificado.addEventListener('click', function () {
        const imagenCertificado = certificado.querySelector('img');
        const imagenAmpliada = certificadoAmpliado.querySelector('img');
  
        imagenAmpliada.src = imagenCertificado.src;
        certificadoAmpliado.style.display = 'flex';
      });
    });
  
    certificadoAmpliado.addEventListener('click', function () {
      certificadoAmpliado.style.display = 'none';
    });
  });
  