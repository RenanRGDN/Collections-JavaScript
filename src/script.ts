import PromptSync = require('prompt-sync');
const prompt = PromptSync();

let option: number;
let estoque: string [] = [];

do{
    console.clear();
    console.log(`[1] - Adicionar`);
    console.log(`[2] - Deletar um item`);
    console.log(`[3] - Alterar dados`);
    console.log(`[4] - Listar estoque`);
    console.log(`[5] - Sair`);
    option = Number(prompt('>> '));
    console.clear();
    switch(option){
        case 1:
            let nomeProduto = prompt('Digite o nome do produto: ');
            estoque.push(nomeProduto)
            break;

        case 2:
            let i=0;
            estoque.forEach((item) => {
                console.log(`ID: ${i}`);
                console.log(`Nome do produto: ${item}\n`);
                i++;
            })
            let id = Number(prompt('Digite o ID do produto: '));
            estoque.splice(id, 1);
            prompt('Item excluido!');
            break;
            
        case 3:
            i=0;
            estoque.forEach((item) => {
                console.log(`ID: ${i}`);
                console.log(`Nome do produto: ${item}\n`);
                i++;
            })
            id = Number(prompt('Digite o ID do produto: '));
            estoque.splice(id, 1);
            prompt('Item excluido! Digite o novo produto:');
            nomeProduto = prompt('Digite o nome do produto: ');
            estoque.push(nomeProduto)
            break;
            
        case 4:
            i=0;
            estoque.forEach((item) => {
                console.log(`ID: ${i}`);
                console.log(`Nome do produto: ${item}\n`);
                i++;
            })
            prompt('Itens listados!');
            break;
            
        case 5:
            prompt('saindo...');
            break;
            
        default:
            prompt('[ERROR] Digite uma opção válida!');
    }
}while(option != 5);