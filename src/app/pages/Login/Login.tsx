import React, { useState } from "react";
import "../../css/Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [view, setView] = useState("login");
  const [formData, setFormData] = useState({
    email: "",
    login: "",
    password: "",
    name: "",
    document: "",
    confirmPassword: "",
  });
  const [cpf, setCpf] = useState("");
  const navigate = useNavigate();

  const handleViewChange = (newView: React.SetStateAction<string>) => {
    setView(newView);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove tudo que não for número
    value = value.replace(/(\d{3})(\d)/, "$1.$2"); // Coloca o primeiro ponto
    value = value.replace(/(\d{3})(\d)/, "$1.$2"); // Coloca o segundo ponto
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); // Coloca o traço

    setCpf(value);
    setFormData((prev) => ({ ...prev, document: value })); // Atualiza no formData
  };

  const handleRegister = async () => {
    if (formData.password !== formData.confirmPassword) {
      alert("As senhas não conferem.");
      return;
    }

    try {
      const response = await axios("http://127.0.0.1:3000/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify({
          email: formData.email,
          login: formData.login,
          password: formData.password,
          name: formData.name,
          document: formData.document,
        }),
      });

      if (response.status !== 201) {
        const errorData = response.data;
        alert(`Erro ao registrar: ${errorData.message}`);
        return;
      }

      alert("Usuário registrado com sucesso!");
      setFormData({
        email: "",
        login: "",
        password: "",
        name: "",
        document: "",
        confirmPassword: "",
      }); 
      setCpf(""); 
      handleViewChange("login"); 
    } catch(error) {
      console.log(error)
      alert("Erro ao conectar com o servidor.");
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios("http://127.0.0.1:3000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify({
          login: formData.login,
          password: formData.password,
        }),
      });

      if (response.status === 200) {
        const { token } = response.data;

        // Salva o token JWT no localStorage
        localStorage.setItem("authToken", token);

        // Redireciona para a rota /home
        navigate("/home");
      } else {
        const errorData = response.data;
        console.log(response)
        alert(`Erro ao fazer login: ${errorData.message}`);
      }
    } catch(error) {
      console.log(error)
      alert("Erro ao conectar com o servidor.");
    }
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
              <input
                type="text"
                placeholder="Usuário"
                name="login"
                value={formData.login}
                onChange={handleInputChange}
              />
              <input
                type="password"
                placeholder="Senha"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
              <button
                type="button"
                className="btn-primary"
                onClick={handleLogin}
              >
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
              <input
                type="text"
                placeholder="Nome"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
              <input
                type="email"
                placeholder="E-mail"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <input
                type="text"
                placeholder="Login"
                name="login"
                value={formData.login}
                onChange={handleInputChange}
              />
              <input
                type="text"
                placeholder="Cpf"
                value={cpf}
                onChange={handleCpfChange}
              />
              <input
                type="password"
                placeholder="Senha"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
              <input
                type="password"
                placeholder="Confirme a Senha"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
              <button
                type="button"
                className="btn-primary"
                onClick={handleRegister}
              >
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
