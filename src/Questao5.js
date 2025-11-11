const pedidosJSON = `{
  "pedidos": [
    {"id": 1, "cliente": "Fernanda", "total": 120.50, "status": "entregue"},
    {"id": 2, "cliente": "Roberto", "total": 89.90, "status": "processando"},
    {"id": 3, "cliente": "Carla", "total": 45.30, "status": "entregue"}
  ]
}`;

function processarPedidos(jsonString) {
    const dados = JSON.parse(jsonString);
    const pedidos = dados.pedidos;
    
    let entregues = 0;
    let processando = 0;
    let valorTotal = 0;
    
    pedidos.forEach(pedido => {
        valorTotal += pedido.total;
        
        if (pedido.status === "entregue") {
            entregues++;
        } else if (pedido.status === "processando") {
            processando++;
        }
    });
    
    const totalFormatado = valorTotal.toFixed(2).replace('.', ',');
    
    return `${entregues} pedidos entregues, ${processando} em processamento. Valor total: R$ ${totalFormatado}`;
}

const resumoPedidos = processarPedidos(pedidosJSON);
console.log("Resumo dos Pedidos:", resumoPedidos);