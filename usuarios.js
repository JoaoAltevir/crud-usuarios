const prompt = require("prompt-sync")();
//adicionar nome, email, id, lista de telefones
const usuarios = [];
const ultimoID = 1;
const verificacaoEmail = (email) => {
    for(let i = 0; i < usuarios.length; i++){
        if(email == usuarios[i].email){
            return 1
        }else{
            return 0
        }
    }
}

const verificaNum = num => isNaN(num);

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
        let teste = verificacaoEmail(usuario.email);
        if(teste == 1){
            console.log("Email já cadastrado, por favor digite outro!")
        }
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
    return usuario;
}
const cadastro = () => {
    const usuario = modelo();
    usuario.id = ultimoID;
    ultimoID++
    usuarios.push(usuario);  
    console.log("Usuário cadastrado com sucesso!")
}
const listagem = () => {
    if(usuarios.length == 0){
        console.log("Sem usuários cadastrados! Adicione usuários para serem listados...")
        return
    }else{
        usuarios.forEach(element => {
            console.log(`
            Nome: ${element.nome}
            Email: ${element.email}
            Telefones: ${element.telefones}
            ID: ${element.id}`)
        });
    }
}
const atualizar = () => {
    if(usuarios.length == 0){
        console.log("Sem usuários cadastrados!")
        return;
    }else{
        listagem();
        let ID = +prompt("Informe o ID que deseja alterar: ");
        let teste = verificaNum(ID);
        if(teste == false){
            const usuario = modelo();
            for(let i = 0; i < usuarios.length; i++){
                if(ID == usuarios[i].id){
                    usuarios[i] = usuario;
                    break;
                }
            }
            console.log("Usuário atualizado com sucesso!") 
        }else{
            console.log("Digite um ID válido!")
        }
    }
}
const deletar = () => {
    if(usuarios.length == 0){
        console.log("Sem usuários cadastrados!");
        return
    }else{
        listagem();
        while(true){
            usuarioDeletar = parseInt(prompt("Informe o ID que deseja apagar: "));
            let teste = verificaNum(usuarioDeletar);
            if(teste == false){
                usuarios.forEach((element, index) => {
                    if(usuarioDeletar == element.id){
                        usuarios.splice(index, 1);
                    }
                });
                console.log("Usuário deletado com sucesso!");
                break;
            }else{
                console.log("Digite um ID válido!")
            }
        }
    }
}
const menu = () => {
    console.log(`Seja bem-vindo ao sistema de cadastro, o que deseja fazer?
    [1]Cadastrar Usuário
    [2]Listar cadastros
    [3]Atualizar cadastro
    [4]Apagar Usuário
    [5]Sair
    `)
}

module.exports = {
    cadastro,
    listagem,
    atualizar,
    deletar,
    menu,
}