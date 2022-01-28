// for
// while
// do-while 

//for-in

const pessoa = {
    nome: 'jair',
    idade: 38

};
//key-valve
for(let chave in pessoa){
    console.log(chave,pessoa.nome),
    console.log(chave,pessoa.idade);
}

const cores = ['Vermelho','Azul','Verde'];

for (let indice in cores ){
    console.log(indice,cores[indice])
}
