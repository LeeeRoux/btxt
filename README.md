Btxt Module [![Build Status](https://travis-ci.org/LeeeRoux/btxt.svg?branch=master-branch)](https://travis-ci.org/LeeeRoux/btxt) [![Version](https://img.shields.io/badge/version-1.3.6-blue.svg)](https://www.npmjs.com/package/btxt?activeTab=versions) 
===========
Btxt is a very-tiny module for more features to improve your Style
> npm i btxt@latest

#### Properties
* **btxt** *Method*<br>
 Convert a String into a Customized String
- Argument 
  * `txt` String<br>
 Returns `String`
```js
const b = require("btxt");
 b.btxt("Hello World");
//"Ħȩŀḹ๑ Ŵ๏ṝḹժ!"
```
* **compare** Method <br>
 Compare a String with an Array of string to find the most closed value
- Arguments 
  * `word` String
  * `toCompareWith` Array<br>
Returns `String` || `null` Incase there was no any similar value
```js
 const b = require("btxt");
b.compare("hulle wurld", ["hello", "boo", "Hello world", "baz", "ello world"])
//"Hello world"
```
* **toLatin** *Method*<br>
 Calculate a number into Latin
- Argument
  * `number` Number<br>
Returns `String`
```js
const b = require('btxt');
 b.toLatin(1540);
//"MDXL"
```
* **keyGenerator** *Class*<br>
 Generate a random key that contains characters and numbers
- Argument
   * `keyLength` Number *Optional* default = `15` You can also set the key length directly via the prop `.keyLength`<br>
Returns `String`
```js
const b = require('btxt');
 var gen = new b.keyGenerator();
gen.generate();
//"634h9jTd92X9d2M"
```
* **calculateLatin** *Method*<br>
 Calculate a latin number 
- Argument
   * `str` String, Latin Number<br>
Returns `Number`<br>
Throw an Error if the number was invalid
```js
const b = require('btxt');
 b.calculateLatin("MDXIV")
//1514
```
## Browser Version
```html
<script src='https://raw.githubusercontent.com/LeeeRoux/btxt/master/bin/btxt-browser.js'></script>
```
