import Modelo from "../Modelo/Modelo-Formulario.js"
import Vista from "../Vista/index.js"
const Controlador ={
    async insertarDatos(nombre,  apellido,  correo,  telefono){
        try{
            const res = await Modelo.registroDatos(nombre, apellido, correo, telefono)
            let mensaje = "Los datos fueron insertados correctamente"
            Vista.mostrarAlertaSatisfactorio(mensaje)
        }catch(error){
            let mensaje = "Los datos  no fueron insertados"
            Vista.mostrarMensajeError(mensaje);
            console.log(error)
            
        }
    },
    transitionSmooth: function () {

        const smoothScrollLinks = document.getElementsByClassName('smooth-scroll');
        // Itera sobre los enlaces
        for (let i = 0; i < smoothScrollLinks.length; i++) {
          // Agrega un evento de clic a cada enlace
          smoothScrollLinks[i].addEventListener('click', function (event) {
            event.preventDefault(); // Evita el comportamiento predeterminado del enlace
            // Obtiene el destino del enlace a través del atributo href
            var target = this.getAttribute('href');
            // Utiliza el método 'scrollIntoView' para desplazarse suavemente hacia el destino
            document.querySelector(target).scrollIntoView({
              behavior: 'smooth'
            });
          });
        }
      },
      clickBoton: function(){
        Vista.registrarUsuario()
      }

}
export default Controlador