let monto = parseInt(ptompt("ingrese un monto"));
let total;

if(monto < 100){
    total= monto;
}
else if(monto >= 100 && monto <= 500){
    total = monto - monto*0.1;
}
else if(monto > 500 && monto <=1000){
    total = monto - monto*0.2;
}
else{
    total = monto - monto*0.3;
}
alert("el total es" + total);