const logout = async () => {
  const btnLogOut = document.getElementById("logout-button");

  btnLogOut.addEventListener("click", (e) => {
    try {
      e.preventDefault();
      const token = sessionStorage.getItem("token");
      if (token) {
        // console.log("tem token");
        sessionStorage.clear("token");
        return (window.location.href = "../login/login.html");
      } else {
        console.log("nao tem token");
      }
      // console.log(token)
      // console.log("Clicou no logout")
    } catch (error) {
      console.error(error);
    }
  });
};

const saldoTotal = async () => {
  try {
    const saldoTotal = document.getElementById("total-dinheiro");
    const token = sessionStorage.getItem("token");
    const response = await fetch("http://localhost:3000/transicao/total", {
      method: "GET",
      headers: { Authorization: `${token}` },
    });

    const json = await response.json();
    if(json.msg === "Acesso negado"){
      window.location.href = '../login/login.html'
    }
    saldoTotal.innerText = `R$${json.total}`;
    
  } catch (error) {
    console.log("caiu no erro do saldoTotal")
    console.error(error);
    return null
  }
};

const totalEntradas = async () => {
  try {
    const totalEntradas = document.getElementById("total-entradas");
    const token = sessionStorage.getItem("token");

    const response = await fetch("http://localhost:3000/transicao/entradas", {
      method: "GET",
      headers: { Authorization: `${token}` },
    });

    const json = await response.json();
    if(json.msg === "Acesso negado"){
      window.location.href = '../login/login.html'
    }
    // console.log(json)
    totalEntradas.innerText = `R$${json.totalEntradas}`;
  } catch (error) {
    console.error(error);
  }
};

const totalSaidas = async () => {
  try {
    const totalSaidas = document.getElementById("total-saidas");
    const token = sessionStorage.getItem("token");

    const response = await fetch("http://localhost:3000/transicao/saidas", {
      method: "GET",
      headers: { Authorization: `${token}` },
    });

    const json = await response.json();
    if(json.msg === "Acesso negado"){
      window.location.href = '../login/login.html'
    }
    console.log(json);
    totalSaidas.innerText = `R$${json.totalSaidas}`;
  } catch (error) {
    console.error(error);
  }
};

const transacao = async () => {
  const valor = document.getElementById("valor");
  const descricao = document.getElementById("descricao");
  const tipo = document.getElementById("tipo");
  const form = document.getElementById("transaction-form");
  const msgError = document.getElementsByClassName("error-message")[0];

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (!valor.value || !descricao.value || !tipo.value) {
      msgError.textContent = "Envie todos os dados !";
      msgError.style.display = "block";
      return;
    }

    if (valor.value < 0) {
      msgError.textContent = "O valor não pode ser negativo";
      msgError.style.display = "block";
      return;
    }

    msgError.textContent = "";
    msgError.style.display = "none";

    const data = JSON.stringify({
      valor: valor.value,
      descricao: descricao.value,
      tipo: tipo.value,
    });

    try {
      const token = sessionStorage.getItem("token");
      const response = await fetch("http://localhost:3000/transicao/", {
        method: "POST",
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json; charset=UTF-8",
        },
        body: data,
      });

      const json = await response.json();
      if(json.msg === "Acesso negado"){
        window.location.href = '../login/login.html'
      }
      // saldoTotal();
      // totalEntradas();
      // totalSaidas();
      // // todasTransferencias();

      // alert("Transação feita com sucesso !");
      window.location.reload();
      valor.value = "";
      descricao.value = "";
    } catch (error) {
      console.error(error);
    }
  });
};

