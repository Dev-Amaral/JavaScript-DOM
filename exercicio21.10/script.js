let texto = document.querySelector('p')
let titulo = document.querySelector('h1')
let fundo = document.querySelector("body")


let clickFundo = 1
function corFundo(){
if(clickFundo == 1){
    fundo.style.backgroundColor = "black"
    titulo.style.color = "white"
    texto.style.color = "white"
    clickFundo = 0
} else{
    fundo.style.backgroundColor = "white"
    titulo.style.color = "black"
    texto.style.color = "black"
    clickFundo = 1
}
}


let clickTitulo =0;
function alterarTitulo(){
if(clickTitulo==1){
    titulo.innerText = "Que sonho! Neymar brilha, Barcelona bate Juve e é penta da Champions"
    clickTitulo = 0
}
else{
titulo.innerText = "Gol de Neymar, decretando o título do Barcelona sobre a Juventus é o 27º mais marcante da Era Moderna da Champions"
clickTitulo = 1
}

}


let clickCorTexto = 1;
function corTexto(){
    if(clickCorTexto ==1){
        texto.style.color = "yellow"
        clickCorTexto = 0
    }else{
        texto.style.color = "black"
        clickCorTexto = 1
    }
}


let clickfonte=0
function fonte(){
if(clickfonte==1){
    texto.style.fontSize = '20px'
    clickfonte = 0
} else{
    texto.style.fontSize = '10px'
    clickfonte =1
}
}

