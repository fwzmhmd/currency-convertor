const https = require('https');
const http = require('http');
const api = require('./api');

const printResult = (result) => {
    console.log(result);
}

const getCurrentCurrency = (input, baseCurrency, convertCurrency) => {
    const req = https.get(`https://forex.1forge.com/1.0.3/convert?from=${baseCurrency}&to=${convertCurrency}&quantity=${input}&api_key=${api.key}`, res => {
        let body = '';

        res.on('data', d => body += d.toString());

        res.on('end', () => {
            const info = JSON.parse(body);
            printResult(info.text);
        });
    });
}

module.exports.currency = getCurrentCurrency;