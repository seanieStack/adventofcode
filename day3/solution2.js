const fs = require("fs");
const rfs = fs.readFileSync("input1.txt", "utf8");
const line = rfs.split("\n");

const possibleSlopes = [[1,1],[3,1],[5,1],[7,1],[1,2]];

var treesMet = 0;
var width = line[0].length;

let trees = [0,0,0,0,0]

for(let i = 0; i < possibleSlopes.length; i++){

    const dX = possibleSlopes[i][0];
    const dY = possibleSlopes[i][1];

    let X = 0;
    let Y = 0;

    while (Y < line.length) {
        var curYX = line[Y][X];
        if (isHash(curYX)) { 
            trees[i]++;
        }

        Y += dY;
        X = (X + dX) % width;
    }
}
function isHash(l){
    if(l == "#"){
        return true;
    }else{
        return false;
    }
}

console.log(trees[0]*trees[1]*trees[2]*trees[3]*trees[4])
