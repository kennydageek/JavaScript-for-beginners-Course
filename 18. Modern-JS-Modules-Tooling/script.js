/*
// Importing module
// import {totalPrice as price, tq , addToCart} from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, tq)

console.log('Importing module');

// import * as ShoppingCart from './shoppingCart.js';
// console.log(ShoppingCart.totalPrice);
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart)

// import add, {totalPrice as price, tq , addToCart} from './shoppingCart.js';

import add, {cart} from './shoppingCart.js';

add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart)

// console.log('start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts')
// const data = await res.json();
// console.log(data);
// console.log('Something')

// Top level await

const getLastPost = async function() {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json();
        // console.log(data);
        return {title: data.at(-1).title, text: data.at(-1).body};
}

const lastPost = getLastPost();
// console.log(lastPost);

// Not very clean
// lastPost.then(last => console.log(last))

// Another way
// (async function(){
//         const dat = await lastPost;
//         console.log(dat)
// })();

// A better way
const lastPost2 = await getLastPost ();
*/

/*
// 1. Write an IIFE
const ShoppingCart2 =(function() {

        // 2. Add variables
        const cart = []
        const shippingCost = 10;
        const totalPrice = 237;
        const totalQuantity = 23;
        const addToCart = C

        const orderStock = function(product, quantity) {
                cart.push(product, quantity);
                console.log(`${quantity} ${product} ordered from supplier`);
        };

        // 3. Return an object that contains variable to be exposed as public API

        return {
                addToCart,
                cart,
                totalPrice,
                totalQuantity,
        }
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost); // Undefined
*/

// COMMON JS MODULES

// Export
// The code below won't run in the browser but it would run in Node.js
export.addToCart  = function(product, quantity) {
        cart.push(product, quantity);
        console.log(`${quantity} ${product} added to cart shipping cost is ${shippingCost}`);
};

// Import
const {addToCart} = require('./shoppingCart.js');