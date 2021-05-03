// Check if email addresses are valid.
const isEmail = data => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(String(data));
};

// Check if data is boolean.
const isBoolean = data => typeof (data) === 'boolean';

// Check if data is date.
const isDate = data => {
    const regex = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*))(?:Z|(\+|-)([\d|:]*))?$/;
    return regex.test(String(data));
};

// To capitalize the first letter.
const capitalizeFirstLetter = ([first, ...rest]) => [first.toUpperCase(), ...rest].join('');

// Check if data is date.
const labelFormatter = property => {
    // To check if the label consists of several words.
    const splittedProperty = property.split('.');

    if (splittedProperty.length === 1) return property;
    // To transform the label from camelcase format to normal format with space between words.
    const upperToCamelCaseCapitalize = (match, offset) => (offset > 0 ? ' ' : '') + capitalizeFirstLetter(match);
    return splittedProperty[splittedProperty.length - 1].replace(/[A-Z]+[^A-Z]*|[^A-Z]+/g, upperToCamelCaseCapitalize);
};

// To format a date.
const dateFormatter = date => new Date(date).toLocaleDateString();

// To flatten an object with nested properties.
const flatNestedProperties = (obj, prefix = null, fieldToIgnore = null) => {
    let keys = Object.keys(obj);

    // To remove an unwanted property from an object.
    if (fieldToIgnore) {
        keys = Object.keys(obj).filter(key => key !== fieldToIgnore);
    };

    return keys.reduce((acc, key) => {
        const value = obj[key];
        // To construct the prefix of a value, which is made up of several property levels.
        const nextPrefix = prefix ? `${prefix}.${key}` : key;
        // If the value is an object we call again the function itself, until the property of the value is flattened.
        return typeof value === 'object' ?
            { ...acc, ...flatNestedProperties(value, nextPrefix) } :
            { ...acc, [nextPrefix]: value }
    }, {});
};

export {
    isEmail,
    isBoolean,
    isDate,
    capitalizeFirstLetter,
    labelFormatter,
    dateFormatter,
    flatNestedProperties
};