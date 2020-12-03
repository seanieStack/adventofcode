const fs = require("fs");
const rfs = fs.readFileSync("input1.txt", "utf8");
const line = rfs.split("\n");

const dX = 3;
const dY = 1;

let X = 0;
let Y = 0;

var treesMet = 0;
var width = line[0].length;

while (Y < line.length) {
    var curYX = line[Y][X];
    if (isHash(curYX)) { 
        treesMet++;
    }

    Y += dY;
    X = (X + dX) % width;
}

function isHash(l){
    if(l == "#"){
        return true;
    }else{
        return false;
    }
}
console.log(treesMet);
