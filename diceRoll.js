var numberOfRolls = process.argv.slice(2);
var diceRolls = '';

for(var i = 0;i<numberOfRolls; i++){
  diceRolls = diceRolls + (Math.floor(Math.random() * ((6 - 1)+ 1) + 1));

  if(i<numberOfRolls){
    diceRolls = diceRolls + ' ';
  }
}

console.log(diceRolls);