const todasTransferencias = async () => {
  try {
    // Selecionando o elemento container no HTML
    const historico = document.getElementById("transaction-history");

    historico.innerHTML = "";
    // Pegando o token no sessionStorage
    const token = sessionStorage.getItem("token");

    // Pegando o input do tipo no HTML
    const tipo = document.getElementById("filter-type");

    // Fazendo o fetch de todas as transferencias
    const response = await fetch(
      "http://localhost:3000/transicao/todastransferencias",
      {
        method: "GET",
        headers: { Authorization: `${token}` },
      }
    );

    // Pegando o retorno do fetch, e convertendo para um json
    const json = await response.json();

    if(json.msg === "Acesso negado"){
      window.location.href = '../login/login.html'
    }

    // Selecionando apenas as transacoes do fetch
    const transacoes = json.transacoes;

    // Fazendo o forEach para jogar as transacoes no HTML
    transacoes.forEach((element) => {
      historico.innerHTML += `<li class="transaction ${element.tipo}" id=${element.id}>
                      <span>${element.descricao}</span>
                      <span class="amount">R$ ${element.valor}</span>
                      <button id="btn-delete" class="btn-delete">delete</button>

                  </li>`;
    });

    btnDeleteFunc();

    // Adicionando o evento no input de tipo
    tipo.addEventListener("change", async (e) => {
      switch (tipo.value) {
        case "entrada":
          // Limpando o HTML
          historico.innerHTML = "";

          const response = await fetch(
            "http://localhost:3000/transicao/todasentradas",
            {
              method: "GET",
              headers: { Authorization: `${token}` },
            }
          );

          const json = await response.json();
          
          if(json.msg === "Acesso negado"){
            window.location.href = '../login/login.html'
          }

          const transacoes = json.entradas;

          transacoes.forEach((element) => {
            historico.innerHTML += `<li class="transaction ${element.tipo}" id=${element.id}>
                            <span>${element.descricao}</span>
                            <span class="amount">R$ ${element.valor}</span>
                      <button id="btn-delete" class="btn-delete">delete</button>

                        </li>`;
          });
    btnDeleteFunc();

          break;
        case "saida":
          // Limpando o HTML
          historico.innerHTML = "";

          // console.log("ta na entrada")

          const responseSaida = await fetch(
            "http://localhost:3000/transicao/todassaidas",
            {
              method: "GET",
              headers: { Authorization: `${token}` },
            }
          );

          const jsonSaida = await responseSaida.json();
          // console.log(json)
          const transacoesSaida = jsonSaida.saidas;
          console.log(transacoesSaida);
          transacoesSaida.forEach((element) => {
            historico.innerHTML += `<li class="transaction ${element.tipo}" id=${element.id}>
                            <span>${element.descricao}</span>
                            <span class="amount">R$ ${element.valor}</span>
                      <button id="btn-delete" class="btn-delete">delete</button>

                        </li>`;
          });
    btnDeleteFunc();

          break;
        case "todos":
          // Limpando o HTML
          historico.innerHTML = "";

          // Fazendo o fetch de todas as transferencias
          const responseTodas = await fetch(
            "http://localhost:3000/transicao/todastransferencias",
            {
              method: "GET",
              headers: { Authorization: `${token}` },
            }
          );

          // Pegando o retorno do fetch, e convertendo para um json
          const jsonTodas = await responseTodas.json();

          // Selecionando apenas as transacoes do fetch
          const todasTransferencias = jsonTodas.transacoes;

          // Fazendo o forEach para jogar as transacoes no HTML
          todasTransferencias.forEach((element) => {
            historico.innerHTML += `<li class="transaction ${element.tipo}" id=${element.id}>
                      <span>${element.descricao}</span>
                      <span class="amount">R$ ${element.valor}</span>
                      <button id="btn-delete" class="btn-delete">delete</button>

                  </li>`;
          });
          btnDeleteFunc();

          break;
      }
    });
  } catch (error) {
    console.error(error);
  }
};

const btnDeleteFunc = async () => {
  const btnDelete = document.querySelectorAll('.btn-delete')
  const token = sessionStorage.getItem("token")
  console.log(btnDelete);

  
  btnDelete.forEach((delTransacao) => {
    delTransacao.addEventListener('click', async(e) => {
      e.preventDefault();
      const id = delTransacao.parentElement.id

      try {
        const response = await fetch(`http://localhost:3000/transicao/${id}`, {
          method : 'DELETE',
          headers: { Authorization: `${token}` }
        })
  
        const json = await response.json();

        if(json.msg === "Acesso negado"){
          window.location.href = '../login/login.html'
        }

        console.log(json);
        window.location.reload();
      } catch (error) {
        console.error(error);
      }
      
      

    })
  })


}


transacao();
logout();
saldoTotal();
totalEntradas();
totalSaidas();
todasTransferencias();

// btnDelete();

