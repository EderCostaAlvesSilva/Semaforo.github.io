const img = document.getElementById( 'img' );
const buttons = document.getElementById( 'buttons' );
let contagem = 0;
let intervalid = null
//aq lidamos com o id pai, q se chama de button, e os gilhos tem os nomes de suas cores
 function rola(event){
    console.log(event)
}
buttons.addEventListener('click', rola)
function trafico(event) {
    stop();
    ligar[event.target.id]();
    
}

/*operador ternario*/ 
function next () {
     contagem = contagem < 2 ? ++contagem : 0;
};
   

function mudarcor(){
    const cores = ['red', 'yellow', 'green']
    const color = cores[contagem];
    ligar[color]()
    next();
}

function stop(){
    clearInterval(intervalid)
} 

//funcao dentro de um objeto literal, assim, usando obj fica mais facil de chamar funções
const ligar = {
    'red':      () => img.src = 'imagens/vermelho.png',
    'yellow':   () => img.src = 'imagens/amarelo.png',
    'green':    () => img.src = 'imagens/verde.png',
    'automatic': () => intervalid = setInterval( mudarcor, 750)
}

buttons.addEventListener('click', trafico);