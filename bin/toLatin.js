function toLatin(number) {
if (number > 100000000) { number = 10000000; console.warn("btxt.toLatin: Huge numbers may cause out-of-memory crash"); };
 var toReturn = '';
while (number >= 1000) {
 number -= 1000;
toReturn += 'M'
}
while (number >= 500) {
 number -= 500;
toReturn += 'D'
}
while (number >= 100) {
 number -= 100;
toReturn += 'C'
}
while (number >= 50) {
 number -= 50;
toReturn += 'L'
}
while (number >= 10) {
 number -= 10;
toReturn += 'X'
}
while (number >= 5) {
 number -= 5;
toReturn += 'V'
}
while (number >= 1) {
 number -= 1;
toReturn += 'I'
}
toReturn = toReturn.replace(/IIII/g, "IV").replace(/VIV/g, "IX").replace(/LXXXX/g, "XC").replace(/XXXX/g, "XL")
 return toReturn;
};

module.exports = toLatin;