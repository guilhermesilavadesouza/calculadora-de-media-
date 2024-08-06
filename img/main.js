const form = document.getElementById('form-atividade');
const imgAprovado = '<img src"./aprovado.png" alt="Emoji celebrando" />';
const imgReprovado = '<img src"./reprovado.png" alt="Emoji decepcionado" />';

let linhas = '';

form.addEventListener('submit', function(e){e.preventDefault();

const inputNomeAtividade = document.getElementById('nome-atividade');
const inputNotaAtividade = document.getElementById('nota-atividade');

let linha = '<tr>';
linha += `<td>${inputNomeAtividade.value}<td>`;
linha += `<td>${inputNotaAtividade.value}<td>`;
linha += `<td>${inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado}<td>`;
linha += '</tr>';

linhas +='';

const corpoTabela = document.queySelector('tbody');
corpoTabela.innerHTML = linha;

inputNomeAtividade.value = '';
inputNotaAtividade.value = '';
});
