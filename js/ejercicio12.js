let personas = [
    {
        nombre:"Steve"
    },
    {
        nombre:"Mike"
    },
    {
        nombre:"John"
    }
];

let arreglo=[];

let reunir = (cualquierArreglo) =>{
    for(let i=0;i<cualquierArreglo.length;i++){
        arreglo[i]=cualquierArreglo[i].nombre;
    }
    return console.log(arreglo);
}

reunir(personas);