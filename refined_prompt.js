
/**
 * Converts a given string to camelCase format.
 *
 * The function replaces all non-alphanumeric characters with spaces,
 * splits the string into words, lowercases the first word, and capitalizes
 * the first letter of each subsequent word. The resulting words are concatenated
 * without spaces to form a camelCase string.
 *
 * @param {string} input - The input string to convert.
 * @returns {string} The camelCase formatted string.
 * @throws {TypeError} Throws if the input is not a string.
 *
 * @example
 * toCamelCase('hello world'); // returns 'helloWorld'
 * toCamelCase('is-shown'); // returns 'isShown'
 * toCamelCase('convert-to_camel_case'); // returns 'convertToCamelCase'
 */

function toCamelCase(input) {
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string');
    }

    // Replace all non-alphanumeric characters with a space
    let cleaned = input.replace(/[^a-zA-Z0-9]+/g, ' ').trim();

    // Split by spaces, filter out empty strings
    let words = cleaned.split(' ').filter(Boolean);

    if (words.length === 0) return '';

    // Lowercase the first word, capitalize the rest
    return words[0].toLowerCase() +
        words.slice(1).map(word =>
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        ).join('');
}

// Example usage:
console.log(toCamelCase('hello world')); // helloWorld
console.log(toCamelCase('is-shown')); // isShown
console.log(toCamelCase('convert-to_camel_case')); // convertToCamelCase

console.log('----------------------------------------------------','\n');


/**
 * Converts a given string to dot.case format.
 *
 * The function replaces all non-alphanumeric characters with spaces,
 * splits the string into words, lowercases all words, and joins them
 * using dots ('.') as separators.
 *
 * @param {string} input - The input string to convert.
 * @returns {string} The dot.case formatted string.
 * @throws {TypeError} Throws if the input is not a string.
 *
 * @example
 * toDotCase('hello world'); // returns 'hello.world'
 * toDotCase('is-shown'); // returns 'is.shown'
 * toDotCase('convert-to_camel_case'); // returns 'convert.to.camel.case'
 */
function toDotCase(input) {
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string');
    }

    // Replace all non-alphanumeric characters with a space
    let cleaned = input.replace(/[^a-zA-Z0-9]+/g, ' ').trim();

    // Split by spaces, filter out empty strings, lowercase all words
    let words = cleaned.split(' ').filter(Boolean).map(word => word.toLowerCase());

    return words.join('.');
}

// Example usage:
console.log(toDotCase('hello world')); // hello.world
console.log(toDotCase('is-shown')); // is.shown
console.log(toDotCase('convert-to_camel_case')); // convert.to.camel.case