function tablaDeMultiplicar(num){
    for(let i=1; i<=10; i++){
        let res = num *i;
        console.log(num, "x" , i, "=", res);
    }
}


let num = parseInt(prompt("ingrese un numero"));
tablaDeMultiplicar(num);