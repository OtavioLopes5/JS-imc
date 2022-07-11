const formulario = document.querySelector('.formulario');
const resultadoFinal = document.querySelector('.resultado-final');

formulario.addEventListener('submit', recebeEvento);

function recebeEvento (evento) {
    evento.preventDefault();
    let peso = formulario.querySelector('#valor-peso');
    let altura = formulario.querySelector('#valor-altura');
    altura = parseFloat(altura.value);
    peso = parseFloat(peso.value);
    let conta = peso/(altura * altura);

    if (!peso || !altura) {resultadoFinal.innerHTML = `O valor digitado não é valido`};
    
    if (conta <= 18.5){
        resultadoFinal.innerHTML = `<b>${conta.toFixed(1)}</b> = Você está abaixo do peso.`;
    }else if (conta <= 24.9){
        resultadoFinal.innerHTML = `<b>${conta.toFixed(1)}</b> = Você está com peso normal.`;
    }else if (conta <= 29.9 ){
        resultadoFinal.innerHTML = `<b>${conta.toFixed(1)}</b> = Você está com sobrepeso.`;
    }else if (conta <= 34.9){
        resultadoFinal.innerHTML = `<b>${conta.toFixed(1)}</b> = Você está com obesidade grau 1.`;
    }else if (conta <=39.9){
        resultadoFinal.innerHTML = `<b>${conta.toFixed(1)}</b> = Você está com obesidade grau 2.`;
    }else if (conta >= 40){
        resultadoFinal.innerHTML = `<b>${conta.toFixed(1)}</b> = Você está com obesidade grau 3.`;
    };
    
    if (altura >= 2.7) {resultadoFinal.innerHTML = `O valor da altura não é valido`};
    if (peso >= 400) {resultadoFinal.innerHTML = `O valor do peso não é valido`};
}
