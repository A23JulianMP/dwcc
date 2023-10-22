// Realizar tabla de multiplicar del 9
let i=0;
for(i=0;i<=10;i++){
    console.log(9*i);
}

//Fibonacci
console.log("----------------- Fibonacci---------");
let fibonacci = [1,1];
while (fibonacci.length < 10) {
  fibonacci.push( fibonacci[fibonacci.length -1] + fibonacci[fibonacci.length -2]);
}
console.log(fibonacci.toString());
//Número primo
console.log("----------------- Número primo -------");
let primo=13;
let iteracion=0;
let restoCeroVeces=0;
do{
   if((primo%iteracion)==0){
     restoCeroVeces++;
   }else if(restoCeroVeces>=3){
    console.log(`El número ${primo} NO es primo`);
    break;
   }
    iteracion++;
   
}while(iteracion<=100);
if(restoCeroVeces<3){
    console.log(`El número ${primo} es primo`);
}