var atividade = document.getElementById('atividade');
var dtAtv= document.querySelector('#dataAtv');
var btnCadastrar = document.querySelector('input[type = submit]');
var indice = 0;

btnCadastrar.addEventListener('click', (e)=>{
    //evitar o envio dos cadastros
    e.preventDefault();

    const lista = document.getElementById('lista');

    const linha = document.createElement('tr');

    const celId= document.createElement('th');
    celId.innerText = ++indice;

    const celAtv = document.createElement('td');
    celAtv.innerText = atividade.value;

    const celData= document.createElement('td');
    const dataformatada = new Date(dtAtv.value).toLocaleDateString('pt-br',{timeZone:'utc'});
    celData.innerText = dataformatada;

    const celAcao = document.createElement('td');
    const concluir = document.createElement('input');
    concluir.type = 'checkbox';
    concluir.id = 'atv' + indice;
    celAcao.appendChild(concluir);

    linha.appendChild(celId);
    linha.appendChild(celAtv);
    linha.appendChild(celData);
    linha.appendChild(celAcao);

    lista.appendChild(linha);

    concluir.addEventListener('change',()=>{
        const resposta = confirm('Deseja colocar esta tarefa como concluída e remove-la de sua lista?');
        if(resposta){
            linha.style.backgroundColor = 'green';
            linha.style.transition = '2s' ;
            setTimeout(() => {
                linha.remove();
            }, 3000);
        }     
    });
});
