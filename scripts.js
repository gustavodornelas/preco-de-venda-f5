const produto = document.getElementById('valor');
const frete = document.getElementById('frete');
const total = document.getElementById('total');
const botao25 = document.getElementById('botao25');
const botao30 = document.getElementById('botao30');
const botao35 = document.getElementById('botao35');
const botao40 = document.getElementById('botao40');

let lucro = 40;
botao40.classList = 'selected';

function alterarLucro(valorLucro) {
    lucro = valorLucro;

    botao25.classList = "";
    botao30.classList = "";
    botao35.classList = "";
    botao40.classList = "";

    if (lucro == 25) {
        botao25.classList = "selected";
    }

    if (lucro == 30) {
        botao30.classList = "selected";
    }

    if (lucro == 35) {
        botao35.classList = "selected";
    }

    if (lucro == 40) {
        botao40.classList = "selected";
    }

    console.log(lucro);

    calcular();
}

function calcular() {
    console.log("Produto: " + produto.value);
    console.log("Frete: " + frete.value);
    console.log("Lucro: " + lucro);
    if (produto.value == "") {
        produto.value = 0;
    }

    if (frete.value == "") {
        frete.value = 0;
    }

    var soma = parseFloat(produto.value);
    soma += 11 * (produto.value / 100);
    soma += parseFloat(frete.value);
    soma += lucro * (soma / 100);

    console.log("Soma: " + soma);
    produto.value = parseFloat(produto.value).toFixed(2);
    frete.value = parseFloat(frete.value).toFixed(2);
    total.value = soma.toFixed(2);
}

async function copiarValor() {
    let text = total.value;
    await navigator.clipboard.writeText(text);
}
