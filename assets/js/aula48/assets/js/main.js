const inputtarefa = document.querySelector('.input-tarefa');
const btntarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi(){
    const li = document.createElement('li');
    return li;
}

inputtarefa.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        if (!inputtarefa.value) return;
        criatarefa(inputtarefa.value);
    }
});

function limpaInput(){
    inputtarefa.value = '';
    inputtarefa.focus();
}

function criaBotaoApagar(li){
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    // botaoApagar.classList.add('apagar');
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('class', 'apagar esta tarefa');
    li.appendChild(botaoApagar);
}

function criatarefa(textoInput){ 
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

btntarefa.addEventListener('click',function(){
    if (!inputtarefa.value) return;
    criatarefa(inputtarefa.value);
});

document.addEventListener('click', function(e){
   const el = e.target;
   
   if (el.classList.contains('apagar')){
       el.parentElement.remove();
       salvarTarefas();
   }
});

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas){
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
    listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    
    for (let tarefa of listaDeTarefas){
        criatarefa(tarefa);
    }
}

adicionaTarefasSalvas();
