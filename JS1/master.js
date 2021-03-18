$(document).ready(function () {

    console.log("ok");
    
    const bikes = [];

    bikes.push({
        nome: "BMX",
        peso: 10
    });
    bikes.push({
        nome: "GRAZIELLA",
        peso: 30
    });
    bikes.push({
        nome: "MOUNTAINBIKE",
        peso: 15
    });

    let index = 0;
    let min = bikes[0].peso ;
    for (let i = 1; i < bikes.length; i++) {
        if (bikes[i].peso < min) {
            const {peso} = bikes[i];
            min = peso;
            index = i;
        }
    } 
    console.log(`La bici più leggera è la ${bikes[index].nome}. Il suo peso è di ${min} kg.`);

});