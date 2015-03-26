//Juego finalzado
var atacar = true;

var tuAciertas = Math.round(Math.random());
var dannoEsteRound = Math.floor(Math.random() * 5 + 1);
var dannoTotal = 0;

while(atacar){
    if(tuAciertas){
        dannoTotal += dannoEsteRound;
        if(dannoTotal >= 4){
            console.log("Felicidades, te has cargado al dragon!");
            atacar = false; 
        }else{
            tuAciertas = Math.random();
        }
        
    }else{
        console.log("Desgraciadamente no has acertado y el dragon te ha frito...", tuAciertas);
        atacar = false;
    }
      
}