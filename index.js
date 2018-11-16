Array.prototype.random = function() {
return this[Math.floor(Math.random() * this.length)]}

 const letters = require("./bin/letters.js")
 , toLatin = require("./bin/toLatin.js")
 , compare = require("./bin/compare")
 , keyGenerator = require("./bin/keyGenerator.js")

const chars = {
 letters,
 toLatin,
 compare,
 keyGenerator,
 btxt: function (txt) {
  if (typeof txt !== 'string') throw new TypeError(`You must provide a String. @"${typeof txt}"`)
  var finnalWord = '';
  for (var i = 0; i < txt.length + 1; i++) {
    if (this.letters.list.includes(txt.charAt(i).toLowerCase())) {
     finnalWord += this.letters[`char${txt.charAt(i).toUpperCase()}`][txt.charAt(i)].random();
    } else {
     finnalWord += txt.charAt(i);
   }
  }
 return finnalWord;
 }
};

module.exports = chars;
