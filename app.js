/*  let titulo= document.querySelector('h1');
 titulo.innerHTML= 'Juego del numero secreto'; */

 /* let parrafo= document.querySelector('p');
 parrafo.innerHTML= 'Adivina el numero secreto del 1 al 10';
 */
 let numeroSecreto=0;

 let numeroIntentos=0;
 let listaNumerosSorteados=[];
 let numeroMaximo=10;

 function  asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento)
    elementoHTML.innerHTML=texto;
 }
 function verificarIntento(){
    let numeroDeUsuario=parseInt(document.getElementById('valorUsuario').value);    
    console.log(typeof(numeroDeUsuario));
    console.log(numeroSecreto);
    console.log(numeroDeUsuario);
    console.log(numeroSecreto===numeroDeUsuario);
     if (numeroSecreto===numeroDeUsuario){
        asignarTextoElemento('p', `Felicidades, acertaste en ${numeroIntentos} ${numeroIntentos>1?'intentos':'intento'}`);
        document.getElementById('reiniciar').disabled=false;

    } else{
        if (numeroSecreto<numeroDeUsuario){
            asignarTextoElemento('p', 'El numero es menor');
        } else{
           asignarTextoElemento('p', 'El numero es mayor');
        }
        numeroIntentos ++;
        console.log(numeroIntentos);
        limpiarCaja();
    }
 }

 function limpiarCaja(){
 document.querySelector('#valorUsuario').value=''; //id del input
   
 }
 function generarNumeroSecreto(){

   let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1;
   console.log(numeroGenerado);
   console.log(listaNumerosSorteados);
   // si ya sorteamos todos los numeros 
   if (listaNumerosSorteados.length===numeroMaximo){
       asignarTextoElemento('p','Todos los numeros han sido sorteados');
   } else{
     // si el numero generado esta incluido en la lista

    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado
    }
   }
  
   
}
function condicionesInciales(){ 
    asignarTextoElemento('h1', 'Juego del numero secreto');    
    asignarTextoElemento('p', `Adivina el numero secreto del 1 al ${numeroMaximo}` );
    // generar nuevo numero
    numeroSecreto=generarNumeroSecreto();
    //reiniciar numero de intentos
    numeroIntentos=1;
}
//inciaaliza las condiciones iniciales
condicionesInciales();

function reiniciarJuego(){
    // limpiar caja
    limpiarCaja();
    // habilitar boton
    document.getElementById('reiniciar').disabled=true;
    
    //condiciones iniciales
    condicionesInciales();
}



