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