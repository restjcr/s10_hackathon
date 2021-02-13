let saberTipo=(valor)=>{
    return typeof valor;
}

console.log(saberTipo("Hola")); //String
console.log(saberTipo(1)); //Number
console.log(saberTipo(new Date())); //Object
console.log(saberTipo(true)); //boolean
console.log(saberTipo(null)); //Object