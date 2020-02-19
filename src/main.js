import axios from 'axios';

//variaveis globais que serao usadas em mais de uma funcao

const localAdd = document.getElementById('localCards');
const localGeral = document.getElementById('localDoBotao');




//funcao que busca e exibe os personagens

async function buscaPersonagens(link){

    localAdd.innerHTML = '';
    localGeral.innerHTML = '';


    criaBotaoHome();
    criaBotaoAnterior();
    criaBotaoProximo();



    var load = document.createElement('img');
    load.setAttribute('src',`../img/load.gif`);
    load.setAttribute('class','img-resposive mx-auto d-block');
    load.setAttribute('width','400px')
    localAdd.appendChild(load);

    

const resposta = await axios.get(link);

const total = resposta.data.results.length;
const proximo = resposta.data.next;
const anterior = resposta.data.previous;



console.log(resposta);

var i = 0;



while(i<total){

    let nome = resposta.data.results[i].name;
    let url = resposta.data.results[i].url;
    if(url.length == 30){
        var id = url.slice(28,29);
    }else{
        var id = url.slice(28,30);
    }
    let genero = resposta.data.results[i].gender;

    var raca = '';


    if(resposta.data.results[i].species.length == 1)
    {
    const resposta2 = await axios.get(resposta.data.results[i].species[0]);
    var raca = resposta2.data.name;}
    else{
    var raca = 'n/a';
    }


    const divCol = document.createElement('div');
    divCol.setAttribute('class','col-md-6 col-lg-3 ');
    const divCard = document.createElement('div');
    divCard.setAttribute('class','card  text-left');
    const img = document.createElement('img');
    img.setAttribute('src',`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`);
    img.setAttribute('class','card-img-top ');
    const h5 = document.createElement('h5');
    h5.setAttribute('class','card-title')
    h5.appendChild(document.createTextNode(`${nome}`));
    const p1 = document.createElement('p');
    p1.setAttribute('class','card-text');
    p1.appendChild(document.createTextNode(`Raça: ${raca}`));
    const p2 = document.createElement('p');
    p2.setAttribute('class','card-text')
    p2.appendChild(document.createTextNode(`Gênero: ${genero}`));

        if(load != 0){
            localAdd.removeChild(load);
            load = 0;
        }


    divCard.appendChild(img);
    divCard.appendChild(h5);
    divCard.appendChild(p1);
    divCard.appendChild(p2);
    divCol.appendChild(divCard);
    localAdd.appendChild(divCol);


    i+=1;

    }

    
    habilitaBotaoHome();

    if(anterior != null){
        habilitaBotaoAnterior(anterior);
    }

    
    
    if(proximo != null){
        habilitaBotaoProximo(proximo);
    }    



}


//funções que criam os botões  HOME, ANTERIOR e PRÓXIMO (botões desabilitados)

    
function criaBotaoHome(){


    const botao = document.createElement('button');
    botao.setAttribute('class','btn-dark');
    botao.disabled = true;
    botao.setAttribute('id','btnHome');
    botao.appendChild(document.createTextNode('Home'))
    localGeral.appendChild(botao);



}


function criaBotaoAnterior(){


    const botaoAnterior = document.createElement('button');
    botaoAnterior.setAttribute('class','btn-dark');
    botaoAnterior.disabled = true;
    botaoAnterior.setAttribute('id','btnAnterior');
    botaoAnterior.appendChild(document.createTextNode('Anterior'))
    localGeral.appendChild(botaoAnterior);



}

function criaBotaoProximo(){


    const botaoProximo = document.createElement('button');
    botaoProximo.setAttribute('class','btn-dark');
    botaoProximo.disabled = true;
    botaoProximo.setAttribute('id','btnProximo');
    botaoProximo.appendChild(document.createTextNode('Próximo'))
    localGeral.appendChild(botaoProximo);

}


//funções que habilitam os botões HOME, ANTERIOR e PRÓXIMO

function habilitaBotaoHome(){

    const botao = document.getElementById('btnHome');
    botao.removeAttribute('disabled');

    botao.onclick = function(){
        constroiTelaInicial();
        }

}

function habilitaBotaoProximo(link){

    const botaoProximo = document.getElementById('btnProximo');
    botaoProximo.removeAttribute('disabled');


    botaoProximo.onclick = function(){
        buscaPersonagens(link);
        }   

}

function habilitaBotaoAnterior(link){

    const botaoAnterior = document.getElementById('btnAnterior');
    botaoAnterior.removeAttribute('disabled');

    botaoAnterior.onclick = function(){
        buscaPersonagens(link);
        }   

}




//função que cria a tela inicial com os botões de categorias

function constroiTelaInicial(){
    localGeral.innerHTML = '';
    localAdd.innerHTML = '';

    const divCol1 = document.createElement('div');
    divCol1.setAttribute('class','col-md-6 col-lg-3 my-auto');
    const divCard1 = document.createElement('div');
    divCard1.setAttribute('class','card w-100 espaco text-center');
    const img1 = document.createElement('img');
    img1.setAttribute('src','../img/personagens.png');
    img1.setAttribute('class','card-img-top transp');
    img1.setAttribute('id','personagens');

    divCard1.appendChild(img1);
    divCol1.appendChild(divCard1);
    localAdd.appendChild(divCol1);


    const divCol2 = document.createElement('div');
    divCol2.setAttribute('class','col-md-6 col-lg-3 my-auto');
    const divCard2 = document.createElement('div');
    divCard2.setAttribute('class','card w-100 espaco text-center');
    const img2 = document.createElement('img');
    img2.setAttribute('src','../img/naves.png');
    img2.setAttribute('class','card-img-top transp');
    img2.setAttribute('id','naves');

    divCard2.appendChild(img2);
    divCol2.appendChild(divCard2);
    localAdd.appendChild(divCol2);


    const divCol3 = document.createElement('div');
    divCol3.setAttribute('class','col-md-6 col-lg-3 my-auto');
    const divCard3 = document.createElement('div');
    divCard3.setAttribute('class','card w-100 espaco text-center');
    const img3 = document.createElement('img');
    img3.setAttribute('src','../img/planetas.png');
    img3.setAttribute('class','card-img-top transp');
    img3.setAttribute('id','planetas');

    divCard3.appendChild(img3);
    divCol3.appendChild(divCard3);
    localAdd.appendChild(divCol3);

    const divCol4 = document.createElement('div');
    divCol4.setAttribute('class','col-md-6 col-lg-3 my-auto');
    const divCard4 = document.createElement('div');
    divCard4.setAttribute('class','card w-100 espaco text-center');
    const img4 = document.createElement('img');
    img4.setAttribute('src','../img/veiculos.png');
    img4.setAttribute('class','card-img-top transp');
    img4.setAttribute('id','veiculos');

    divCard4.appendChild(img4);
    divCol4.appendChild(divCard4);
    localAdd.appendChild(divCol4);


    criaCategoriaInicial();
}


//função que dá as funcionalidades dos botões da tela inicial

function criaCategoriaInicial(){

const personagens = document.getElementById('personagens');
personagens.onclick = function(){
    controleFluxo.value = 1;
    buscaPersonagens('https://swapi.co/api/people/');
}

const planetas = document.getElementById('planetas');
    planetas.onclick = function(){
alert('Funcionalidade em desenvolvimento');
}

const naves = document.getElementById('naves');
    naves.onclick = function(){
alert('Funcionalidade em desenvolvimento');
}

const veiculos = document.getElementById('veiculos');
    veiculos.onclick = function(){
alert('Funcionalidade em desenvolvimento');
}
}

// fim das funções

constroiTelaInicial();