const prompt = require("prompt-sync")();
//adicionar nome, email, id, lista de telefones
const usuarios = [];
const ultimoID = 0;
const modelo = () => {
    const usuario = {};
    while(true){
        usuario.nome = prompt("Informe o nome de usuário: ")
        if(usuario.nome == ""){
            console.log("O nome não pode estar vazio!");
        }else{
            break;
        }
    }
    while(true){
        usuario.email = prompt("Informe o seu email: ");
        if(usuario.email == ""){
            console.log("O email não pode estar vazio!");
        }else{
            break;
        }
    }
    while(true){
        usuario.telefones = []
        let telefone = prompt('Informe quantos telefones desejar, quando quiser parar digite "Não"').toLowerCase
        if(telefone == "nao" || telefone == "não"){
            break;
        }else{
            telefone = parseInt(telefone);
            usuario.telefones.push(telefone);
        }
    }
    usuario.id = ultimoID + 1;
    return usuario;
}
const cadastro = () => {
    const usuario = modelo();
    usuarios.push(usuario);  
}
const listagem = () => {

}
const atualizar = () => {

}
const deletar = () => {

}

module.exports = {
    cadastro,
    listagem,
    atualizar,
    deletar,
}