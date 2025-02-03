let palavras = ["sol", "livro", "lua", "cadeira", "mesa", "mar"];

const palavrasComTresLetras = palavras.filter((elemento)=>{
    return elemento.length > 3;
})
console.log(palavrasComTresLetras)