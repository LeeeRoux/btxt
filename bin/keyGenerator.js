function keyGenerator(keyLength) {
this.keyLength = keyLength || 15;
this.generate = function() {
function number() {
 return Math.floor(Math.random() * 10).toString();
}
function letter() {
 const letters = ("abcdefghijklmnopqrstuvwxyz").split(""), number = Math.floor(Math.random() * 2),
 toReturn = number == 0 ? letters.random() : letters.random().toUpperCase();
 return toReturn;
}
function r() {
 const n = Math.floor(Math.random() * 2);
return  n == 0 ? number() : letter();
}
var toReturn = "";
 for (var i = 0; i < this.keyLength; i++) {
toReturn += r()
 }
return toReturn;
 }
};

module.exports = keyGenerator;