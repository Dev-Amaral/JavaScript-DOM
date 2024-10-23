let texto = document.querySelector("p")
let titulo = document.querySelector("h1")
let fundo = document.querySelector("body")
let img = document.querySelector("img")


 let corFundo = ()=>{

if(fundo.style.backgroundColor == "white"){
    fundo.style.backgroundColor = "black"
    fundo.style.color = "white"
} else{
    fundo.style.backgroundColor = "white"
    fundo.style.color = "black"
}
}


clickTitulo= 0
let  alterarTitulo = () => {
    let titulo = document.querySelector("h1")

if(clickTitulo == 1){
    titulo.innerText = "Que sonho! Neymar brilha, Barcelona bate Juve e é penta da Champions"
    clickTitulo =0
}else{
    clickTitulo=1
titulo.innerText = "Gol de Neymar, decretando o título do Barcelona sobre a Juventus é o 27º mais marcante da Era Moderna da Champions"
}

}


let corTexto = () =>{
    let texto = document.querySelector("p")
    let titulo = document.querySelector("h1")
    if(texto.style.color == 'black'){
        texto.style.color = 'blue'
        titulo.style.color = 'blue'
    }else{
        texto.style.color = 'black'
        titulo.style.color = 'black'
    }
}



function fonte(){
if(texto.style.fontSize === '15px'){
    texto.style.fontSize = '20px'
} else{
    texto.style.fontSize = '15px'
}
}

function shadow(){
if(texto.style.textShadow = '2px 2px 10px rgba(0,0,0,0.5)') {
    texto.style.textShadow = ''
}   else{
    texto.style.textShadow = '2px 2px 10px rgba(0,0,0,0.5)'
}
}


function corParagrafo(){
    let texto = document.querySelector("p")
    if(texto.style.color == 'black'){
        texto.style.color = 'blue'
    } else{
        texto.style.color  = 'black'
    }
}


function imagem(){
let img = document.querySelector("img")
if(img.style.display =="none"){
    img.style.display = "flex"
}else{
    img.style.display= "none"
}
}


