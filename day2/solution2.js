const fs = require('fs');
const rl = require('readline');

let matched = 0;

//not 100% what this does, loops thought all the line in the txt file
let rd = rl.createInterface({
    input: fs.createReadStream('./input.txt')
})

rd.on('line', function(line) {
    //splits current line
    let chunks = line.split(" ");

    //seperates array into corresponding parts
    let nums = chunks[0];
    let char = chunks[1];
    let pass = chunks[2];

    //splits numbers apart
    let numArr = nums.split("-");
    let minNum= numArr[0];
    let maxNum= numArr[1];

    //spilts ':' from string
    let charArr = char.split(":")
    let checkChar = charArr[0];

    //splits passwords into array
    let stringCharArr = pass.split("");

    //checks if correct char is in one position but not both 
    if(stringCharArr[parseInt(minNum) - 1] == checkChar ^ stringCharArr[parseInt(maxNum) - 1] == checkChar ){
      matched++
    }

})

setTimeout(function(){console.log(matched)}, 500);