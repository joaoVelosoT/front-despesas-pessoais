import React from 'react'
import "./login.css"
import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <div class="login-container">
        <div class="login-box">
            <h2>Login</h2>
            <p class="error-message"></p>
            <form id="form">
                <div class="input-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" placeholder="Entre com seu email" required />
                </div>
                <div class="input-group">
                    <label for="password">Senha</label>
                    <input type="password" id="senha" placeholder="Enter com sua senha" required />
                </div>
                <button type="submit">Login</button>
            </form>
            <p class="signup-message">Não tem conta? <Link to={"/cadastro"}>Cadastre-se</Link></p>
        </div> 
    </div>
    )
}

export default Login