const fs = require('fs');
const path = require('path');
const products = JSON.parse(fs.readFileSync(path.join(__dirname, 'productosDB.json'), 'utf-8'));

module.exports = products;