/*
Snack 1
A:
Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
- Età
- Media punti fatti per partita
- Percentuale di successo per tiri da 3 punti
- Codice giocatore
Generare tramite delle funzioni le statistiche di gioco, secondo queste regole:
- l'età deve essere compresa tra 18 e 40
- la media punti fatti per partita deve essere compresa tra 0 e 50
- la percentuale di successo per tiri da 3 punti deve essere compresa tra 0 e 100
- il codice giocatore deve essere formato da 3 lettere maiuscole casuali (array di lettere) e 3 cifre casuali
Stampare poi Codice giocatore, Media punti e percentuale tiri da 3 punti.
*/
console.log('---------- Snack 1 ------------');
console.log('---------- A ------------')

const player = {
    eta: randomNumber(18, 40),
    mediaPunti: randomNumber(0, 50),
    percentuale: randomNumber(0, 100),
    codiceGiocatore: playerCode(),
}

console.log(`Codice Giocatore:${player.codiceGiocatore}, Media Punti:${player.mediaPunti}, Percentuale:${player.percentuale}%`);

/*
B:
Creare un array di 10 giocatori di basket, con le regole sopra indicate
Dopo aver creato l'array, stampa codice giocatore e media punti per ogni giocatore.
*/
console.log('---------- B ------------');

const players = []

for (let i = 0; i < 10; i++) {
    players.push({
        eta: randomNumber(18, 40),
        mediaPunti: randomNumber(0, 50),
        percentuale: randomNumber(0, 100),
        codiceGiocatore: playerCode(),
    })
}

players.forEach((element) => {
    console.log(`Media Punti:${element.mediaPunti} , Codice Giocatore:${element.codiceGiocatore}`);
})

/*
C:
Creare un nuovo array con i giocatori che hanno una media di punti superiore a 25 e
la percentuale di successo per i tiri da 3 punti superiore all’50%.
*/
console.log('---------- C ------------');

const bestPlayer = players.filter((element) => {
    return element.mediaPunti > 25 && element.percentuale > 50    
})

console.log(bestPlayer)

// FUNCTION
// Generare numero random
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// Generare codice giocatore
function playerCode() {
    
    const letter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'L', 'M', 'N', 'O', 'P', 'Q']
    
    let chars = '';
    let numbers = '';
    
    for (let i = 0; i < 3; i++) {
        
        chars += letter[randomNumber(0, letter.length - 1)];
        
        numbers += letter[randomNumber(0, 9)]
        
    }

    return chars + numbers;
}

/*
Snack 2
A partire da un array di numeri, genera un secondo array con le potenze al quadrato di ogni numero.
Es: [1, 2, 3, 4, 5] => [1, 4, 9, 16, 25]
*/
console.log('---------- Snack 2 ------------');

const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

const numbers2 = numbers.map( (element) => {
    return element * element
} )

console.log(numbers2);

/*
// Snack 3
Crea un array composto da 10 brand famosi (Sony, Gucci, Apple, Samsung, Dolce&Gabbana). 
- Partendo da questo array creare un nuovo array dove tutti i brand dovranno essere "normalizzati" 
(le lettere maiuscole saranno convertite in minuscolo quindi Gucci diventerà gucci) e aggiungere, 
sempre in questo contesto di "clonazione", una nuova proprietà denominata "foundationYear". 
Quest'ultima proprietà conterrà l'anno (mettete un valore voi, è necessario inserire valore reale) in cui l'azienda è stata fondata.
*/
console.log('---------- Snack 3 ------------');

const brands = [
    {
        name: 'Gucci'
    },
    {
        name: 'Apple'
    },
    {
        name: 'Samsung'
    },
    {
        name: 'LG'
    },
    {
        name: 'Huawei'
    },
    {
        name: 'Telefunken'
    },
    {
        name: 'Redmi'
    },
    {
        name: 'Nokia'
    },
    {
        name: 'Ferrari'
    },
    {
        name: 'Mercedes'
    },
]

const brands2 = brands.map( (element) => {
    return {
        name: element.name.toLowerCase(),
        foundationYear: randomNumber(1900, 2000)
    }
})

// FUNCTION
// Generare numero random
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(brands2)

