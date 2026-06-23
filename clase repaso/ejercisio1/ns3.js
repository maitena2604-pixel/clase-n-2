function calculoMonto(monto) {
    if (monto < 100) {
        return monto;
    }
    else if (monto >= 100 && monto <= 500) {
        return monto - monto * 0.1;
    }
    else if (monto > 500 && monto <= 1000) {
        return monto - monto * 0.2;
}
else {
    return monto - monto *0.3;
}
}
let monto = parseInt(prompt("ingese un monto"));
let total = calculoMonto(monto);
alert("el total es" + total);