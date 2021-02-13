let filtrador=(arreglo)=>{
    let noString=arreglo.filter(elemento=>{
        return typeof elemento !== "string";
    });
    console.log(noString);
}

filtrador([1,2,"Jose",3,4,"Cuentas"]);