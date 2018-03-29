
const convert = require('./convert');

const input = process.argv.slice(2);

convert.currency(input[0], input[1], input[3]);