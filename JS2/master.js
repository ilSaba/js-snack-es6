$(document).ready(function () {

    const squadre = [
        {
          nome: "Juventus",
          puntifatti: 0,
          falli: 0,
        },
      
        {
          nome: "Inter",
          puntifatti: 0,
          falli: 0,
        },
      
        {
          nome: "Shakhtar",
          puntifatti: 0,
          falli: 0,
        },
      
        {
          nome: "Roma",
          puntifatti: 0,
          falli: 0,
        },
      
        {
          nome: "Porto",
          puntifatti: 0,
          falli: 0,
        },
      
        {
          nome: "Bayern",
          puntifatti: 0,
          falli: 0,
        },
      ]
      
      let newDati = []
      
      for (let i = 0; i < squadre.length; i++) {
        squadre[i].puntifatti = randomNumberInRange(0, 100);
        squadre[i].falli = randomNumberInRange(0, 100);
      
        const {nome, falli} = squadre[i]
        newDati.push(nome, falli);
      }
      
      // const [teamOne, teamTwo, teamThree] = squadre[i].puntifatti
      
      console.log(newDati);
      
      // FUNCTIONS
      
      function randomNumberInRange(min, max) {
        if (isNaN(min) || isNaN(max)) {
          console.log("Non sono numeri");
        } else {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }
      }
      
      console.log(squadre);


});