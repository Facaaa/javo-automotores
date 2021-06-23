import React from 'react';

const Contactanos = (props) => {

  return (
    <>
      <section className="section__titulo section__form">
        <h1><strong> Hacé tu consulta, respondemos a la brevedad.</strong></h1>
        <form id="formTransform">
          <fieldset>
            <legend>
              <label style={{'font-size': '14px'}}>Nombre</label>
              <input className="input__size" type="text" id="nombre" name="nombre" />

              <br />

              <label style={{'font-size': '14px'}}> Numero de contacto</label>
              <input className="input__size" type="text" id="numero de contacto" name="numero de contacto" height="70%" />
              <br />
              <label style={{'font-size': '14px'}}>Selecciona el auto</label>
              <select className="input__size" style={{'font-size': '27px'}} name=" Autos">

                <option style={{'font-size': '10px'}} value="renault symbol"> Renault Symbol </option>
                <option style={{'font-size': '10px'}} value="peugeot 408"> Peugeot 408 </option>
                <option style={{'font-size': '10px'}} value="otros autos"> otros autos </option>

              </select>

              <br />

              <label style={{'font-size': '14px'}}>Consulta</label>
              <input className="input__size" type="text" id="consulta" name="consulta" />

              <div>
                Recibir mensajes con actualizaciones

              </div>

              <input style={{'font-size': '27px'}} type="checkbox" name="aceptar" value="1" />

              <br />
              <input style={{'font-size': '27px'}} className="btn btn-light" type="submit" value="Enviar" />
              <input style={{'font-size': '27px'}} className="btn btn-light" type="reset" value="Limpiar" />

            </legend>
          </fieldset>
        </form>
        <h2>Gracias por contactarnos! responderemos a la brevedad tu consulta!</h2>
      </section>
    </>
  );
};

export default Contactanos;
