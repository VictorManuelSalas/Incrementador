
var limite;
var contador = 0;

function limiteObtenido(){
    limite = document.getElementById("limite").value;
    document.getElementsByClassName("fondo_transparente")[0].style.display="none";
}

function sumando() {
    if (contador <= limite){
         document.incremento.number.value = contador++;
    }
    else {
        alert('Limite de ' + limite + ' alcanzado.');
    }
}

function restando() {
    if (contador >= 0){
        document.incremento.number.value = contador--;
   }
   else {
       alert('Ya no se puede decrementar mas.');
   }
}