const nome = document.getElementById("nome");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const confirmPassword = document.getElementById("confirm-password");
const form = document.getElementById("form");
const msgError = document.getElementsByClassName("error-message")[0];

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if(!nome.value || !email.value || !senha.value || !confirmPassword.value){
        msgError.textContent = "Envie todos os dados !"
        msgError.style.display = "block"
        return
    }

    if(senha.value != confirmPassword.value){
        // return alert('As senhas não são iguais')
        msgError.textContent = "As senhas não são iguais"
        msgError.style.display = "block"
        return
    }

    const data = JSON.stringify({
        nome : nome.value,
        email : email.value,
        senha : senha.value
    })


    try {
        // Aqui vai ser o fetch
    const response = await fetch('http://localhost:3000/user/', {
        method : 'POST',
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body : data
    })

    const json = await response.json();
    console.log(json);
    if(json.msg === 'Já existe esse email'){
        msgError.textContent = 'Email já cadastrado. Por favor use outro'
        msgError.style.display = "block"
        return null
    }
    
    // if(json.msg === "User criado com sucesso"){
    //     sessionStorage.setItem("token", json.user)
    //     return window.location.href = '../tela-inicial/telaInicial.html'
    // }


    const responseLogin = await fetch('http://localhost:3000/user/login', {
        method : 'POST',
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body : data
    })


    const jsonLogin = await responseLogin.json();

    if(jsonLogin.msg === "Login bem sucedido"){
        sessionStorage.setItem("token", jsonLogin.user)
        return window.location.href = '../tela-inicial/telaInicial.html'
    }

    msgError.textContent = jsonLogin.msg
    msgError.style.display = "block"

    // console.log(json)
    } catch (error) {
        console.log(error);
        alert("Erro interno !")
        msgError.textContent = "Erro interno !"
        msgError.style.display = "block"
    }
    // console.log(data)
})