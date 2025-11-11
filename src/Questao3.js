const produtosJSON = `{
  "produtos": [
    {"nome": "Mouse", "preco": 25.90},
    {"nome": "Teclado", "preco": 89.90},
    {"nome": "Monitor", "preco": 450.00},
    {"nome": "Cabo USB", "preco": 15.00}
  ]
}`;

function getProdutosAcimaDe50(jsonString) {
    const dados = JSON.parse(jsonString);
    
    const nomes = dados.produtos
        .filter(produto => produto.preco > 50)
        .map(produto => produto.nome);
        
    return nomes;
}

const nomesAcimaDe50 = getProdutosAcimaDe50(produtosJSON);
console.log("Produtos com preço > R$ 50:", nomesAcimaDe50);