console.log ("1. Chamando função NomeCompleto s/ POO!\n");

function NomePOO(){
    console.log("3. Seja bem vindo a Função!")

}

console.log("2. Resgatando Função!");
NomePOO();

console.log("---------------------------")

var ObjCurso = {
    nome: "Mateus",
    curso: "Java Script",
    cursando: function(){
        console.log("Mateus está realizando o curso de Java Script!");
    } 
};

console.log("Iniciando objeto Curso: ")
console.log(ObjCurso);

console.log("Acessando a função Cursando: ")
ObjCurso.cursando();
