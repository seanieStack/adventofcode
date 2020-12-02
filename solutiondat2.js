let fs = require('fs'),
    readline = require('readline');

var matched = 0;

var count = 0;
require('fs').createReadStream("./input.txt")
    .on('data', function(chunk) {
    for (let i=0; i < chunk.length; ++i)
        if (chunk[i] == 10) count++;
    })
    .on('end', function() {
    console.log(count);
    });

var rd = readline.createInterface({
    input: fs.createReadStream('./input.txt'),
    output: false,
    console: false
});
rd.on('line', function(line) {
    var chunks = line.split(" ");

    var nums = chunks[0];
    var char = chunks[1];
    var pass = chunks[2];

    var numArr = nums.split("-");
    var minNum= numArr[0];
    var maxNum= numArr[1];

    var charArr = char.split(":")
    var checkChar = charArr[0]


    let re = new RegExp(checkChar, "g");
    var CharCount = (pass.match(re)||[]).length

    if (CharCount <= maxNum && CharCount >= minNum){
        matched++
        // console.log(pass + " Had less than " + maxNum + " and had more than"
    }
    else{
        console.log("Not matched")
    }
})

setTimeout(function(){console.log(matched)}, 500)