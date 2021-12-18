const fs = require('fs');
const path = require('path');
const absolutePath = require('../util/path');

const filePath = path.join(absolutePath, 'products.json');

const getProductsFromFile = cb => {
    fs.readFile(filePath, (error, content) => {
        if(error) {
            cb([]);
            return;
        }

        cb(JSON.parse(content));
    });
} 

module.exports = class Product {
    
    constructor(title) {
        this.title = title;
    }
    
    save() {
        getProductsFromFile( products => {
            products.push(this);
            fs.writeFile(filePath, JSON.stringify(products), err => {
                console.error(err);
            });
        });
    }

    static fetchAll(cb) {
        getProductsFromFile(cb);
    }
}