/*
// Snack 4
Crea un array composto da 10 automobili. 
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello, alimentazione (benzina, diesel, gpl, elettrico, metano).
- Dividi in 3 array separati. Inserire nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo e ultimo il resto delle auto. 
- Infine stampa separatamente i 3 array.
*/
console.log('---------- Snack 4 ------------');

const cars = [
    {
        marca: 'Fiat',
        modello: 'Punto',
        alimentazione: 'Diesel'
    },
    {
        marca: 'Fiat',
        modello: 'Panda',
        alimentazione: 'Benzina'
    },
    {
        marca: 'Ford',
        modello: 'Kuga',
        alimentazione: 'Elettrica'
    },
    {
        marca: 'Ferrari',
        modello: 'F430',
        alimentazione: 'Benzina'
    },
    {
        marca: 'Pagani',
        modello: 'Zonta',
        alimentazione: 'Benzina'
    },
    {
        marca: 'Alfa Romeo',
        modello: 'Giulia',
        alimentazione: 'Diesel'
    },
    {
        marca: 'Alfa Romeo',
        modello: 'Giulietta',
        alimentazione: 'GPL'
    },
    {
        marca: 'Audi',
        modello: 'S3',
        alimentazione: 'GPL'
    },
    {
        marca: 'Abarth',
        modello: '500',
        alimentazione: 'Benzina'
    },
    {
        marca: 'Fiat',
        modello: 'Ulisse',
        alimentazione: 'Diesel'
    },

]

const carsBenzina = cars.filter( (element) => {
    return element.alimentazione === 'Benzina'
})

const carsDiesel = cars.filter( (element) => {
    return element.alimentazione === 'Diesel'
})

const carsOther = cars.filter( (element) => {
    return element.alimentazione !== 'Benzina' && element.alimentazione !== 'Diesel'
})

console.log(cars);
console.log(carsBenzina);
console.log(carsDiesel);
console.log(carsOther)

//SNACK 5
// Crea un array di oggetti che rappresentano degli animali: ogni animale ha un nome, una famiglia e una classe.
// Crea un nuovo array con la lista dei mammiferi.
console.log('---------- Snack 5 ------------');

const animals = [
    {
        nome: 'Leone',
        famiglia: 'Felidi',
        classe: 'Mammiferi'
    },
    {
        nome: 'Cane',
        famiglia: 'Canidi',
        classe: 'Mammiferi'
    },
    {
        nome: 'Gallina',
        famiglia: 'Fasianidi',
        classe: 'Uccelli'
    }
];

const animalsMammiferi = animals.filter( (animal) => {
    return animal.classe === 'Mammiferi'; 
})
console.log(animalsMammiferi);

// SNACK 6
// Crea un array di 8 oggetti che rappresentano delle persone: ogni persona ha un nome, un cognome e un'età.
// Crea un nuovo array inserendo per ogni persona una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.
console.log('---------- Snack 6 ------------');

const people = [
    {
        nome: 'Prisco',
        cognome: 'Coppola',
        eta: 25
    },
    {
        nome: 'Nicola',
        cognome: 'Rossi',
        eta: 14
    },
    {
        nome: 'Federica',
        cognome: 'Bianchi',
        eta: 65
    },
    {
        nome: 'Paolo',
        cognome: 'Orlandi',
        eta: 13
    },
    {
        nome: 'Lucia',
        cognome: 'Verdi',
        eta: 11
    },
    {
        nome: 'Marta',
        cognome: 'Molettieri',
        eta: 34
    },
    {
        nome: 'Stefano',
        cognome: 'Blasi',
        eta: 5
    },
    {
        nome: 'Simone',
        cognome: 'Cristicchi',
        eta: 46
    },
];

const peopleMaggiorenni = people.map( (person) => {
    if (person.eta >= 18) {
        return `${person.nome} ${person.cognome} può guidare`
    }
    return `${person.nome} ${person.cognome} non può guidare`
})
console.log(peopleMaggiorenni);

// SNACK 7
// Crea un array di 8 oggetti che rappresenti i pc in vendita nel nostro negozio: ogni pc ha un nome, una marca, un booleano 
// che indica se esce con Windows come OS di fabbrica (hasWindows: true oppure hasWindows: false) ed il prezzo
// Creiamo un nuovo array che indichi i pc che hanno Windows e di questi andiamo a tirar fuori la differenza tra prezzo originale e scontato.
console.log('---------- Snack 7 ------------');

