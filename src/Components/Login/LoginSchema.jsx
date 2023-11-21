import * as Yup from "yup";

export const LoginSchema = Yup.object({
  email: Yup.string().email().required("El email es necesario"),
  nombre: Yup.string().min(2).max(20).required("El nombre debe ser de al menos dos letras"),
  apellido: Yup.string().min(2).max(20).required("El apeliido es necesario"),
  telefono: Yup.number().min(6).required("El teléfono es necesario"),
  contraseña: Yup.string().min(6).required("Ingrese su contraseña"),
  recontraseña: Yup.string()
    .required("Confirme ingresando su contraseña")
    .oneOf([Yup.ref("contraseña"), null], "Las contraseñas deben coincidir"),
});