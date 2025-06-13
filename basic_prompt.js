/**
 * Converts a given string to camelCase.
 * Words can be separated by spaces, hyphens, or underscores.
 * 
 * Example:
 *   toCamelCase('hello world') // returns 'helloWorld'
 *   toCamelCase('convert-to_camel_case') // returns 'convertToCamelCase'
 *
 * @param {string} str - The input string to convert.
 * @returns {string} The camelCase version of the input string.
 */
function toCamelCase(str) {
    return str
        .split(/[\s-_]+/)
        .map((word, idx) => {
            if (idx === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}