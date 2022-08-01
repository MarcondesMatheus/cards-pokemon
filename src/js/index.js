//OBJETIVO 1
//quando clicar na seta de avancar
//mostrar o proximo cartao

//passo 1 - dar um jeito de pegar o elemento html da seta avancar
const btnAvancar = document.getElementById("btn-avancar");
const cartoes = document.querySelectorAll(".cartao");
var cartaoAtual = 0;

function esconderCartaoSelecionado(){
    const cartaoSelecionado = document.querySelector(".selecionado");
        cartaoSelecionado.classList.remove("selecionado");
}

function mostrarCartao(indiceCartao){
    cartoes[indiceCartao].classList.add("selecionado");
}

//passo 2 - identificar quando o usuario clicar na seta avancar
btnAvancar.addEventListener("click",
    function () {

        if (cartaoAtual === cartoes.length - 1) return // no ultimo cartao, para de executar

        //passo 4 - buscar o cartao que esta selecionado e esconder
        esconderCartaoSelecionado();

        //passo 3 - proximo cartao da lista
        cartaoAtual++;
        mostrarCartao(cartaoAtual);
    });

//OBJETIVO 2
//passo 1 - dar um jeito de pegar o elemento html da seta voltar
const btnVoltar = document.getElementById("btn-voltar");
//passo 2 - identificar quando o usuario clicar na seta voltar
btnVoltar.addEventListener("click",
    function () {

        if(cartaoAtual === 0) return

        //passo 4 - buscar o cartao que esta selecionado e esconder
        esconderCartaoSelecionado();

        //passo 3 - anterior cartao da lista
        cartaoAtual--;
        mostrarCartao(cartaoAtual);
    });
