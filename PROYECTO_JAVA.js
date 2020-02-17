var Nombre_Completo = prompt("Por favor ingrese el nombre completo:", "Nombres y apellidos");
var Dia_Nacimiento = prompt("Ingrese el día de nacimiento", "Ejemplo: Si nació el 22 de enero, solamente ingresar 22");
var Mes_Nacimiento = prompt("Ingrese el mes de nacimiento", "Ejemplo: Si nació en enero, solamente ingresar 1 porque es el mes 1");
var Anio_Nacimiento = prompt("Ingrese el año de nacimiento", "Ejemplo: Si nació el 22 de enero de 1987, solamente ingresar 1987");
var Edad_Asegurado = 2020 - Anio_Nacimiento;
var conyuge = prompt("¿Tiene cónyuge?", "SI/NO");
var edad_conyuge;
    if (conyuge == "SI"){
        edad_conyuge = prompt("Ingrese la edad del conyuge, Ejemplo: Si tiene 30 años ingresar unicamente 30")
    }
    if (conyuge == "NO"){
        edad_conyuge = 0
    }
var hijos = prompt("¿Tiene hijos?", "SI/NO");
var Cantidad_Hijos;
    if (hijos == "SI"){
        Cantidad_Hijos = prompt("Ingrese la cantidad de hijos menores de 21 años:", "Por favor ingrese únicamente números")
    }
    if (hijos == "NO"){
        Cantidad_Hijos = 0
    }
const precioBase = 250;

var Recargos_Edad_Asegurado;
if  (Edad_Asegurado < 18){
    alert("No se puede asegurar por no cumplir con la edad mínima")
}
if  (Edad_Asegurado >= 18 && Edad_Asegurado < 21){
    Recargos_Edad_Asegurado = 0
}
if  (Edad_Asegurado >= 21 && Edad_Asegurado < 25){
    Recargos_Edad_Asegurado = precioBase*0.01
}
if  (Edad_Asegurado >= 25 && Edad_Asegurado < 30){
    Recargos_Edad_Asegurado = precioBase*0.02
}
if  (Edad_Asegurado >= 30 && Edad_Asegurado < 40){
    Recargos_Edad_Asegurado = precioBase*0.05
}
if  (Edad_Asegurado >= 40 && Edad_Asegurado < 50){
    Recargos_Edad_Asegurado = precioBase*0.08
}
if  (Edad_Asegurado >= 50 && Edad_Asegurado <= 65){
    Recargos_Edad_Asegurado = precioBase*0.12
}
if  (Edad_Asegurado >65){
    alert("No Se Puede aseguar por ser la edad Maxima Permitida")
}
    var recargos_edad_conyuge;
    if (edad_conyuge == 0){
        recargos_edad_conyuge = 0
    }
    if (edad_conyuge  >= 1 && edad_conyuge < 30){
        recargos_edad_conyuge = precioBase*0.01
    }
    if (edad_conyuge >= 30 && edad_conyuge < 40){
        recargos_edad_conyuge = precioBase*0.02
    }
    if (edad_conyuge >= 40 && edad_conyuge < 50){
        recargos_edad_conyuge = precioBase*0.03
    }
    if (edad_conyuge >= 50 && edad_conyuge < 70){
        recargos_edad_conyuge = precioBase*0.05
    }
var Recargos_Por_Hijos;
    if (Cantidad_Hijos >= 0){
        Recargos_Por_Hijos = Cantidad_Hijos/100*precioBase
    }

comision = precioBase * 0.30;

recargos = Recargos_Edad_Asegurado + recargos_edad_conyuge + Recargos_Por_Hijos;

totalPagar = precioBase + comision + recargos;
document.write("Bienvenido a Seguros TK-U" + "<br>");
document.write("Para nosotros es un gusto entregarle la siguiente cotizazion Señor: " + Nombre_Completo + "<br>");
document.write("Los Cargos Son los Siquientes:"+"<br>");
document.write("Cargos por Edad:        Q." + Recargos_Edad_Asegurado + "<br>");
document.write("Cargos Por Conyuge:     Q." + recargos_edad_conyuge+"<br>");
document.write("Cargos Por Hijos:       Q." + Recargos_Por_Hijos +"<br>");
document.write("Su Total a Pagar es de: Q." + totalPagar+"<br>");
