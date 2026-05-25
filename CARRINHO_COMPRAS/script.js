let carrinho = []

const produtos = [
    {
        nome: "MANGA LONGA PRETA - SERAFIM VERMELHO",
        preco: 140,
        imagem: "imagens/produto1.jpg",
        imagem2: "imagens/produto1.2.jpg"
    },

    {
        nome: "CAMISETA PRETA - AGATHA - ENIGMA DO MEDO",
        preco: 80,
        imagem: "imagens/produto2.png",
        imagem2: "imagens/produto2.2.png"
    },

    {
        nome: "REGATA PRETA - PSIKOLERA",
        preco: 60,
        imagem: "imagens/produto3.jpg",
        imagem2: "imagens/produto3.2.jpg"
    },

    {
        nome: "CROPPED OVERSIZED PRETO - TRONO",
        preco: 80,
        imagem: "imagens/produto4.png",
        imagem2: "imagens/produto4.2.png"
    },

    {
        nome:"MOLETOM OFF WHITE - HENRI",
        preco: 250,
        imagem: "imagens/produto5.png",
        imagem2: "imagens/produto5.2.png"
    }
]






const listaProdutos = document.querySelector("#lista-produtos")
const listaCarrinho = document.querySelector("#lista-carrinho")
const total = document.querySelector("#total")
const filtro = document.querySelector("#filtro")
const botaoLimpar = document.querySelector("#limpar")





function listarProdutos(lista){

    listaProdutos.innerHTML = ""

    lista.forEach((produto, indice) => {

        const div = document.createElement("div")

        div.classList.add("produto")

        div.innerHTML = `
            <h2>${produto.nome}</h2>
            <div class="imagens">

            <img src="${produto.imagem}">
            <img src="${produto.imagem2}">

            </div>
            <h2>R$ ${produto.preco}</h2>

            <button>
                Adicionar
            </button>
        `

        const botao = div.querySelector("button")

        botao.addEventListener("click", () => {
            adicionarCarrinho(indice)
        })

        listaProdutos.appendChild(div)
    })
}

// ADICIONAR AO CARRINHO
function adicionarCarrinho(indice){

    const produto = produtos[indice]

    const itemExistente = carrinho.find(item =>
        item.nome === produto.nome
    )

    if(itemExistente){

        itemExistente.quantidade++

    }else{

        carrinho.push({
            nome: produto.nome,
            preco: produto.preco,
            quantidade: 1
        })
    }

    atualizarCarrinho()
}

// REMOVER ITEM
function removerCarrinho(indice){

    if(carrinho[indice].quantidade > 1){

        carrinho[indice].quantidade--

    }else{

        carrinho.splice(indice, 1)
    }

    atualizarCarrinho()
}

// MOSTRAR CARRINHO
function atualizarCarrinho(){

    listaCarrinho.innerHTML = ""

    let totalCompra = 0

    carrinho.forEach((item, indice) => {

        totalCompra += item.preco * item.quantidade

        const div = document.createElement("div")

        div.classList.add("item-carrinho")

        div.innerHTML = `


            <h2>${item.nome}</h2>

            <h3>
                Quantidade: ${item.quantidade}
            </h3>

            <h3>
                Total: R$ ${item.preco * item.quantidade}
            </h3>

            <button>
                Remover
            </button>
        `   

        const botao = div.querySelector("button")

        botao.addEventListener("click", () => {
            removerCarrinho(indice)
        })

        listaCarrinho.appendChild(div)
    })

    total.textContent = `Total: R$ ${totalCompra}`

    // carrinho.sort(function(a, b){return a-b});

    salvarDados()
}

// SALVAR DADOS
function salvarDados(){

    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    )
}

// CARREGAR DADOS
function carregarDados(){

    const dados = localStorage.getItem("carrinho")

    if(dados){

        carrinho = JSON.parse(dados)

        atualizarCarrinho()
    }
}

// FILTRO
function filtrarProdutos(){

    let listaFiltrada = []

    switch(filtro.value){

        case "menos100":

            listaFiltrada = produtos.filter(produto =>
                produto.preco <= 100
            )

            break

        case "mais100":

            listaFiltrada = produtos.filter(produto =>
                produto.preco > 100
            )

            break

        default:

            listaFiltrada = produtos
    }

    listarProdutos(listaFiltrada)
}

// LIMPAR CARRINHO
botaoLimpar.addEventListener("click", () => {

    carrinho = []

    atualizarCarrinho()
})

// EVENTO FILTRO
filtro.addEventListener("change", filtrarProdutos)

// CARREGAR PÁGINA
document.addEventListener("DOMContentLoaded", () => {

    listarProdutos(produtos)

    carregarDados()
})