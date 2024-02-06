const imagemVisualizacao = document.getElementById('imagem-visualizacao');
const tituloProduto = document.getElementById('titulo-produto');
const opcaoPadrao = 1;
const nomeCor = document.getElementById('nome-cor-selecionada');
const miniaturaImagem0 = document.getElementById('0-imagem-miniatura');
const miniaturaImagem1 = document.getElementById('1-imagem-miniatura');
const miniaturaImagem2 = document.getElementById('2-imagem-miniatura');

const verdeCipreste = {
    nome: 'verde-cipreste',
    pasta: 'imagens-verde-cipreste'   
}
 
const azulInverno = {
    nome: 'azul-inverno',
    pasta: 'imagens-azul-inverno'
}

const meiaNoite = {
    nome: 'meia-noite',
    pasta: 'imagens-meia-noite' 
}

const estelar = {
    nome: 'estelar',
    pasta: 'imagens-estelar'
    
}

const rosaClaro = {
    nome: 'rosa-claro',
    pasta: 'imagens-rosa-claro' 
}

const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];
const opcoesTamanho = ['41 mm', '45 mm'];

let imagemSelecionada = opcaoPadrao;
let tamanhoSelecionado = opcaoPadrao;
let corSelecionada = opcaoPadrao;

function trocarImagemVisualizacao(cor, imagem){
    imagemVisualizacao.src = `./imagens/opcoes-cores/${cor}/imagem-${imagem}.jpeg`;
    console.log(`./imagens/opcoes-cores/${cor}/imagem-${imagem}.jpeg`);
}

function trocarTitulo(cor, tamanho){
    tituloProduto.innerText = `Pulseira loop esportiva ${cor} para caixa de ${tamanho}`;
}

function trocarImagem(){
    const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id;
    imagemSelecionada = idOpcaoSelecionada.charAt(0);
    trocarImagemVisualizacao(opcoesCores[corSelecionada].pasta, imagemSelecionada);
}

function trocarTamanho(){
    const idOpcaoSelecionada = document.querySelector('[name="opcao-tamanho"]:checked').id;
    tamanhoSelecionado = idOpcaoSelecionada.charAt(0);
    trocarTitulo(opcoesCores[corSelecionada].nome, opcoesTamanho[tamanhoSelecionado]);
    if(tamanhoSelecionado == 0){
        imagemVisualizacao.classList.add('caixa-pequena');
        miniaturaImagem0.classList.add('caixa-pequena');
        miniaturaImagem1.classList.add('caixa-pequena');
        miniaturaImagem2.classList.add('caixa-pequena');
    } else {
        imagemVisualizacao.classList.remove('caixa-pequena');
        miniaturaImagem0.classList.remove('caixa-pequena');
        miniaturaImagem1.classList.remove('caixa-pequena');
        miniaturaImagem2.classList.remove('caixa-pequena');
    }
}

function trocarCor(){
    const idOpcaoSelecionada = document.querySelector('[name="opcao-cor"]:checked').id;
    corSelecionada = idOpcaoSelecionada.charAt(0);
    trocarTitulo(opcoesCores[corSelecionada].nome, opcoesTamanho[tamanhoSelecionado]);
    nomeCor.innerText = `Cor - ${opcoesCores[corSelecionada].nome}`;
    miniaturaImagem0.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-0.jpeg`
    miniaturaImagem1.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-1.jpeg`
    miniaturaImagem2.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-2.jpeg`
    trocarImagemVisualizacao(opcoesCores[corSelecionada].pasta, imagemSelecionada);
}