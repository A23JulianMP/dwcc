//Tarefa 2
const prompt=require("prompt-sync")({sigint:true}); 
let idade = prompt("Introduza: a súa idade ", "50");
if(idade>0 && idade<=12){
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
}