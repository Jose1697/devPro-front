import React from 'react';


const Login = () => {

    return (
      <section className="login">
        <div className="login__container">
          <h2>Inicia Sesión</h2>
          <form>
            <div className="rowl">
              <div className="col-xs">
                <mat-form-field>
                  <input
                    placeholder="Nombre de Usuario"
                    formcontrolname="username"
                    matinput
                    type="email"
                  />
                </mat-form-field>
              </div>
            </div>
            <div className="rowl">
              <div className="col-xs">
                <mat-form-field>
                  <input
                    placeholder="Contraseña"
                    formcontrolname="password"
                    matinput
                    type="password"
                  />
                </mat-form-field>
              </div>
            </div>
            <button className="button" type="submit">
              Iniciar Sesion
            </button>
          </form>
          <p>
            No tienes ninguna cuenta{" "}
            <a routerlink="/user/register">Regístrate</a>
          </p>
        </div>
      </section>
    );
}

export default Login;