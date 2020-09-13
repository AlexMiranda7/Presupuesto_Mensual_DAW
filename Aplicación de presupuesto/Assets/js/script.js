function mostrarfecha(fecha) {
    /*CAMBIO DE FECHA*/
    
    var div = document.getElementById('fecha');
    console.log(div); /*Esto muestra en la consola el resultado de div*/
    var meses = new Array ("Enero", "Febrero", "Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
    
    var date = new Date();
    var mostrar = meses[date.getMonth()] + " " + date.getFullYear();
    
    var contenido = "<h1>" + mostrar + "</h1>";
    div.innerHTML = contenido;
    
}
mostrarfecha();

/*Mostrar el ingreso total en pantalla*/
var ingreso_total = document.getElementById('black');
var contador_ingreso = 0;
ingreso_total.innerHTML = "<p>Ingresos:           " + contador_ingreso + "          </p>"

/*Mostrar el egreso total en pantalla*/
var egreso_total = document.getElementById('white');
var contador_egreso = 0;
egreso_total.innerHTML = "<p>Egresos:           " + contador_egreso + "          </p>"

function opcion(selected){
    var form = document.getElementById("formgroup");
    var selected = form.options[form.selectedIndex].text;  
    return selected;
}


function botonagregar() {
    
   if( opcion() == "Ingreso"){/*Si la opcion seleccionada es ingreso*/
        let descrip = document.getElementById('descripcion').value; /*Se obrtiene el texto de descripción*/
        let monto = document.getElementById('monto').value; /*Se obtiene el monto*/
        let suma = (parseFloat(contador_ingreso) + parseFloat(monto)); /*Suma el contador de ingreso con el monto agregado*/
        contador_ingreso = suma;
        ingreso_total.innerHTML = "<p>Ingresos:   + " + contador_ingreso + "</p>" 
       }
    if( opcion()== "Egreso"){/*Si la opcion seleccionada es egreso*/
       let descrip = document.getElementById('descripcion').value; /*Se obrtiene el texto de descripción*/
        let monto = document.getElementById('monto').value; /*Se obtiene el monto*/
        let suma = (parseFloat(contador_egreso) + parseFloat(monto)); /*Suma el contador de egreso con el monto agregado*/
        contador_egreso = suma;
       egreso_total.innerHTML = "<p>Egresos:   - " + contador_egreso + "</p>" 
        
            }
    /*Resta de valores todales*/
    var diferencia = document.getElementById('diferencia');
    var dif = (parseFloat(contador_ingreso) - parseFloat(contador_egreso));
    diferencia.innerHTML = "\t\t<h1>" + dif + "</h1>"
    
    
    /*Promedio de gastos*/
    var porcentaje_gastos = ((parseFloat(contador_egreso) * 100 ) /parseFloat(contador_ingreso)).toFixed(2);
    var prom = document.getElementById('porcentaje');
    prom.innerHTML = "<p>" + porcentaje_gastos + " %</p>"
}



var botontab = document.querySelectorAll(".tabcontainer .btn-group button");
var conttab = document.querySelectorAll(".tabcontainer .tablist");

function show(panelIndex,color) {
    botontab.forEach(function(Node){
        Node.style.backgroundColor="";
        Node.style.color="";
    });
    botontab[panelIndex].style.backgroundColor=color;
    botontab[panelIndex].style.color="orange"
    conttab.forEach(function(Node){
        Node.style.display="none";
    });
    conttab[panelIndex].style.display="block";
    conttab[panelIndex].style.backgroundColor=color;
}    





