 const letters = require("./bin/letters.js")
 , toLatin = require("./bin/toLatin.js")
 , compare = require("./bin/compare")
 , keyGenerator = require("./bin/keyGenerator.js")
 , calculateLatin = require("./bin/calculateLatin.js")
 , between = require("./bin/between.js");

const chars = {
 letters,
 toLatin,
 compare,
 keyGenerator,
 calculateLatin,
 between,
btxt: function (txt) {
 if (typeof txt !== 'string') throw new TypeError(`Argument "txt" must be a String.`)
  var finnalWord = '';
  for (var i = 0; i < txt.length + 1; i++) {
if (/[a-zA-Z]/(txt.charAt(i).toLowerCase())) {
 finnalWord += this.letters[`char${txt.charAt(i).toUpperCase()}`][txt.charAt(i)].random();
  } else {
 finnalWord += txt.charAt(i);
   }}
 return finnalWord;}
};

Array.prototype.random = function() {
return this[Math.floor(Math.random() * this.length)]}

module.exports = chars;
