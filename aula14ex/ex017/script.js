function gerarTabuada() {
    let num = document.getElementById('txtn');
    let tabuada = document.getElementById('seltab');

    if (num.value.length == 0) {
        alert('Por favor, digite um número!');
    } else {
        let n = Number(num.value);
        tabuada.innerHTML = ''; // Limpa a tabuada anterior

        for (let i = 1; i <= 10; i++) {
            let item = document.createElement('option');
            item.text = `${n} x ${i} = ${n * i}`;
            item.value = `tab${i}`;
            tabuada.appendChild(item);
        }
    }
}

// Adiciona o evento ao botão
document.querySelector('input[type="button"]').addEventListener('click', gerarTabuada);
