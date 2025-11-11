function parseJSONSafe(jsonString) {
    try {
        const objeto = JSON.parse(jsonString);
        return objeto;
    } catch (error) {
        console.error("Erro ao analisar JSON:", error.message);
        return null;
    }
}

// Teste com JSON invalido
const jsonInvalido = '{nome: "João", "idade": 30}';
console.log(parseJSONSafe(jsonInvalido)); 

// Teste com JSON valido
const jsonValido = '{"nome": "Maria", "idade": 25}';
console.log(parseJSONSafe(jsonValido));