const { Console } = require('console');
const fs = require('fs')
var elfChoice;
var myChoice;
//rock == 1  x = lose y = draw z = win
//paper == 2
//scissor == 3

const data = fs.readFileSync("./inputday2.txt",'utf-8');
var choiceArray = data.split('') //lazy coding

var elfPoints = 0;
var myPoints = 0;

for(var i = 0; i < choiceArray.length;i++) {

    if(choiceArray[i] === ' ') {
        console.log(`Elf picked: ${choiceArray[i-1]}`)
        elfChoice = choiceArray[i-1].charCodeAt(0) - 64//turns letter to its ascii value
        
    }
    else if(choiceArray[i] === `\n`) {
        console.log(`strategy pick: ${choiceArray[i-1]}`)
        stratChoice = choiceArray[i-1].charCodeAt(0) - 87 //turns letter to ascii to its ascii value

         //brute force this shet
        if(stratChoice == 1) {
            //lose condition
            if(elfChoice === 1) {
                myPoints += 3

            } else if(elfChoice === 2){
                myPoints += 1
            } else {
                myPoints += 2 
            }
        }else if (stratChoice == 2){
            //draw condition
            if(elfChoice === 1) {
                myPoints += (1 + 3)

            } else if(elfChoice === 2){
                myPoints += (2 + 3)

            } else {
                myPoints += (3 + 3)
            }
        }else {
            //win condition
            if(elfChoice === 1) {
                myPoints += (2 + 6)

            } else if(elfChoice === 2){
                myPoints += (3 + 6)

            } else {
                myPoints += (1 + 6)
            }
        }


         console.log(`My total points: ${myPoints}\n\n`)
        
    }

}



console.log(`My total points: ${myPoints}`)