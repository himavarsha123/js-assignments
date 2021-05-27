'use strict';

/********************************************************************************************
 *                                                                                          *
 * Plese read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String  *
 *                                                                                          *
 ********************************************************************************************/



/**
 * Returns the result of concatenation of two strings.
 *
 * @param {string} value1
 * @param {string} value2
 * @return {string}
 *
 * @example
 *   'aa', 'bb' => 'aabb'
 *   'aa',''    => 'aa'
 *   '',  'bb'  => 'bb'
 */
function concatenateStrings(value1, value2) {
    return value1 + value2;
}


/**
 * Returns the length of given string.
 *
 * @param {string} value
 * @return {number}
 *
 * @example
 *   'aaaaa' => 5
 *   'b'     => 1
 *   ''      => 0
 */
function getStringLength(value) {
    return value.length;
}

/**
 * Returns the result of string template and given parameters firstName and lastName.
 * Please do not use concatenation, use template string :
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings
 *
 * @param {string} firstName
 * @param {string} lastName
 * @return {string}
 *
 * @example
 *   'John','Doe'      => 'Hello, John Doe!'
 *   'Chuck','Norris'  => 'Hello, Chuck Norris!'
 */
function getStringFromTemplate(firstName, lastName) {
    return `Hello, ${firstName} ${lastName}!`
}

/**
 * Extracts a name from template string 'Hello, First_Name Last_Name!'.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'Hello, John Doe!' => 'John Doe'
 *   'Hello, Chuck Norris!' => 'Chuck Norris'
 */
function extractNameFromTemplate(value) {
    value = removeExclamatoryFromEnd(value);
    return extractName(value);
}

function removeExclamatoryFromEnd(value) {
    return value.slice(0, value.length - 1);
}

function extractName(value) {
    return value.slice(7);
}


/**
 * Returns a first char of the given string.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'John Doe'  => 'J'
 *   'cat'       => 'c'
 */
function getFirstChar(value) {
    return value.slice(0, 1);
}

/**
 * Removes a leading and trailing whitespace characters from string.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   '  Abracadabra'    => 'Abracadabra'
 *   'cat'              => 'cat'
 *   '\tHello, World! ' => 'Hello, World!'
 */
function removeLeadingAndTrailingWhitespaces(value) {
    return value.trim();
}

/**
 * Returns a string that repeated the specified number of times.
 *
 * @param {string} value
 * @param {string} count
 * @return {string}
 *
 * @example
 *   'A', 5  => 'AAAAA'
 *   'cat', 3 => 'catcatcat'
 */
function repeatString(value, count) {
    return value.repeat(count);
}

/**
 * Remove the first occurrence of string inside another string
 * 
 * @param {string} str
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'To be or not to be', 'not'  => 'To be or to be'
 *   'I like legends', 'end' => 'I like legs',
 *   'ABABAB','BA' => 'ABAB'
 */
function removeFirstOccurrences(str, value) {
    var strArray = str.split(" ");
    for(var index = 0; index < strArray.length; index++) {
        let string = strArray[index];
        var firstOccurIndex = string.indexOf(value);
        if (firstOccurIndex !== -1) {
            strArray[index] = removeValueOccurence(string, value, firstOccurIndex);
        }
    }
    strArray = removeEmptyStringsFromArray(strArray);
    return strArray.join(" ");
}

function removeValueOccurence(string, value, firstOccurIndex) {
    var firstPart = string.slice(0, firstOccurIndex);
    var secondPart = string.slice(firstOccurIndex + value.length);
    return firstPart + secondPart;
}

function removeEmptyStringsFromArray(strArray) {
    return strArray.filter(string => string != "");
}

/**
 * Remove the first and last angle brackets from tag string
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *   '<div>' => 'div'
 *   '<span>' => 'span'
 *   '<a>' => 'a'
 */
function unbracketTag(str) {
    return str.slice(1).slice(0, str.length - 2);
}


/**
 * Converts all characters of the specified string into the upper case
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *   'Thunderstruck' => 'THUNDERSTRUCK'
 *  'abcdefghijklmnopqrstuvwxyz' => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
 */
function convertToUpperCase(str) {
    return str.toUpperCase();
}

/**
 * Extracts e-mails from single string with e-mails list delimeted by semicolons
 *
 * @param {string} str
 * @return {array}
 *
 * @example
 *   'angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com' => ['angus.young@gmail.com', 'brian.johnson@hotmail.com', 'bon.scott@yahoo.com']
 *   'info@gmail.com' => ['info@gmail.com']
 */
function extractEmails(str) {
    return str.split(";");
}

/**
 * Returns the string representation of rectangle with specified width and height
 * using pseudograhic chars
 *
 * @param {number} width
 * @param {number} height
 * @return {string}
 *
 * @example
 *
 *            '┌────┐\n'+
 *  (6,4) =>  '│    │\n'+
 *            '│    │\n'+
 *            '└────┘\n'
 *
 *  (2,2) =>  '┌┐\n'+
 *            '└┘\n'
 *
 *             '┌──────────┐\n'+
 *  (12,3) =>  '│          │\n'+
 *             '└──────────┘\n'
 *
 */
