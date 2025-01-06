import React, { useState } from "react";
import "../../css/Login.css";

export const Login = () => {
  const [view, setView] = useState("login");

  const handleViewChange = (newView: React.SetStateAction<string>) => {
    setView(newView);
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h1>Bem-vindo de volta!</h1>
        <p>Entre na sua conta para continuar.</p>
      </div>
      <div className="login-right">
        {view === "login" && (
          <>
            <h1>Tela de Login</h1>
            <form className="login-form">
              <input type="text" placeholder="Usuário" />
              <input type="password" placeholder="Senha" />
              <button type="button" className="btn-primary">
                Entrar
              </button>
              <button
                type="button"
                className="btn-secondary"
                onClick={() => handleViewChange("register")}
              >
                Registrar
              </button>
            </form>
            <p onClick={() => handleViewChange("forgotPassword")}>
              Esqueci a senha
            </p>
          </>
        )}
        {view === "register" && (
          <>
            <h1>Criar Conta</h1>
            <form className="login-form">
              <input type="text" placeholder="Nome" />
              <input type="email" placeholder="E-mail" />
              <input type="password" placeholder="Senha" />
              <input type="password" placeholder="Confirme a Senha" />
              <button type="button" className="btn-primary">
                Registrar
              </button>
              <button
                type="button"
                className="btn-secondary"
                onClick={() => handleViewChange("login")}
              >
                Voltar
              </button>
            </form>
          </>
        )}
        {view === "forgotPassword" && (
          <>
            <h1>Esqueci a Senha</h1>
            <form className="login-form">
              <input type="email" placeholder="Digite seu e-mail" />
              <button type="button" className="btn-primary">
                Enviar Instruções
              </button>
              <button
                type="button"
                className="btn-secondary"
                onClick={() => handleViewChange("login")}
              >
                Voltar
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};



