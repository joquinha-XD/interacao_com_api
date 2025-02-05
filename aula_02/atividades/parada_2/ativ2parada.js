//att01:

let produtos = [
  { nome: "Camiseta", categoria: "Roupas" },
  { nome: "Celular", categoria: "Eletrônicos" },
];
let precos = [
  { nome: "Camiseta", preco: 20 },
  { nome: "Celular", preco: 500 },
];
let quantidades = [3, 1];

const combinarProdutos = (products, prices)=>{
  return products.map((product)=>{

    let precoProduto = prices.find((price) => price.nome === product.nome)

    return {
      nome: product.nome ,
      categoria: product.categoria ,
      preco: precoProduto.preco
    }
  })
}
combinarProdutos(produtos, precos)
console.log(combinarProdutos(produtos, precos))

//fim att01


//att02:

const acharNomeProduto = (categoria, arrayProdutos) => {

  return arrayProdutos.filter((produtos) => produtos.categoria === categoria)

}
acharNomeProduto('Eletrônicos', produtos)
console.log(acharNomeProduto('Eletrônicos', produtos))

//fim att02


//att03:

const precoTotal = (arrayProdutos, arrayQuantidades) => {

  return arrayProdutos.map((produto, index)=>{
    let precoVenda = produto.preco * arrayQuantidades[index]
    return{
      nome: produto.nome,
      preco: produto.preco,
      valorTotal: precoVenda
    }
  })

}
precoTotal(itens, quantidades)
console.log(precoTotal(itens, quantidades))

//fim att03


//att04:

let produtosPreco = [
  { nome: 'Camiseta', preco: 20 },
  { nome: 'Celular', preco: 500 },
  { nome: 'Caneca', preco: 10 }
];

const acharPrecoMinimo = (price, arrayProdutos) => {
  return arrayProdutos.filter((produtos) => produtos.preco >= price)
}
acharPrecoMinimo(20, produtos)
console.log(acharPrecoMinimo(20, produtos))

//fim att04
