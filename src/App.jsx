import { useState } from "react";
import "./App.css";
// import { validateInputs}  from "./utils/validateInputs";

function App() {
  const valoresIniciales = {
    email: "",
    contraseña: "",
  };

  const [form, setForm] = useState(valoresIniciales);
  const [error,setError] = useState({})

  const { email, contraseña,} = form;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleBlur = e => {
      if (e.target.value === "" || +e.target.value === 0) {
        setError({
          ...error,
          [e.target.name] : `El campo ${e.target.name} es obligatorio`
        })
      } else{
        setError({
          ...error,
          [e.target.name] : ""
        })
      }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInputs(form)) {
      console.error("Los campos del formulario son obligatorios")
    }else{
      console.log(form)
      setForm(valoresIniciales)
    }
    console.log(form);
    setForm(valoresIniciales);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Formulario</h2>
        <div>
          <label>Email</label>
          <br />
          <input
            name="email"
            type="email"
            placeholder="Juan@gmail.com"
            value={email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          { error.email && <p style={{color:"red", fontSize : "15px"}}>{error.email}</p>}
          <br />
          <br />
        </div>
        <div>
          <label>Contraseña</label>
          <br />
          <input
            name="contraseña"
            type="password"
            placeholder="Ingrese su contraseña"
            value={contraseña}
            onChange={handleChange}
            onBlur={handleBlur}
          />
         { error.contraseña && <p style={{color:"red", fontSize : "15px"}}>{error.contraseña}</p>}
          <br />
          <br />
        </div>
        <br />
        <button
        //  disabled= {validateInputs(form)}
         type="submit">Enviar</button>
      </form>
    </>
  );
}

export default App;
