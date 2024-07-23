console.log('snack 1')

// snack 3:
// Crea un array di oggetti che rappresentano degli animali.
// Ogni animale ha un nome, una famiglia e una classe.
// Es:
// [
//     { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
//     { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
//     { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
//   ]
//   Crea un nuovo array con la lista dei mammiferi.

let animali = [
    {
        nome: 'leone',
        famiglia: 'felini',
        classe: 'mammiferi',
    },
    {
        nome: 'cane',
        famiglia: 'fcanidi',
        classe: 'mammiferi',
    },
    {
        nome: 'gallina',
        famiglia: 'fasianidi',
        classe: 'uccelli',
    }
]



let mammiferi = []

for (let i = 0; i < animali.length; i++) {
    const animaleCorrente = animali[i]
    
    const classeAnimale = animaleCorrente.classe

    if(classeAnimale === 'mammiferi') {
        mammiferi.push(animaleCorrente)
    }
}

console.log(mammiferi)
