const usuario = {
    nome: "Ana Silva",
    idade: 30,
    habilidades: ["JavaScript", "React", "Node.js"],
    ativo: true
};

const usuarioJSON = JSON.stringify(usuario);
console.log("String JSON:", usuarioJSON);

const usuarioRecuperado = JSON.parse(usuarioJSON);
console.log("Objeto Recuperado:", usuarioRecuperado);