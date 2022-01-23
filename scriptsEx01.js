//fizzBuzz very import 
//Divisivel por 3 => Fizz
//Divisivel por 5 => Buzz
//Divissivel por 3 e 5 => FizzBuzz
//Não é um numero => 'Não é um número'
const result = fizzBuzz(15);
console.log(result);

function fizzBuzz(entrada){
    if ( typeof entrada !== 'number')
        return 'Nãe é um numero';
    if ((entrada % 3 === 0) && (entrada % 5 === 0))
        return 'FizzBuzz';
    if (entrada % 3 === 0)
        return 'Fizz';

    if (entrada % 5 === 0)
        return 'Buzz';
        
    return entrada;

}
