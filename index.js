const prompt = require("prompt-sync")();
const {cadastro, listagem, deletar, atualizar, menu} = require("./usuarios");
let opcao = 0;
while(true){
    menu();
    opcao = +prompt("Digite aqui: ");
    switch(opcao){
        case 1:
            cadastro();
            break;
        case 2:
            listagem();
            break;
        case 3:
            atualizar();
            break;
        case 4:
            deletar();
            break;
        case 5:
            console.log("Encerrando sistema...");
            process.exit()
        default:
            console.log("Opção inválida!");
            break;
    }
}

