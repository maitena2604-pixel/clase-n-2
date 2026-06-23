function calculoNota(nota){
    if(nota >= 90 && nota <= 100){
        return "A";
    }
     else if(nota >= 80 && nota < 90){
        return "B";
    }
    else if(nota >= 70 && nota < 80){
        return "C";
    }
    else if(nota >= 60 && nota < 70){
        return "D";
    }
    else if(nota >= 0 && nota < 60){
        return "F";
    }
    else{ 
        return "clasificacion invalida"
    }
}


let nota = parseInt(prompt("ingrese nota(0 - 100)"));
let letra = calculoNota(nota)
alert("la calificacion es un" + letra);