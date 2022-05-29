
var limite;
var contador = 0;

function limiteObtenido(){
    limite = document.getElementById("limite").value - 1;
    document.getElementsByClassName("fondo_transparente")[0].style.display="none";
}

function sumando() {
    if (contador <= limite){
        contador = contador+1;
         document.incremento.number.value = contador;
         console.log(contador);
    }
    else {
        limite = limite + 1;
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