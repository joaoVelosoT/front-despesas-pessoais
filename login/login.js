const email = document.getElementById("email");
const senha = document.getElementById("senha");
const form = document.getElementById("form");
const msgError = document.getElementsByClassName("error-message")[0];


form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if(!email.value || !senha.value){
        msgError.textContent = "Envie todos os dados !"
        msgError.style.display = "block"
        return
    }

    const data = JSON.stringify({
        email : email.value,
        senha : senha.value
    })


    try {
        // Aqui vai ser o fetch
    const response = await fetch('http://localhost:3000/user/login', {
        method : 'POST',
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body : data
    })

    const json = await response.json();

    if(json.msg === "Login bem sucedido"){
        sessionStorage.setItem("token", json.user)
        return window.location.href = '../tela-inicial/telaInicial.html'
    }

    msgError.textContent = json.msg
    msgError.style.display = "block"
    console.log(json)
    } catch (error) {
        console.log(error);
        alert("Erro interno !")
        msgError.textContent = "Erro interno !"
        msgError.style.display = "block"
    }
    // console.log(data)
})


