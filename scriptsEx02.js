// velocidade maxima e 80
// a cada 5km acima do limite vocẽ ganha 1 ponto
//Math.Floor()
//ponto maior que 12 => 'Carteira Suspensa'
verificarVelocidade(120)

function verificarVelocidade(velocidade) {
    const velocidadeMaxima = 80;
    const kmPorPonto = 1;
    if (velocidade <= velocidadeMaxima)
        console.log('ok');
    else {
        const pontos = Math.floor(((velocidade - velocidadeMaxima ) / kmPorPonto));
        if( pontos >= 10)
            console.log('Carteira Suspensa');
        else
            console.log('Ponto',pontos);

    }

}