const produto = document.getElementById('valor');
const frete = document.getElementById('frete');
const total = document.getElementById('total');
document.getElementById('copiar').addEventListener('click', clipboardCopy);


function calcular() {
    console.log("Produto: " + produto.value);
    console.log("Frete: " + frete.value);
    if (produto.value == "") {
        produto.value = 0;
    }

    if (frete.value == "") {
        frete.value = 0;
    }

    var soma = parseFloat(produto.value);
    soma += 11 * (produto.value / 100);
    soma += parseFloat(frete.value);
    soma += 35 * (soma / 100);

    console.log("Soma: " + soma);
    produto.value = parseFloat(produto.value).toFixed(2);
    frete.value = parseFloat(frete.value).toFixed(2);
    total.value = soma.toFixed(2);
}

async function clipboardCopy() {
    let text = total.value;
    await navigator.clipboard.writeText(text);
}
