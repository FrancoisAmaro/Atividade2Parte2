const jsonString = `{
  "usuarios": [
    {"nome": "Carlos", "email": "carlos@email.com"},
    {"nome": "Maria", "email": "maria@email.com"},
    {"nome": "João", "email": "joao@email.com"}
  ]
}`; 

const dados = JSON.parse(jsonString);
const emails = dados.usuarios.map(usuario => usuario.email);
const emailsConcatenados = emails.join(", ");

console.log("Emails concatenados:", emailsConcatenados);