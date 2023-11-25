import config from '../supabase/config.js'
const Modelo = {
    async registroDatos(nombre, apellido, correo, telefono){
        const datos_insertar = {
             nombres: nombre,
             apellidos: apellido,
             correo: correo,
             telefono: telefono,
         }
         const rest = await axios({
             method: 'POST',
             url: 'https://xjztrplrkyssesmkzaae.supabase.co/rest/v1/Usuarios-Educacion',
             data: datos_insertar,
             headers: config.headers
         });
 
         return rest;
     }

}
export default Modelo