//Tarefa 2
var edad = prompt('Introduza: a súa idade');
//let idade : number;
//idade = parseInt(prompt("Introduza: a súa idade ", "50"));
var idade;
idade = parseInt(edad);
/*if(idade>0 && idade<=12){
    console.log("Neno");
}else if(idade>12 && idade<=18){
    console.log("Adolescente");
}else if(idade>18 && idade<=30){
    console.log("Xoven")
}else if(idade>30 && idade<=64){
    console.log("Adulto");
}else if(idade>64 && idade<=100){
    console.log("Xubilado");
}else{
    console.log("Non introduciu un valor correcto");
}*/
switch (true) {
    case idade > 0 && idade <= 12:
        console.log("Neno");
        break;
    case idade > 12 && idade <= 18:
        console.log("Adolescente");
        break;
    case idade > 18 && idade <= 30:
        console.log("Xoven");
        break;
    case idade > 30 && idade <= 64:
        console.log("Adulto");
        break;
    case idade > 64 && idade <= 100:
        console.log("Xubilado");
        break;
    default:
        console.log("Non introduciu un valor correcto");
        break;
}
