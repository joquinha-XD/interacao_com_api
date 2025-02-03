let array1 = [1, 3, 6, 8, 9, 4];

const encontrarNumero = array1.find((elemento)=>{
    return elemento > 6;
})

console.log(encontrarNumero)

const filtrarNumero = array1.filter((elemento)=>{
    return elemento > 6;
})

console.log(filtrarNumero)