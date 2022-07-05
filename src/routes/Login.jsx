import React, { useState, useContext } from "react";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { validateEmail } from "../services/validateEmail";
import { toast } from "react-toastify";
import {Helmet} from "react-helmet";
import { Context } from "../context/Context";
import "../App.css";

export const Login = () => {
  const { loginUser, registerUsers, loginWhitGoogle } = useContext(Context);

  const initialState = {
    email: "",
    password: "",
  };

  const [error, setError] = useState({
    watchMessage: false,
    message: "",
  });
  const [isRegister, setIsRegister] = useState(false);
  const [user, setUser] = useState(initialState);

  const handleChangeInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const showMessage = () => {
    toast.error(error.message === "" ? "Email no valido" : error.message, {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  };

  const validateForm = async (email, password) => {
    const validate = await validateEmail(email, password, setError);

    if (!validate) {
      showMessage();
      setUser(initialState);
    }

    return validate;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const validateFormUser = await validateForm(user.email, user.password);

    if (validateFormUser) {
      await registerUsers(user.email, user.password);
    }
    setUser(initialState);
  };

  const loginGoogle = (e) => {
    e.preventDefault();
    loginWhitGoogle()
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    const validateFormUser = await validateForm(user.email, user.password);

    if (validateFormUser) {
      await loginUser(user.email, user.password);
    }
    setUser(initialState);
  };

  return (
    <section className="section-home">
      <div className="div-image-container flex flex-col  items-center">
        <Nav></Nav>
        <div className="w-2/6 h-4/5 bg-black flex justify-center items-center rounded">
          <form className="flex flex-col w-3/5 h-3/4">
            <h1 className="text-3xl font-bold mb-5">
              {isRegister ? "Registrate" : "Inicia sesion"}
            </h1>
            <input
              value={user.email}
              placeholder="Email o numero de telefono"
              required
              type="text"
              name="email"
              className="w-4/4 h-12 mb-5 rounded bg-zinc-800 p-4 text-white"
              onChange={handleChangeInput}
            ></input>
            <input
              value={user.password}
              required
              name="password"
              placeholder="Contraseña"
              type="password"
              className="w-4/4 h-12 mb-5 rounded bg-zinc-800 p-4 text-white"
              onChange={handleChangeInput}
            ></input>
            <button
              onClick={isRegister ? handleRegister : handleLogin}
              className="w-4/4 h-12 bg-red-600 rounded mb-3 hover:bg-red-500 "
            >
              {isRegister ? "Regsitrarse" : "Iniciar sesion"}
            </button>
            {!isRegister && (
              <button onClick={loginGoogle} className='w-4/4 h-12 bg-blue-600 rounded mb-3 hover:bg-blue-500'>Login whit Google</button>
            )}
            {isRegister ? (
              <div className="w-full h-8 text-zinc-500 cursor-pointer hover:text-zinc-400 flex items-center justify-center">
                <p onClick={() => setIsRegister(false)}>
                  Ya tienes cuenta? Iniciar sesion.
                </p>
              </div>
            ) : (
              <div className="w-full h-14 text-zinc-500 cursor-pointer hover:text-zinc-400 flex items-center justify-center">
                <p onClick={() => setIsRegister(true)}>
                  Primera vez? Registrate aqui.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
      <Footer></Footer>
      <Helmet>
        <title>{isRegister ? 'Registro' : 'Login'} | Netflix Colombia</title>
      </Helmet>
    </section>
  );
};
