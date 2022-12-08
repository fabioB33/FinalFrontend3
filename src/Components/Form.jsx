import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();

const exp =/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/ ;

  const handleChange = (event) => {
    event.preventDefault();
    if ((name.length > 5) && (email !== exp)) {
      alert(`Gracias ${name}, te contactaremos cuanto antes vía mail`);
    }else{
      alert("Error, Por favor verifique su información nuevamente")
      setEmail('')
      setName('')
      
    }
    event.target.reset()
    
  };

  return (
    <div>
      <h1>Formulario de Contacto</h1>
      <form onSubmit={handleChange}>
        <label>Nombre y Apellido</label>
        <input type="text" name="name" onChange ={(e) => setName(e.target.value)}  />
        <label>Correo electronico</label>
        <input type="email" name="email" onChange ={(e) => setEmail(e.target.value)} />
      
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
