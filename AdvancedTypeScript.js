// tsc AdvancedTypeScript.ts
// node AdvancedTypeScript.js
/***
 * Typescript is awesome. It offers so many great features.
 *  Here’s a summary of some of the greatest advanced Typescript features.
 */
//Union types
function orderProduct(orderId) {
    console.log('Ordering product with id', orderId);
}
// 👍
orderProduct(1);
// Ordering product with id 1
// 👍
orderProduct('123-abc');
// Ordering product with id 123-abc
// 👎  
orderProduct({ name: 'foo' });
function transferPlayer(player) { }
// 👍
transferPlayer({ name: 'Ramos', firstname: 'Sergio', club: 'PSG' });
// that will run 
// 👎 Argument is not assignable to Person & FootballPlayer
transferPlayer({ name: 'Ramos', firstname: 'Sergio' });
console.log(characterProps);
