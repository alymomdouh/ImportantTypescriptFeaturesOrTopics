// tsc AdvancedTypeScript.ts
// node AdvancedTypeScript.js
/***
 * Typescript is awesome. It offers so many great features.
 *  Hereβs a summary of some of the greatest advanced Typescript features.
 */
//Union types
function orderProduct(orderId) {
    console.log('Ordering product with id', orderId);
}
// π
orderProduct(1);
// Ordering product with id 1
// π
orderProduct('123-abc');
function transferPlayer(player) { }
// π
transferPlayer({ name: 'Ramos', firstname: 'Sergio', club: 'PSG' });
var simpleMenu = {
    starter: 'Salad',
    pizza: 'Pepperoni',
    beverage: 'Coke',
    dessert: 'Vanilla ice cream'
};
function adjustMenu(menu, menuEntry, change) {
    menu[menuEntry] = change;
}
// π
adjustMenu(simpleMenu, 'pizza', 'Hawaii');
// π
adjustMenu(simpleMenu, 'beverage', 'Beer');
// π Type - 'bevereger' is not assignable
//adjustMenu(simpleMenu, 'bevereger', 'Beer');
// π Wrong property - 'coffee' is not assignable
//adjustMenu(simpleMenu, 'coffee', 'Beer');
var firstname = 'Frodo';
var name1;
function getCharacter() {
    return {
        firstname: 'Frodo',
        name: 'Baggins'
    };
}
var idOne;
// equal to let idOne: StringId;
var idTwo;
function registerCharacter(character) { }
// π
registerCharacter({ firstname: 'Frodo' });
// π
registerCharacter({ firstname: 'Frodo', name: 'Baggins' });
/**
 * Required
Required does the opposite of Partial. It takes an existing interface with optional properties
and transforms it into a type where all properties are required.
 */
// interface MovieCharacter {
//     firstname?: string;
//     name?: string;
//     movie?: string;
// }
function hireActor(character) { }
// π
hireActor({ firstname: 'Frodo', name: 'Baggins', movie: 'The Lord of the Rings' });
// equal to type hpCharacters = 'Harry Potter' | 'Tom Riddle';
