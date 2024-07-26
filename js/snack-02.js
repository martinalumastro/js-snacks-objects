console.log('snack 2')

// snack 4:
// Crea un array di oggetti che rappresentano delle persone.
// Ogni persona ha un nome, un cognome e un’età.
// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.

let people = [
    {
        nome: 'Giulio',
        cognome: 'Bianchi',
        eta: '13',
    },
    {
        nome: 'Michele',
        cognome: 'Moro',
        eta: '60',
    },
    {
        nome: 'Sara',
        cognome: 'De Conte',
        eta: '17',
    },
    {
        nome: 'Salvatore',
        cognome: 'Aracri',
        eta: '42',
    },
    {
        nome: 'Veronica',
        cognome: 'Moro',
        eta: '10',
    },
    {
        nome: 'Michela',
        cognome: 'Rossi',
        eta: '33',
    },
    {
        nome: 'Mario',
        cognome: 'Rossi',
        eta: '20',
    },
    {
        nome: 'Daniela',
        cognome: 'Pina',
        eta: '18',
    },
]

let etaPerGuidare = []


// for(i = 0; i < people.length; i++) {
//     personaCorrente = people[i]

//     personaCorrente.eta = parseInt(personaCorrente.eta)
//     //console.log(personaCorrente.eta)

//     if(personaCorrente.eta >= 18) {
//         console.log(etaPerGuidare.push(personaCorrente) + personaCorrente.nome + ' ' + personaCorrente.cognome + ' puoi guidare')
//     } else {
//         console.log(etaPerGuidare.push(personaCorrente) + personaCorrente.nome + ' ' + personaCorrente.cognome + ' non puoi guidare')
//     }

//     console.log(etaPerGuidare)
// }

for(i = 0; i < people.length; i++) {
    personaCorrente = people[i]

    console.log(personaCorrente)
    // nome + cognoe + ? + può guidere
    let message = personaCorrente.nome + ' ' + personaCorrente.cognome

    if(!canDrive(personaCorrente)) {
        message += ' non'
    }

    message += ' può guidare'

    etaPerGuidare.push(message)
}

console.log(etaPerGuidare)

// //function
function canDrive(people) {

//     const age = person.eta
//     //console.log(age >= 18) //boolean

//     // if(age >= 18) {
//     //     //return true se può guidere
//     //     return true
//     // } else {
//     //     //return false se non può guidere
//     //     return false
//     // }

//     // ABBREVIATO
    return people.eta >= 18
}

// const res = canDrive({
//     nome: 'Giulio',
//     cognome: 'Bianchi',
//     eta: '13',
// })

// console.log(res)