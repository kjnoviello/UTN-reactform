import { useFormik } from "formik";
import { Button } from "react-bootstrap";
import { LoginSchema } from "./LoginSchema";
import "./Login.css";

const initialValues = {
  nombre: "",
  apellido: "",
  email: "",
  telefono: "",
  recontraseña: "",
  contraseña: "",
};

const Login = () => {
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    onSubmit: (values, action) => {
        alert("Bienvenido");
      action.resetForm();
    },
  });

  return (
    <div>
      <section
        className="p-5 w-100 sectionDiv">
        <div className="row">
          <div className="col-12">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mt-4">Log in</p>
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col text-left">
                          <label htmlFor="nombre" className="form-label">
                            Nombre
                          </label>
                          <input
                            id="nombre"
                            name="nombre"
                            className="form-control"
                            value={values.nombre}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.nombre && touched.nombre ? (
                            <small className="text-danger mt-1">
                              {errors.nombre}
                            </small>
                          ) : null}
                        </div>
                        <div className="col text-left">
                          <label htmlFor="apellido`" className="form-label">
                            Apellido
                          </label>
                          <input
                            id="apellido"
                            name="apellido"
                            className="form-control"
                            value={values.apellido}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.apellido && touched.apellido ? (
                            <small className="text-danger mt-1">
                              {errors.apellido}
                            </small>
                          ) : null}
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col text-left">
                          <label htmlFor="nombre" className="form-label">
                            Email
                          </label>
                          <input
                            id="email"
                            name="email"
                            className="form-control"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.email && touched.email ? (
                            <small className="text-danger mt-1">
                              {errors.email}
                            </small>
                          ) : null}
                        </div>
                      </div>
                      <div className="col text-left">
                          <label htmlFor="telefono" className="form-label">
                            Teléfono
                          </label>
                          <input
                            id="telefono"
                            name="telefono"
                            className="form-control"
                            value={values.telefono}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="number"
                          />
                          {errors.telefono && touched.telefono ? (
                            <small className="text-danger mt-1">
                              {errors.telefono}
                            </small>
                          ) : null}
                        </div>
                      <div className="row mt-3">
                        <div className="col text-left">
                          <label htmlFor="nombre" className="form-label">
                            Contraseña
                          </label>
                          <input
                            id="contraseña"
                            name="contraseña"
                            className="form-control"
                            value={values.contraseña}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="password"
                          />
                          {errors.contraseña && touched.contraseña ? (
                            <small className="text-danger mt-1">
                              {errors.contraseña}
                            </small>
                          ) : null}
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col text-left">
                          <label htmlFor="nombre" className="form-label">
                            Confirme contraseña
                          </label>
                          <input
                            id="recontraseña"
                            name="recontraseña"
                            className="form-control"
                            value={values.recontraseña}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="password"
                          />
                          {errors.recontraseña && touched.recontraseña ? (
                            <small className="text-danger mt-1">
                              {errors.recontraseña}
                            </small>
                          ) : null}
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col text-right actionButtons">
                          <Button
                            variant="secondary"
                            size="sm"
                            onClick={resetForm}
                          >
                            Limpiar
                          </Button>
                          <Button
                            variant="primary"
                            size="sm"
                            onClick={handleSubmit}
                            >
                            Ingresar
                          </Button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          <footer>
            <p className="text-center h3 fw-bold mb-5 mt-4">Integrantes: GRUPO K</p>
          </footer>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;