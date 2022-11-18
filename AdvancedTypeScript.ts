// tsc AdvancedTypeScript.ts
// node AdvancedTypeScript.js
/***
 * Typescript is awesome. It offers so many great features.
 *  Here’s a summary of some of the greatest advanced Typescript features.
 */
//Union types
function orderProduct(orderId: string | number) {
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
// this give error Argument of type '{ name: string; }' is not assignable to parameter of type 'string | number'

/**
 * Intersection types
An intersection type, on the other hand, combines multiple types into one.
    This new type has all the features of the combined types.
 */
interface Person {
    name: string;
    firstname: string;
}

interface FootballPlayer {
    club: string;
}

function transferPlayer(player: Person & FootballPlayer) { }

// 👍
transferPlayer({ name: 'Ramos', firstname: 'Sergio', club: 'PSG' });
// that will run 
// 👎 Argument is not assignable to Person & FootballPlayer
transferPlayer({ name: 'Ramos', firstname: 'Sergio' });
// console.error( Property 'club' is missing in type);


