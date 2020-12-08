//
//used https://github.com/mdunisch/adventOfCode2020/blob/master/4/4a.js as a base and modifyied to as see fit
//

const fs = require('fs');
const rfs = fs.readFileSync('input.txt', 'utf-8').split('\n\n');

const rqATB = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
const passports = rfs.map((line) => line.replace(/\n/g, ' ').split(' '));

function atb(passport, attribute) {
  const foundAttribute = passport.find((i) => i.startsWith(attribute));
  return (!foundAttribute ? null : foundAttribute.replace(`${attribute}:`, ''))
}

const pp = passports.map((i) =>
  rqATB.reduce((prev, attribute) => {
    return { ...prev, [attribute]: atb(i, attribute)};
  }, {})
);

function validPassport(pp) {
  return rqATB.every((i) => pp[i]);
}

console.log(pp.filter(validPassport).length)
