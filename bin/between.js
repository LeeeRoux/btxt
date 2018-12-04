module.exports = function between(str, qu1 = '"', qu2 = qu1) {
 var toReturn = [], f = false;
 for (var i = 0; i < str.length; i++) { 
		if (str.indexOf(qu1) > -1 && !f) { f = true; str = str.slice(str.indexOf(qu1) + qu1.length); };
if (str.indexOf(qu2) > -1 && f) { 
	var value = str.substring(0, str.indexOf(qu2))
str = str.slice(str.indexOf(qu2) + qu2.length);
    toReturn.push(value);
	f = false;
  }
 };
return toReturn.length ? toReturn : null;
};