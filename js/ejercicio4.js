let suma=(...numeros)=>{
    let resultado= numeros.reduce((total,numero)=>
    total+=numero,0);
    return resultado;
}

console.log(suma(1,2,3,4,5,6));