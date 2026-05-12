// condicionales  if / else if / else
let nota= 6
let asistencias = 75
    if(nota >=6 && asistencias >=75){
        console.log("aprobado");
    }
    else if( nota <=4 && asistencias <75){
        console.log("recuperatorio");
 }
else if (nota <=3 || asistencias <75){
        console.log("desaprobo");
}