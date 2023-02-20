const request = require('request');

const test = request.get('https://www.monbureaunumerique.fr/');
console.log(test.json());