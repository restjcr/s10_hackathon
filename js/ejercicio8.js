let arreglos=[[4,2,7,1],[20,70,40,90],[1,2,0]];
let mayores=[];

let filtrar=(arreglo)=>{
    
    for(let i=0;i<arreglo.length;i++){
        let mayor = arreglo[i][0];
        for(let j=1;j<arreglo[i].length;j++){
            if(arreglo[i][j]>mayor){
                mayor=arreglo[i][j];
            }
        }
        mayores[i]=mayor;
    }
    return console.log(mayores);
}

filtrar(arreglos);