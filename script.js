var limite = prompt("Ingresa el limite: ");
var contador = 0;

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