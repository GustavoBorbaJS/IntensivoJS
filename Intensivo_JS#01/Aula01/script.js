const produto_1 = {
    id: 1,
    nome: "Notebook",
    preco: 5000,
    estoque: 10,
    descricao: "Notebook Gamer com processador Intel Core i7, 16GB de RAM, placa de vídeo NVIDIA GeForce RTX 3060, armazenamento SSD de 512GB e tela de 15,6 polegadas com resolução Full HD. Ideal para jogos e tarefas exigentes.",
    nomeArquivoImagem: "notebook.png"
};

const produto_2 = {
    id: 2,
    nome: "Smartphone",
    preco: 3000,
    estoque: 20,
    nomeArquivoImagem: "smartphone.png",
    descricao: "Smartphone de última geração com tela AMOLED de 6,5 polegadas, processador octa-core, 8GB de RAM, armazenamento interno de 128GB, câmera traseira tripla de 48MP e bateria de longa duração. Perfeito para quem busca desempenho e qualidade fotográfica."
};

const produto_3 = {
    id: 3,
    nome: "bateria externa",
    preco: 150,
    estoque: 50,
    nomeArquivoImagem: "bateria_externa.png",
    descricao: "bateria hugão produções"
};


const catalogo = [produto_1, produto_2, produto_3];

for (const produto of catalogo) {
    const cartaoProduto = `<div class="card-produto">
<img 
  src="./assets/${produto.nomeArquivoImagem}" 
  alt="${produto.nome}" 
  style="width: 300px; 
  height: 200px;"/>

<p>${produto.nome}</p>
<p>Preço: R$ ${produto.preco}</p>
<p>Estoque: ${produto.estoque} unidades</p>
<p>Descrição: ${produto.descricao}</p>
</div>`;


document.getElementById("container-produto").innerHTML += cartaoProduto;
}