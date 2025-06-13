
/**
 * Converts a given string to kebab-case.
 *
 * The function performs the following transformations:
 * - Replaces underscores and spaces with hyphens.
 * - Inserts hyphens before consecutive uppercase letters followed by lowercase letters (e.g., "APIResponse" -> "API-Response").
 * - Inserts hyphens between lowercase letters/digits and uppercase letters (e.g., "fooBar" -> "foo-Bar").
 * - Converts the entire string to lowercase.
 * - Collapses multiple hyphens into a single hyphen and trims leading/trailing hyphens.
 *
 * @param {string} str - The input string to convert.
 * @returns {string} The kebab-case formatted string.
 *
 * @example
 * toKebabCase('myVariableName'); // "my-variable-name"
 * toKebabCase('MyVariableName'); // "my-variable-name"
 * toKebabCase('APIResponseData'); // "api-response-data"
 * toKebabCase('foo_bar baz'); // "foo-bar-baz"
 */
function toKebabCase(str) {
    return str
        // Replace underscores and spaces with hyphens
        .replace(/[_\s]+/g, '-')
        // Insert hyphen before consecutive uppercase letters followed by lowercase (e.g., "APIResponse" -> "API-Response")
        .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
        // Insert hyphen between lowercase/digit and uppercase (e.g., "fooBar" -> "foo-Bar")
        .replace(/([a-z\d])([A-Z])/g, '$1-$2')
        // Convert to lowercase
        .toLowerCase()
        // Remove leading/trailing hyphens and collapse multiple hyphens
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
}

// Example usage:
// console.log(toKebabCase('myVariableName')); // "my-variable-name"
// console.log(toKebabCase('MyVariableName')); // "my-variable-name"
// console.log(toKebabCase('APIResponseData')); // "api-response-data"
// console.log(toKebabCase('foo_bar baz')); // "foo-bar-baz"