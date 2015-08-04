var user = prompt("Who are you?").toUpperCase();

switch(user){
    case "CARLES":
        console.log("Hola, " + user);
    break;
    case "RAMON":
        console.log("Hola, " + user);
    break;
    case "ADRIA":
        console.log("Hola, " + user);
    break;
    
    default:
        console.log("Hola,  "+ user);
    break;
}

if(user == undefined || user == null && error){
    console.log("Introduce un nombre");
}else{
    console.log("All ok");
    }