const pc = [
    {
        nome: 'Mac',
        marca: 'Apple',
        hasWindows: false,
        prezzo: 1000,
        prezzoScontato: 900
    },
    {
        nome: 'Think',
        marca: 'Lenovo',
        hasWindows: true,
        prezzo: 1280,
        prezzoScontato: 967
    },
    {
        nome: 'Surface',
        marca: 'Windows',
        hasWindows: true,
        prezzo: 577,
        prezzoScontato: 432
    },
    {
        nome: 'KDSKA',
        marca: 'Asus',
        hasWindows: false,
        prezzo: 345,
        prezzoScontato: 234
    },
    {
        nome: 'KFKS552',
        marca: 'Windows',
        hasWindows: true,
        prezzo: 766,
        prezzoScontato: 566
    },
    {
        nome: 'HDJS25658',
        marca: 'Lenovo',
        hasWindows: true,
        prezzo: 988,
        prezzoScontato: 598
    },
    {
        nome: 'KKDKSSKJ215',
        marca: 'Acer',
        hasWindows: true,
        prezzo: 456,
        prezzoScontato: 297
    },
    {
        nome: 'KFKSJD4847',
        marca: 'Acer',
        hasWindows: false,
        prezzo: 577,
        prezzoScontato: 432
    },
]

const windows = pc.filter( element => element.hasWindows === true)

const differenzaPrezzo = [];

windows.forEach( (element) => {
    const sconto = element.prezzo - element.prezzoScontato;
    differenzaPrezzo.push(sconto);
})
console.log(differenzaPrezzo);

// SNACK 8
// A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.
// Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino']
console.log('---------- Snack 8 ------------');

const words = ['pippo', 'PLUTO', 'Paperino'];

const wordCapitalize = words.map(word => {
    let lower = word.toLowerCase();
    let capitalized = lower[0].toUpperCase() + lower.substring(1);
    return capitalized
})
console.log(wordCapitalize);

// SNACK 9
// Un oggetto rappresenta una finestra di un browser e contiene due campi: 
// un array di tab aperte
// un numero che indica l'indice della tab aperta nell'array:
// {
//     "tab": ["Facebook", "GitHub", "Gmail"],
//     "activeTab": 0
// }
// Il software deve guardare se c'è un social aperto ed eliminarlo dalle tab.
// Nel caso la tab fosse attiva, deve attivare la successiva.
console.log('---------- Snack 9 ------------');

const browser = {
    tab: ["Facebook", "GitHub", "Gmail", "Whatsapp"],
    activeTab: 0
}

const filtered = browser.tab.filter( (tab,index) => {
    return index !== browser.activeTab;
})
console.log(filtered)

// SNACK 4 -> VUE 
// Partendo da un array di oggetti con i contatti di una rubrica con nome, cognome, numero, attivo (true,false)
// Andiamo a stampare nome cognome e numero dentro una lista.
// Fare in modo poi che i contatti non attivi (attivo: false) siano stampati di colore rosso mentre gli altri normalmente di nero. Cliccando sul numero della persona fate in modo che appaia in console il cognome della persona di cui è stato cliccato il numero
console.log('---------- Snack 10 ------------');

const root = new Vue({
    el: '#root',
    data: {
        contacts: [
            {
                name: 'Lorenzo',
                surname: 'Rossi',
                number: '3295406236',
                active: false
            },
            {
                name: 'Nicola',
                surname: 'Maggio',
                number: '4395467396',
                active: false
            },
            {
                name: 'Fabrizio',
                surname: 'Nicoletti',
                number: '3025305654',
                active: true
            },
            {
                name: 'Sabrina',
                surname: 'Colella',
                number: '9540204345',
                active: true
            },
            {
                name: 'Antonia',
                surname: 'Verdi',
                number: '9543295932',
                active: false
            },
            {
                name: 'Monica',
                surname: 'Berti',
                number: '4932954492',
                active: true
            },
        ]   
    },
    methods: {
        surname(surname, index) {
            console.log(this.contacts[index].surname)
        }
    }
});






