function abrirCarrinho() {

    document.getElementById('carrinho').classList.add('right-[0px]');
    document.getElementById('carrinho').classList.remove('right-[-365px]');
}

function fecharCarrinho() {

    document.getElementById('carrinho').classList.remove('right-[0px]');
    document.getElementById('carrinho').classList.add('right-[-360px]');
}

export function inicializarCarrinho() {

    const botaoAbrirCarrinho = document.getElementById('abrir-carrinho');
    botaoAbrirCarrinho.addEventListener('click', abrirCarrinho);

    const botaoFecharCarrinho = document.getElementById('fechar-carrinho');
    botaoFecharCarrinho.addEventListener('click', fecharCarrinho);

}