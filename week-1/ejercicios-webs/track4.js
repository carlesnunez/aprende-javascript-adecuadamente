iniciar();

function iniciar(){
    var usuarioEscoge;
    
    do{
        usuarioEscoge = prompt("¿Piedra, papel, cuerda o tijeras?");
    }while(usuarioEscoge != "piedra" && usuarioEscoge != "papel" &&     usuarioEscoge != "tijeras" && usuarioEscoge != "cuerda");
    
    var computadorEscoge = Math.random();
    if (computadorEscoge <0.34){
    	computadorEscoge = "piedra";
    }else if(computadorEscoge <=0.67){
    	computadorEscoge = "papel";
    }else{
    	computadorEscoge = "tijeras";
    }
    
    console.log("Has escogido " + usuarioEscoge + " y tu rival ha       escogido " + computadorEscoge);
    
    console.log(comparar(usuarioEscoge, computadorEscoge));    
}

function comparar(eleccion1, eleccion2){
    if(eleccion1 === eleccion2){
        iniciar();
        return "¡Es un empate!";
    }
    
    if(eleccion1 === "piedra"){
        
        if(eleccion2 === "tijeras"){
           return "piedra gana"; 
        }else{
            return "papel gana";    
        }
        
    }
    
    if(eleccion1 === "papel"){
    
        if(eleccion2 === "piedra"){
           return "papel gana"; 
        }else{
            return "tijeras gana";    
        }
        
    }
    
    if(eleccion1 === "tijeras"){
    
        if(eleccion2 === "piedra"){
           return "piedra gana"; 
        }else{
            return "tijeras gana";    
        }
        
    }
    
    
    if(eleccion1 === "cuerda"){
    
        if(eleccion2 === "papel"){
           return "papel gana"; 
        }else{
            return "tijeras gana";    
        }
        
    }
}