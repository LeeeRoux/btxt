function compare(word, toCompareWith) {
 word = word.toLowerCase();
 var arrayOfWords = [];
function has50PresOfLetters(string, cmp) {
string = string.toLowerCase(); cmp = cmp.toLowerCase();
 var mutalLetters = 0, begin = false;
 for (var i = 0; i < cmp.length; i++) {
if (cmp[i] == string[i]) { begin = true; };
  if (begin) { 
if (cmp[i] == string[i]) { mutalLetters++;} else { 
    begin = false;
  }}}
 return (cmp.length / 2) <= mutalLetters };
 for ( var elem of toCompareWith ) {
  if (elem.toLowerCase() == word) { return elem; };
 var wordComparingInfo = {equalitiveLength: false, hasTheWord: false, has50PresOfLetters: false, startsWith: false, endsWith: false, word: elem};
  if (elem.toLowerCase().includes(word)) wordComparingInfo.hasTheWord = true;
  if (elem.length == word.length) wordComparingInfo.equalitiveLength = true;
 var sharedLetters = 0;
  if (has50PresOfLetters(word, elem)) wordComparingInfo.has50PresOfLetters = true;
  if (elem.toLowerCase().startsWith(word)) wordComparingInfo.startsWith = true;
  if (elem.toLowerCase().endsWith(word)) wordComparingInfo.endsWith = true;
  arrayOfWords.push(wordComparingInfo)};
 var result, expected;
for (var elemInfo of arrayOfWords) {
 if (elemInfo.startsWith && elemInfo.hasTheWord) { result = elemInfo.word; expected = elemInfo.word; } else
 if (elemInfo.has50PresOfLetters && elemInfo.equalitiveLength) { result = elemInfo.word; expected = elemInfo.word; } else
 if (elemInfo.startsWith && elemInfo.has50PresOfLetters) { result = elemInfo.word; expected = elemInfo.word; } else
 if (elemInfo.endsWith && elemInfo.has50PresOfLetters) { result = elemInfo.word; if (!expected) expected = elemInfo.word; } else
 if ((word.length - 1 == elemInfo.word.length || word.length - 2 == elemInfo.word.length) && elemInfo.hasTheWord) { result = elemInfo.word; expected = elemInfo.word; } else
 if (elemInfo.equalitiveLength && elemInfo.has50PresOfLetters) result = elemInfo.word; else 
 if (word.endsWith(elemInfo.word)) { result = elemInfo.word; expected = elemInfo.word; } else if (word.startsWith(elemInfo.word)) { result = elemInfo.word; expected = elemInfo.word; } else 
 if (elemInfo.hasTheWord) result = elemInfo.word; else
 if (elemInfo.has50PresOfLetters) result = elemInfo.word;
  result = expected ? expected : result; };
 return result ? result : null;
};

module.exports = compare;