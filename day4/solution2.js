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
    const checkV = {
        byr: (byr) => byrV(byr),
        iyr: (iyr) => iyrV(iyr),
        eyr: (eyr) => eyrV(eyr),
        hgt: (hgt) => hgtV(hgt),
        hcl: (hcl) => hclV(hcl),
        ecl: (ecl) => eclV(ecl),
        pid: (pid) => pidV(pid),
      };
      return Object.keys(checkV).every((attribute) => checkV[attribute](pp[attribute]));
}

function byrV(byr){
    return parseInt(byr) >= 1920 && parseInt(byr) <= 2002 ? true : false;
}

function iyrV(iyr){
    return parseInt(iyr) >= 2010 && parseInt(iyr) <= 2020 ? true : false;
}

function eyrV(eyr){
    return parseInt(eyr) >= 2020 && parseInt(eyr) <= 2030 ? true : false;
}

function hgtV(hgt){
    if (hgt?.includes('cm')) {
        return parseInt(hgt) >= 150 && parseInt(hgt) <= 193;
    }
    if (hgt?.includes('in')) {
        return parseInt(hgt) >= 59 && parseInt(hgt) <= 76;
    }

    return false;
}

function hclV(hcl){
    return hcl?.match(/^#[0-9A-F]{6}$/gi) ? true : false;
}

function eclV(ecl){
    return ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(ecl) ? true : false;
}

function pidV(pid){
    return pid?.match(/^[0-9]{9}$/) ? true : false;
}

console.log(pp.filter(validPassport).length)
