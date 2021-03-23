$(document).ready(function () {
  const cats = [
    {
        nome: 'Numero',
        eta: 10,
        colore: 'Nero',
        sesso: 'Femmina'
    },
    {
        nome: 'Seue',
        eta: 8,
        colore: 'Verde',
        sesso: 'Maschio'
    },
    {
        nome: 'Virgola',
        eta: 9,
        colore: 'Rosa',
        sesso: 'Femmina'
    },
    {
        nome: 'Ronaldo',
        eta: 11,
        colore: 'Viola',
        sesso: 'Maschio'
    },
];

// cats.forEach((item) => {
//     $('#cats').append(<li>${item.nome} è di colore ${item.colore}</li>)
// });

// creo due array filtrati per sesso

const maschi = cats.filter((item) => item.sesso == 'Maschio');

const femmine = cats.filter((item) => item.sesso == 'Femmina');

console.log(maschi);
console.log(femmine);

cats.forEach((item) => {
    let colore;

    if(item.sesso == 'Maschio') {
        colore = 'azzurro';
    }

    else if(item.sesso == 'Femmina') {
        colore = 'rosa';
    }

    // $('#cats').append(<li class="${colore}">${item.nome} è di colore ${item.colore}<i class="fas fa-ribbon"></i></li>);
});

});