import React from 'react'
import "./home.css"
const Home = () => {
    return (
        <div class="dashboard-container">
      <header>
        <h1>Controle de Despesas</h1>

        <button id="logout-button" class="logout-button">LogOut</button>
      </header>

      <div class="totals-container">
        <div class="total-box" id="saldo-total">
          <h3>Saldo Total</h3>
          <p id="total-dinheiro">R$ 0,00</p>
        </div>
        <div class="total-box">
          <h3>Total de Entradas</h3>
          <p id="total-entradas">R$ 0,00</p>
        </div>
        <div class="total-box">
          <h3>Total de Saídas</h3>
          <p id="total-saidas">R$ 0,00</p>
        </div>
      </div>

      <section class="transaction-form">
        <h2>Adicionar Transação</h2>
        <form id="transaction-form">
          <div class="input-group">
            <label for="description">Descrição</label>
            <input
              type="text"
              id="descricao"
              placeholder="Ex: Salário, Compra"
              required
            />
          </div>
          <div class="input-group">
            <label for="amount">Valor</label>
            <input type="number" id="valor" placeholder="Ex: 100.00" required />
          </div>
          <div class="input-group">
            <label for="type">Tipo</label>
            <select id="tipo" required>
              <option value="entrada">Entrada</option>
              <option value="saida">Saída</option>
            </select>
          </div>
          <button type="submit">Adicionar</button>
          <p class="error-message"></p>
        </form>
      </section>

      <section class="transactions-list">
        <h2>Histórico de Transações</h2>

        <div class="filter">
          <label for="filter-type">Filtrar por:</label>
          <select id="filter-type">
            <option value="todos">Todos</option>
            <option value="entrada">Entradas</option>
            <option value="saida">Saídas</option>
          </select>
        </div>

        <ul id="transaction-history">
           {/* <li class="transaction entrada">
            <span>Salário</span>
            
              <span class="amount">R$ 2500,00</span>
              <button id="btn-delete">delete</button>
            
          </li>  */}
        </ul>
      </section>
    </div>
    )
}

export default Home