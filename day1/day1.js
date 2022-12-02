const fs = require('fs')

var calorieData =[]
const data =  fs.readFileSync('./input.txt','utf-8')

calorieData = data.split("\n")
var tempLargest = 0
var largest = 0
var elfCount = 0
var sumOfThreeLargest = 0;
var totalCalories =[]
for(var i = 0; i < calorieData.length; i++) {

    if(calorieData[i] === ''|| calorieData[i] === null) {
        totalCalories.push(tempLargest)


        tempLargest = 0
        elfCount++;
    } else {
        var calorie = parseInt(calorieData[i])
        tempLargest += calorie

    }
}

totalCalories.sort((a,b)=> { //sorting total amount of calories each elf has from least to most
    return a - b
})

console.log("\n\n")
for(var i = totalCalories.length - 1; i > totalCalories.length - 4; i--) {
    console.log(`Elf ${i+1} has ${totalCalories[i]}`)
    sumOfThreeLargest += totalCalories[i]
}

console.log(`\nThere are ${elfCount} elves`)
console.log(`Largest Amount of Calories found in one elf: ${largest}`)
console.log(`Sum of the three elves that have the most calories of the pack: ${sumOfThreeLargest}\n`)