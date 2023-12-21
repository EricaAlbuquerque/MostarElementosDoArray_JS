/*let botao = document.querySelector("button")

botao.addEventListener('click', function() {
    for (var i = 0; i < 4; i++) {
        let novoElemento = document.createElement("h2");
        let texto = document.createTextNode("Algum texto inserido");
        novoElemento.appendChild(texto);
        document.body.appendChild(novoElemento);
    }
});

//let elementoAlvo = document.querySelector("#titulo-principal");
//let elementoPai = document.querySelector("#container-principal");

//elementoPai.insertBefore(novoElemento, elementoAlvo);

*/
/* __________ parte 1 texto ao clicar em botao 
let botao = document.querySelector("button");
let contagem = 0;
let arrayTexto=['oi','oi2']

botao.addEventListener('click', function() {
    for(let i=0;i< arrayTexto.length;i++){
        let novoElemento = document.createElement("h2");
        let texto = document.createTextNode(arrayTexto[i]);
        novoElemento.appendChild(texto);
        document.body.appendChild(novoElemento);

    }
    //if (contagem < 4) {
       
      //  contagem++;
    //}
});
*/



let btn = document.querySelector("button");
let count = 0;
let arrayText = ['Hi', 'Hi2','Hi3','No more "Hi"','Tchau'];

btn.addEventListener('click', function() { 
    if (count < arrayText.length) {
        
        
        let newElement = document.createElement("h2");
        let text = document.createTextNode(arrayText[count]);


        newElement.appendChild(text);
        
        document.body.appendChild(newElement);
        count++;
    }
});



