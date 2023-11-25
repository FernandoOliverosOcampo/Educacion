import Controlador from "../Controlador/controlador-formulario.js";
const Vista = {
  registrarUsuario() {
    const buttoRegistrar = document.getElementById('enviar');
    buttoRegistrar.addEventListener('click', () => {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      swalWithBootstrapButtons.fire({
        title: '¿Estás seguro?',
        text: 'Deseas ingresar los datos a la BD',
        icon: 'warning',
        html: `
            <div style="text-align: left;">
                <b>Nombre:</b> ${nombre.value}<br>
                <b>Apellido:</b> ${apellido.value}<br>
                <b>Correo:</b> ${correo.value}<br>
                <b>Telefono:</b> ${telefono.value}<br>
            </div>
            `,
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          const nombre = document.getElementById('nombre').value;
          const apellido = document.getElementById('apellido').value;
          const correo = document.getElementById('correo').value;
          const telefono = document.getElementById('telefono').value;
          // Verificar campos vacíos
          if (nombre === '' || apellido === '' || correo === '' || telefono === '') {
            Swal.fire({
              icon: 'error',
              title: 'Campos vacíos',
              text: 'Por favor, completa todos los campos.',
            });
            return;
          }
          Controlador.insertarDatos(nombre, apellido, correo, telefono);
          document.getElementById('nombre').value = '';
          document.getElementById('apellido').value = '';
          document.getElementById('correo').value = '';
          document.getElementById('telefono').value = '';

        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            'Cancelado',
            'No se ha ingresado nada',
            'error'
          );
        }
      });
    })
  },
  mostrarMensajeError(mensaje) {
    Swal.fire({
      icon: 'error',
      title: 'Algo salió mal',
      text: mensaje,
    })
  },

  mostrarAlertaSatisfactorio(mensaje) {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: mensaje,
      showConfirmButton: false,
      timer: 1500
    })
  },
  motrarElmentosPagina: function () {
    const date = new Date();
    const año = date.getFullYear();
    const footer = document.getElementById("contenido-footer");
    const contenidoFooter = document.createElement("span");
    contenidoFooter.innerHTML = `<p id="texto_fecha"> &copy Grupo Equiti - ${año}</p>`;
    footer.appendChild(contenidoFooter);
  },
}
export default Vista
document.addEventListener('DOMContentLoaded', function () {

  /*CONTROLADOR*/
  Vista.motrarElmentosPagina()
  Controlador.transitionSmooth();
  Controlador.clickBoton()

})