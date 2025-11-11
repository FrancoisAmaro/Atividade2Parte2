const endereco = {
    rua: "Av. Paulista",
    numero: 1000,
    cidade: "São Paulo",
    cep: "01310-100"
};

function formatarEndereco(objEndereco) {
    return `${objEndereco.rua}, ${objEndereco.numero} ${objEndereco.cidade} CEP: ${objEndereco.cep}`;
}

const enderecoFormatado = formatarEndereco(endereco);
console.log("Endereço formatado:", enderecoFormatado);