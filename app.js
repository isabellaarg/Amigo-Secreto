// Criamos uma lista vazia onde vamos guardar os nomes dos amigos
let amigos = [];

// Função para adicionar um nome à lista
function adicionarAmigo() {
    // Pegamos o que foi digitado no campo de input
    const input = document.getElementById("amigo");
    const nome = input.value.trim(); // `.trim()` remove espaços antes e depois do nome

    // Se o usuário não digitou nada, mostramos um alerta e paramos a função
    if (nome === "") {
        alert("Por favor, digite um nome válido!");
        return; // O `return` faz a função parar aqui
    }

    // Se o nome já estiver na lista, mostramos um alerta e paramos a função
    if (amigos.includes(nome)) {
        alert("Esse nome já foi adicionado!");
        return;
    }

    // Adicionamos o nome na lista
    amigos.push(nome);

    // Limpamos o campo de input para que o usuário possa digitar outro nome
    input.value = "";

    // Atualizamos a lista que aparece na tela
    atualizarLista();
}

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
    // Pegamos a `<ul>` onde vamos mostrar os nomes
    const lista = document.getElementById("listaAmigos");

    lista.innerHTML = "";

    amigos.forEach(amigo => {
        const li = document.createElement("li"); // Criamos um elemento `<li>`
        li.textContent = amigo; // Definimos o texto do `<li>` como o nome do amigo
        lista.appendChild(li); // Adicionamos esse `<li>` na lista `<ul>`
    });
}

// Função para sortear um amigo secreto aleatório
function sortearAmigo() {
    if (amigos.length < 1) {
        alert("Adicione pelo menos um amigo para sortear!");
        return; // Se não houver amigos, mostra alerta e para a função
    }

    // Sorteia um amigo aleatório da lista
    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];

    // Exibe o nome do amigo sorteado na tela
    exibirResultado(sorteado);
}

// Função para exibir o resultado do sorteio na tela
function exibirResultado(amigoSorteado) {
    const resultadoEl = document.getElementById("resultado"); // Pega o elemento onde o resultado vai aparecer
    resultadoEl.innerHTML = ""; // Limpa o resultado anterior

    // Exibe o amigo sorteado
    const li = document.createElement("li");
    li.textContent = `Seu amigo secreto é: ${amigoSorteado}`;
    resultadoEl.appendChild(li); // Adiciona o item de resultado à lista na tela
}