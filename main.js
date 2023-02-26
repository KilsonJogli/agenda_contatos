const form = document.getElementById('form-contato');
let linhas = '';
const nomeContato = [];
const numeroContato = [];
const quantidadeContato = document.getElementById('quantidade-contato')
const contato = document.getElementById('contato')

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha(); 
    atualizaTabela();
    atualizaContato();
})

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    if(numeroContato.includes(parseFloat(inputNumeroContato.value))) {
        alert('Este número já foi adicionado em sua agenda de contatos.')
    } else {
        nomeContato.push(inputNomeContato.value);
        numeroContato.push(parseFloat(inputNumeroContato.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td> `;
        linha += '</tr>';

        linhas += linha;
    }

    inputNomeContato.value = '';
    inputNomeContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaContato () {
    quantidadeContato.innerHTML = parseFloat(nomeContato.length);
    const plural = 'Contatos';
    const singular = 'Contato';

    if (parseFloat(nomeContato.length) <= 1 ) {
        contato.innerHTML = singular;
    } else {
        contato.innerHTML = plural;
    }
}