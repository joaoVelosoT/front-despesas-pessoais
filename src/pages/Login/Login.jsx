import React, { useState } from 'react'
import "./login.css"
import { Link } from 'react-router-dom'
const Login = () => {

    const initialForm = {
        nome : "",
        email : "",
        senha : ""
    }

    const [formState, setFormState] = useState(initialForm);

const handleSubmit = (e) => {
    e.preventDefault();
    console.log("teste");
}

    return (
        <div className="login-container">
        <div className="login-box">
            <h2>Login</h2>
            <p className="error-message"></p>
            <form id="form" onSubmit={handleSubmit}>
                <div className="input-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" placeholder="Entre com seu email"  />
                </div>
                <div className="input-group">
                    <label for="password">Senha</label>
                    <input type="password" id="senha" placeholder="Enter com sua senha"  />
                </div>
                <button type="submit">Login</button>
            </form>
            <p className="signup-message">Não tem conta? <Link to={"/cadastro"}>Cadastre-se</Link></p>
        </div> 
    </div>
    )
}

export default Login