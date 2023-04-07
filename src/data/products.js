// 'use strict';

// Define a JavaScript object with arrays of products, their company names, and prices: 
const products = [
    { company: 'OfficeMax', product: 'Notebooks', price: 5.99 },
    { company: 'Amazon', product: 'Gel Pens, Dozen', price: 19.99 },
    { company: 'Staples', product: 'Jester Backpack', price: 75.00 },
    { company: 'Target', product: 'Avery 1" Round Ring Binder', price: 2.19 },
    { company: 'Walmart', product: 'Pen+Gear Copy Paper, 750 Sheets', price: 8.44 }
];

// Allow exporting of the object to other functions:
// module.exports.products = products;
export default products;


// Display the object in a table in the terminal console to confirm it works:
// https://developer.mozilla.org/en-US/docs/Web/API/Console/table
// console.table(products); 

 