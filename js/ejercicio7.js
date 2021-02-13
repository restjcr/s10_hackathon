let formatoNumeroTelefonico=(arreglo)=>{
    let cadena1="";
    let cadena2="";
    let cadena3="";
    let cadenaTotal="";

    for(i=0;i<3;i++){
        cadena1+=arreglo[i].toString();
        cadena2+=arreglo[i+3].toString();
        cadena3+=arreglo[i+6].toString();
    }
    cadenaTotal=`(${cadena1}) ${cadena2}-${cadena3}`;
    
    return console.log(cadenaTotal);
}

formatoNumeroTelefonico([1,2,3,4,5,6,7,8,9]);
