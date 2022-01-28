// Logic
//and, or, not;
 
//logic and =(&&);
// Retorna True se os dois operandos forem true;


//console.log(false && true);

//let maiorDeIdade = false;  
//let possuiCarteiraDeTrabalho = true;
//let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho

//console.log(podeAplicar);

//logic or = (||);

//let maiorDeIdade = false;
//let possuiCarteiraDeTrabalho = true;
//let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;

//console.log(podeAplicar);

//logic not = (!); 



//let maiorDeIdade = true;
//let possuiCarteiraDetrabalho = true;
//let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;
//console.log(podeAplicar);

//let candidatoRecusado = !podeAplicar;
//console.log(candidatoRecusado);


  
 
 
 
let maiorDeIdade = false;
let possuiCarteiraDetrabalho = false;
let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;
 
console.log('pode aplicar: ',podeAplicar);


let candidatoRecusado = !podeAplicar;
 
console.log('Candidato Recusado',candidatoRecusado);
