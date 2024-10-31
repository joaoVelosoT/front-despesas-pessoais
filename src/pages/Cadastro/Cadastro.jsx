import React from 'react'
import "./cadastro.css"
import { Link } from 'react-router-dom'
const Cadastro = () => {
    return (
        <div className="signup-container">
        <div className="signup-box">
            <h2>Crie sua Conta</h2>
            <p className="error-message"></p>
            <form id="form">
                <div className="input-group">
                    <label for="name">Nome Completo</label>
                    <input type="text" id="nome" placeholder="Digite seu nome completo" required />
                </div>
                <div className="input-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" placeholder="Digite seu email" required />
                </div>
                <div className="input-group">
                    <label for="password">Senha</label>
                    <input type="password" id="senha" placeholder="Crie uma senha" required />
                </div>
                <div className="input-group">
                    <label for="confirm-password">Confirme a Senha</label>
                    <input type="password" id="confirm-password" placeholder="Confirme sua senha" required />
                </div>
                <button type="submit" id="btn-form">Cadastrar</button>
            </form>
            <p className="login-message">Já tem uma conta? <Link to={"/login"}>Faça login</Link></p>
        </div>
    </div>
    )
}

export default Cadastro