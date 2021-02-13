let personas = [
    {
        nombre:"John",
        edad: 21,
        presupuesto: 23000
    },
    {
        nombre:"Steve",
        edad: 32,
        presupuesto: 40000
    },
    {
        nombre:"Martin",
        edad: 16,
        presupuesto: 2700
    }
];

let sumaPresupuestos=personas.reduce((total,persona)=>
total+=persona.presupuesto,0);

console.log(sumaPresupuestos);
