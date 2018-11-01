Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)]
}

//ES6 Broswers
if (!Array.prototype.includes) {
    Array.prototype.includes = function(e) {
        if (this.indexOf(e) > -1)
            return true;
        return false;
    }
}
;
const btxt = {
    list: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    charA: {
        a: ['a', 'á', 'à', 'ȁ', 'ȃ', 'ă', 'ā', 'ã', 'ȧ', 'ä', 'â', 'ǎ', 'å', 'ǟ', 'ǡ', 'ǻ', 'ą', 'ḁ', 'ɑ', 'ά', 'ⱥ', '∆', 'α', 'ά', 'ä', 'á', 'ﾑ', 'α', 'ɑ̝̚', '۸', 'ก',
        'ถ', 'ภ', 'ฤ', 'ล', 'ส', 'อ', 'ฮ', 'ค'],
        A: ['Á', 'Ā', 'Ā', 'Ă', 'Ă', 'Ą', 'Ą', 'Ǎ', 'Ǎ', 'Ǻ', 'Ǻ', 'Α', 'Δ', 'Λ', 'Ά', 'Α', 'Λ', 'Ά', 'А', 'Ạ', 'Ạ', 'Ả', 'Ả', 'Ấ', 'Ấ', 'Ầ', 'Ầ', 'Ẩ', 'Ẩ', 'Ẫ',
        'Ẫ', 'Ậ', 'Ậ', 'Ắ', 'Ắ', 'Ằ', 'Ằ', 'Ẳ', 'Ẳ', 'Ẵ', 'Ẵ', 'Ặ', 'Ặ']
    },
    charB: {
        b: ['Ь', 'Ъ', 'Ъ', 'b', 'ƀ', 'ɓ', 'ḃ', 'ḅ', 'ḇ', 'Ƅ', 'ъ', 'Ѣ', 'в', 'ʙ', 'ც', 'ɞ', 'ფ', '๒', 'в̝̚', 'Ь'],
        B: ['Β', 'Ḃ', 'Ḃ', 'Ḅ', 'Ḅ', 'β', 'ß', '฿', 'ℬ', 'Յ', 'Ḇ']
    },
    charC: {
        c: ['๔', '๕', 'c', '¢', 'ç', 'ć', 'ḉ', 'ĉ', 'ċ', 'č', 'ƈ', 'ҫ', 'ς', 'ς', 'c̃̾', 'c͠'],
        C: ['Ć', 'Ć', '₡', 'Ĉ', 'Ĉ', 'Ċ', 'Ċ', 'Č', 'Č', 'С', 'С']
    },
    charD: {
        d: ['∂', 'd̃̾', '₫', 'ḏ', 'ḑ', 'đ', 'ɗ', 'ď', 'ɖ', 'ժ', 'Ԁ', 'ԁ', 'ⅆ', ],
        D: ['Ď', 'Ḋ', 'Ḋ', 'Ḍ', 'Ḍ', 'Ḏ', 'Ḏ', 'Ḑ', 'Ḑ', 'Ḓ', 'Ḓ', 'Ď', 'Đ', 'Đ', 'ⅅ', 'Ð', 'Ɗ']
    },
    charE: {
        e: ['é', 'è', 'ε', 'ȅ', 'ȇ', 'ĕ', 'ē', 'ǝ̝̚', 'ė', 'ë', 'ê', 'ě', 'ę', 'ȩ', 'ҽ', 'ⅇ', 'ɛ', 'έ', 'є', 'ℰ', 'ӭ', 'ḛ', 'ḝ'],
        E: ['Ē', 'Ē', 'Ĕ', 'Ė', 'Ę', 'Ę', 'Ě', 'Έ', 'Έ', 'Ё', 'Е', 'Ё', 'Ẹ', 'Ẹ', 'Ẻ', 'Ẻ', 'Ẽ', 'Ẽ', 'Ế', 'Ế', 'Ề', 'Ề', 'Ể', 'Ể', 'Ễ', 'Ễ', 'Ệ', 'Ệ', 'È', 'É',
        'Ê']
    },
    charF: {
        F: ['₣', 'Ḟ', 'Ḟ', '₣', 'Ƒ', 'Ғ', 'Ƒ', 'ℱ'],
        f: ['ḟ', 'ƒ', 'ʄ', 'ғ', 'ƒ', 'ғ']
    },
    charG: {
        g: ['g', 'ǵ', 'ģ', 'ğ', 'ġ', 'ĝ', 'ǧ', 'ḡ', 'ǥ', 'ɢ', 'ʛ'],
        G: ['₲', 'Ǥ', 'Ĝ', 'Ĝ', 'Ğ', 'Ğ', 'Ġ', 'Ġ', 'Ģ', 'Ģ']
    },
    charH: {
        h: ['ĥ', 'ȟ', 'ḣ', 'ḥ', 'ḧ', 'ḩ', 'ḫ', 'ẖ', 'ħ', 'ɦ', 'ɧ', 'ђ', 'һ', 'ʜ', 'ң', 'ҥ', 'ӈ', 'ℎ', 'ჩ', 'ƕ'],
        H: ['Ĥ', 'Ĥ', 'Ħ', 'Ħ', 'Ή', 'ℋ', 'ℌ', 'ℍ', 'Ħ']
    },
    charI: {
        i: ['เ', 'ι', 'i', 'í', 'ì', 'ȉ', 'ȋ', 'ĭ', 'ī', 'ĩ', 'ḭ', 'ï', 'î', 'į', 'ḯ', 'ɪ'],
        I: ['Ĩ', 'Ĩ', 'Ī', 'Ī', 'Ĭ', 'Ĭ', 'Į', 'Į', 'İ', 'Ί', 'Ι', 'Ϊ', 'Ί', 'Ι', 'Ϊ', 'Ї', 'Ỉ', 'Ỉ', 'Ị', 'Ị']
    },
    charJ: {
        j: ['נ', 'j', 'ĵ', 'ǰ', 'ʝ', 'ℐ'],
        J: ['Ĵ', 'Ĵ']
    },
    charK: {
        k: ['ĸ', 'ќ', 'қ', 'ҡ', 'ҝ', 'к'],
        K: ['ǩ', 'ķ', 'ḱ', 'ḳ', 'ḵ', 'ƙ']
    },
    charL: {
        l: ['ℓ', 'ĺ', 'ļ', 'ḷ', 'ḹ', 'ḻ', 'ḽ', 'ŀ', 'ľ', 'ł', 'Ɩ', 'ʟ', 'ℓ'],
        L: ['Ĺ', 'Ļ', 'Ļ', 'Ľ', 'Ľ', 'Ŀ', 'Ŀ', 'Ł', 'Ł', 'ℒ']
    },
    charM: {
        m: ['м', '₥', '๓', '๗', 'რ', 'ღ'],
        M: ['Ḿ', 'Ḿ', 'Ṁ', 'Ṁ', 'Ṃ', 'Ṃ', 'ℳ']
    },
    charN: {
        n: ['ŉ', 'ห', 'ή', 'ภ', 'ɳ'],
        N: ['Ń', 'Ń', 'Ņ', 'Ņ', 'Ň', 'Ň', 'Ŋ', 'Ŋ', 'Ν']
    },
    charO: {
        o: ['๏', '๐', '๑', 'σ', 'σ͠'],
        O: ['Ố', 'Ồ', 'Ồ', 'Ổ', 'Ổ', 'Ỗ', 'Ỗ', 'Ộ', 'Ộ', 'Ớ', 'Ớ', 'Ờ', 'Ờ', 'Ở', 'Ở', 'Ỡ', 'Ỡ', 'Ợ', 'Ợ', 'Ơ', 'Ơ', 'Ǒ', 'Ǒ', 'Ǿ', 'Ǿ']
    },
    charP: {
        p: ['p', 'ṕ', 'ṗ', 'ῤ', 'ℙ', '₱', 'ρ'],
        P: ['Ṕ', 'Ṕ', 'Ṗ', 'Ṗ', 'Ƥ']
    },
    charQ: {
        q: ['q'],
        Q: ['Q̶', 'Q̲']
    },
    charR: {
        r: ['ŕ', 'ŗ', 'ȑ', 'ȓ', 'ř', 'ṙ', 'ṛ', 'ṝ', 'ṟ', 'ʀ', 'я'],
        R: ['Ŕ', 'Ŕ', 'Ŗ', 'Ŗ', 'Ř', 'Ř', 'Ṙ', 'Ṛ', 'Ṛ', 'Ṝ', 'Ṝ', 'Ṟ', 'ℛ', 'ℜ', 'ℝ', '℞', '℟']
    },
    charS: {
        s: ['ś', 'ŝ', 'š', 'ș', 'ş', 'ṡ', 'ṣ', 'ṥ', 'ṧ', 'ṩ', 'ʂ'],
        S: ['Ś', 'Ś', 'Ŝ', 'Ŝ', 'Ṡ', 'Ṡ', 'Ṣ', 'Ṣ', 'Ṥ', 'Ṧ', 'Ṥ', 'Ṧ', 'Ṩ', 'Ṩ', 'Ş', 'Ş']
    },
    charT: {
        t: ['ẗ', 'ț', 'ť', 'ţ', 'ṫ', 'ṭ', 'ṯ', 'ṱ', 'ẗ', 'ŧ', 'Ɨ', '†', 'ʈ', 'ɫ', 'т'],
        T: ['Ţ', 'Ţ', 'Ṫ', 'Ṫ', 'Ṭ', 'Ṭ', 'Ṯ', 'Ṱ', 'Ṱ', 'Ť', 'Ť', 'Ŧ', 'Ŧ', 'Ƭ']
    },
    charU: {
        u: ['ข', 'ฃ', 'ช', 'ซ', 'ฌ', 'ญ', 'น', 'บ', 'ป', 'ม', 'ย', 'ΰ'],
        U: ['Ũ', 'Ũ', 'Ū', 'Ū', 'Ŭ', 'Ŭ', 'Ů', 'Ů', 'Ű', 'Ű', 'Ų', 'Ų']
    },
    charV: {
        v: ['v', 'ṽ', 'ṿ', 'ѵ', 'ѷ', '℣'],
        V: ['Ṽ', 'Ṽ', 'Ṿ', 'Ṿ']
    },
    charW: {
        w: ['ẁ', 'ŵ', 'ẅ', 'ẇ', 'ẉ', 'ẘ', 'ω', 'ώ', 'ῳ', 'ῴ', 'ผ', 'พ', 'ฟ', 'ฬ'],
        W: ['Ŵ', 'Ŵ', 'Ẁ', 'Ẁ']
    },
    charX: {
        x: ['ẋ', 'ẍ', 'ҳ', '×'],
        X: ['Ẋ', 'Ẋ', 'Ẍ', 'Ẍ']
    },
    charY: {
        y: ['ỳ', 'ŷ', 'ȳ', 'ÿ', 'ӳ', 'ỷ', 'ẏ', 'ყ'],
        Y: ['Ỳ', 'Ỳ', 'Ỵ', 'Ỵ', 'Ỷ', 'Ỷ', 'Ỹ', 'Ỹ']
    },
    charZ: {
        z: ['z̃̾', 'ź', 'ž', 'ż', 'ƶ', 'ʐ', 'ʑ', 'ℤ', 'ẑ', 'ẓ', 'ẕ'],
        Z: ['Ź', 'Ẑ', 'Ẑ', 'Ẓ', 'Ẓ', 'Ẕ', 'Ẕ', 'Ż', 'Ż', 'Ž']
    },
    compare: function compare(word, toCompareWith) {
    word = word.toLowerCase();
    var arrayOfWords = [];
    function has50PresOfLetters(string, cmp) {
        string = string.toLowerCase();
        cmp = cmp.toLowerCase();
        var mutalLetters = 0
          , begin = false;
        for (var i = 0; i < cmp.length; i++) {
            if (cmp[i] == string[i]) {
                begin = true;
            }
            ;if (begin) {
                if (cmp[i] == string[i]) {
                    mutalLetters++;
                } else {
                    begin = false;
                }
            }
        }
        return (cmp.length / 2) <= mutalLetters
    }
    ;for (var elem of toCompareWith) {
        if (elem.toLowerCase() == word) {
            return elem;
        }
        ;var wordComparingInfo = {
            equalitiveLength: false,
            hasTheWord: false,
            has50PresOfLetters: false,
            closeLength: false,
            startsWith: false,
            endsWith: false,
            word: elem
        };
        if (elem.length <= word.length + 4)
            wordComparingInfo.closeLength = true;
        if (elem.toLowerCase().includes(word))
            wordComparingInfo.hasTheWord = true;
        if (elem.length == word.length)
            wordComparingInfo.equalitiveLength = true;
        var sharedLetters = 0;
        if (has50PresOfLetters(word, elem))
            wordComparingInfo.has50PresOfLetters = true;
        if (elem.toLowerCase().startsWith(word))
            wordComparingInfo.startsWith = true;
        if (elem.toLowerCase().endsWith(word))
            wordComparingInfo.endsWith = true;
        arrayOfWords.push(wordComparingInfo)
    }
    ;var result, expected;
    for (var elemInfo of arrayOfWords) {
        if (word.length == 1 && elemInfo.word.length > 3)
            continue;
        if (elemInfo.startsWith && elemInfo.hasTheWord) {
            result = elemInfo.word;
            expected = elemInfo.word;
        } else if (elemInfo.has50PresOfLetters && elemInfo.equalitiveLength) {
            result = elemInfo.word;
            expected = elemInfo.word;
        } else if (elemInfo.startsWith && elemInfo.has50PresOfLetters) {
            result = elemInfo.word;
            expected = elemInfo.word;
        } else if (elemInfo.endsWith && elemInfo.has50PresOfLetters) {
            result = elemInfo.word;
            if (!expected)
                expected = elemInfo.word;
        } else if ((word.length - 1 == elemInfo.word.length || word.length - 2 == elemInfo.word.length) && elemInfo.hasTheWord) {
            result = elemInfo.word;
            expected = elemInfo.word;
        } else if (elemInfo.equalitiveLength && elemInfo.has50PresOfLetters)
            result = elemInfo.word;
        else if (word.endsWith(elemInfo.word)) {
            result = elemInfo.word;
            expected = elemInfo.word;
        } else if (word.startsWith(elemInfo.word)) {
            result = elemInfo.word;
            expected = elemInfo.word;
        } else if (elemInfo.hasTheWord)
            result = elemInfo.word;
        else if (elemInfo.has50PresOfLetters)
            result = elemInfo.word;
        result = expected ? expected : result;
    }
    ;return result ? result : null;
},
    keyGenerator: function keyGenerator(keyLength) {
        this.keyLength = keyLength || 15;
        this.generate = function() {
            function number() {
                return Math.floor(Math.random() * 10).toString();
            }
            function letter() {
                const letters = ("abcdefghijklmnopqrstuvwxyz").split("")
                  , number = Math.floor(Math.random() * 2)
                  , toReturn = number == 0 ? letters.random() : letters.random().toUpperCase();
                return toReturn;
            }
            function r() {
                const n = Math.floor(Math.random() * 2);
                return n == 0 ? number() : letter();
            }
            var toReturn = "";
            for (var i = 0; i < this.keyLength; i++) {
                toReturn += r()
            }
            return toReturn;
        }
    },
    toLatin: function toLatin(number) {
        if (number > 100000000) {
            number = 10000000;
            console.warn("btxt.toLatin: Huge numbers may cause out-of-memory crash");
        }
        ;var toReturn = '';
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
    },
    btxt: function(txt) {
        if (typeof txt !== 'string')
            throw new TypeError(`You must provide a String. @"${typeof txt}"`)
        var finnalWord = '';
        for (var i = 0; i < txt.length + 1; i++) {
            if (this.list.includes(txt.charAt(i).toLowerCase())) {
                finnalWord += this[`char${txt.charAt(i).toUpperCase()}`][txt.charAt(i)].random();
            } else {
                finnalWord += txt.charAt(i);
            }
        }
        return finnalWord;
    },
    calculateLatin: function(str) {
        str = str.toLowerCase().replace(/\s/g, '').split('');
        var toReturn = 0
          , pos = 6
          , Ostr = str.join('');
        if (/(iiii|viv|xxxx|dd|ccccc|vv|ll)/g.test(Ostr))
            throw `Unknown illeageal latin number`
        for (var i = 0; i < str.length; i++) {
            var e = str[i];
            if (e == "m" && pos >= 6) {
                toReturn += 1000;
                pos = 6;
                continue;
            }
            if (e == "d" && pos >= 5) {
                toReturn += 500;
                pos = 5;
                continue;
            }
            if (e == "c" && pos >= 4) {
                toReturn += 100;
                pos = 4;
                continue;
            }
            if (e == "l" && pos >= 3) {
                toReturn += 50;
                pos = 3;
                continue;
            }
            if (e == "x" && str[i + 1] == "c" && pos >= 3) {
                toReturn += 90;
                pos = 3;
                str[i + 1] = "";
                continue;
            }
            if (e == "x" && str[i + 1] == "l" && pos >= 2) {
                toReturn += 40;
                pos = 2;
                str[i + 1] = "";
                continue;
            }
            if (e == "x" && pos >= 2) {
                toReturn += 10;
                pos = 2;
                continue;
            }
            if (e == "v" && pos >= 1) {
                toReturn += 5;
                pos = 1;
                continue;
            }
            if (e == "i" && str[i + 1] == "v" && pos >= 1) {
                toReturn += 4;
                pos = -1;
                str[i + 1] = "";
                continue;
            }
            if (e == "i" && str[i + 1] == "x" && pos >= 1) {
                toReturn += 19;
                pos = 2;
                str[i + 1] = "";
                continue;
            }
            if (e == "i" && pos >= 0) {
                toReturn += 1;
                pos = 0;
                continue;
            }
            if (e == '')
                continue;
            throw `Unknown latin number ${e} at ${i}`;
        }
        ;return toReturn;
    }
}
