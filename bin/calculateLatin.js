function calculateLatin(str) {
str = str.toLowerCase().replace(/\s/g, '').split('');
var toReturn = 0, pos = 6, Ostr = str.join('');
if (/(iiii|viv|xxxx|dd|ccccc|vv|ll)/g.test(Ostr)) throw `Unknown illeageal latin number`
 for (var i = 0; i < str.length; i++) {
 var e = str[i];
 if (e == "m" && pos >= 6) { toReturn += 1000; pos = 6; continue; }
 if (e == "d" && pos >= 5) { toReturn += 500;  pos = 5; continue; }
 if (e == "c" && pos >= 4) { toReturn += 100;  pos = 4; continue; }
 if (e == "l" && pos >= 3) { toReturn += 50;   pos = 3; continue; }
 if (e == "x" && str[i + 1] == "c" && pos >= 3) { toReturn += 90;   pos = 3; str[i + 1] = ""; continue;}
 if (e == "x" && str[i + 1] == "l" && pos >= 2) { toReturn += 40;   pos = 2; str[i + 1] = ""; continue;}
 if (e == "x" && pos >= 2) { toReturn += 10;   pos = 2; continue; }
 if (e == "v" && pos >= 1) { toReturn += 5;    pos = 1; continue; }
 if (e == "i" && str[i + 1] == "v" && pos >= 1) { toReturn += 4;   pos = -1; str[i + 1] = ""; continue;}
 if (e == "i" && str[i + 1] == "x" && pos >= 1) { toReturn += 19;  pos = 2; str[i + 1] = ""; continue;}
 if (e == "i" && pos >= 0) { toReturn += 1;    pos = 0; continue; }
if (e == '') continue;
throw `Unknown latin number ${e} at ${i}`;
 };
return toReturn;
};

module.exports = calculateLatin;