const UPPER = {left: "┌", middle: "─", right: "┐"};
const MIDDLE = {left: "│", middle: " ", right: "│"};
const BOTTOM = {left: "└", middle: "─", right: "┘"};
const NEW_LINE = "\n";
function getRectangleString(width, height) {
    var rectangle = "";
    rectangle += getTopBorder(width, height);
    var middleBorder = getMiddleBorder(width, height);
    rectangle += middleBorder.repeat(height - 2);
    rectangle += getBottomBorder(width, height);
    return rectangle;
}

function getTopBorder(width, length) {
    return getBorder(width, length, UPPER);
}

function getMiddleBorder(width, length) {
    return getBorder(width, length, MIDDLE);
}

function getBottomBorder(width, length) {
    return getBorder(width, length, BOTTOM);
}

function getBorder(width, length, borderSeperators) {
    var border = "";
    border += borderSeperators.left;
    border += borderSeperators.middle.repeat(width - 2);
    border += borderSeperators.right;
    border += NEW_LINE;
    return border;
}


/**
 * Encode specified string with ROT13 cipher
 * See details:  https://en.wikipedia.org/wiki/ROT13
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *
 *   'hello' => 'uryyb'
 *   'Why did the chicken cross the road?' => 'Jul qvq gur puvpxra pebff gur ebnq?'
 *   'Gb trg gb gur bgure fvqr!' => 'To get to the other side!'
 *   'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' => 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
 *
 */
function encodeToRot13(str) {
    var encryptedString = "";
    for(var index = 0; index < str.length; index++) {
        var ascii = str.charCodeAt(index);
        if(!((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122))) {
            encryptedString += str.charAt(index);
        } else {
            var newAscii = getNewAscii(ascii);
            encryptedString += String.fromCharCode(newAscii);
        }
    }
    return encryptedString;
}

function getNewAscii(ascii) {
    if (ascii >= 65 && ascii <= 90) {
        if(ascii + 13 > 90) {
            return 65 + (ascii + 13 - 90 -1);
        } else {
            return ascii + 13;
        }
    } else {
        if(ascii + 13 > 122) {
            return 97 + (ascii + 13 - 122 - 1);
        } else {
            return ascii + 13;
        }
    }
}

/**
 * Returns true if the value is string; otherwise false.
 * @param {string} value
 * @return {boolean}
 *
 * @example
 *   isString() => false
 *   isString(null) => false
 *   isString([]) => false
 *   isString({}) => false
 *   isString('test') => true
 *   isString(new String('test')) => true
 */
function isString(value) {
    if (typeof value === "object") {
        return value instanceof String;
    }
    return (typeof value === "string");
}


/**
 * Returns playid card id.
 * 
 * Playing cards inittial deck inclides the cards in the following order:
 * 
 *  'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
 *  'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
 *  'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
 *  'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'
 * 
 * (see https://en.wikipedia.org/wiki/Standard_52-card_deck)
 * Function returns the zero-based index of specified card in the initial deck above.
 * 
 * @param {string} value
 * @return {number}
 *
 * @example
 *   'A♣' => 0
 *   '2♣' => 1 
 *   '3♣' => 2
 *     ...
 *   'Q♠' => 50
 *   'K♠' => 51
 */
function getCardId(value) {
    var number = value.length === 3 ? value.slice(0, 2) :value.charAt(0);
    var symbol = value.length === 3 ? value.charAt(2) : value.charAt(1);
    var row = getRowNumber(symbol);
    var column = getColumnNumber(number);
    return row * 13 + column;
}

function getRowNumber(symbol) {
    switch(symbol) {
        case "♣":
            return 0;
        case "♦":
            return 1;
        case '♥':
            return 2;
        case "♠":
            return 3;
    }
}

function getColumnNumber(number) {
    if(!isNaN(Number(number))) {
        return Number(number) - 1;
    }
    switch(number) {
        case "A":
            return 0;
        case "J":
            return 10;
        case "Q":
            return 11;
        case "K":
            return 12;
    }
}

module.exports = {
    concatenateStrings: concatenateStrings,
    getStringLength: getStringLength,
    getStringFromTemplate: getStringFromTemplate,
    extractNameFromTemplate: extractNameFromTemplate,
    getFirstChar: getFirstChar,
    removeLeadingAndTrailingWhitespaces: removeLeadingAndTrailingWhitespaces,
    repeatString: repeatString,
    removeFirstOccurrences: removeFirstOccurrences,
    unbracketTag: unbracketTag,
    convertToUpperCase: convertToUpperCase,
    extractEmails: extractEmails,
    getRectangleString: getRectangleString,
    encodeToRot13: encodeToRot13,
    isString: isString,
    getCardId: getCardId
};
