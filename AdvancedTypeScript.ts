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
//orderProduct({ name: 'foo' });
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
//transferPlayer({ name: 'Ramos', firstname: 'Sergio' });
// Property 'club' is missing in type 

/**
 * Keyof
Now that we know the union type. Let’s have a look at the keyof o perator. 
The keyof operator takes the keys of an interface or an object and produces a union type.
 */
interface MovieCharacter {
    firstname: string;
    name: string;
    movie: string;
}
type characterProps = keyof MovieCharacter;
// a same like this 
type characterProps1 = 'firstname' | 'name' | 'movie';
interface PizzaMenu {
    starter: string;
    pizza: string;
    beverage: string;
    dessert: string;
}
const simpleMenu: PizzaMenu = {
    starter: 'Salad',
    pizza: 'Pepperoni',
    beverage: 'Coke',
    dessert: 'Vanilla ice cream',
};
function adjustMenu(menu: PizzaMenu, menuEntry: keyof PizzaMenu, change: string,) {
    menu[menuEntry] = change;
}
// 👍
adjustMenu(simpleMenu, 'pizza', 'Hawaii');
// 👍
adjustMenu(simpleMenu, 'beverage', 'Beer');
// 👎 Type - 'bevereger' is not assignable
//adjustMenu(simpleMenu, 'bevereger', 'Beer');
// 👎 Wrong property - 'coffee' is not assignable
//adjustMenu(simpleMenu, 'coffee', 'Beer');
let firstname = 'Frodo';
let name1: typeof firstname;
function getCharacter() {
    return {
        firstname: 'Frodo',
        name: 'Baggins',
    };
}
type Character = ReturnType<typeof getCharacter>;
/*
equal to 
type Character = {
  firstname: string;
  name: string;
}
*/

/**
 * Conditional types
The conditional ternary operator is a very well-known operator in Javascript. 
The ternary operator takes three operands. A condition, a return type if the condition is true, 
and a return type is false.
condition ? return
condition ? returnTypeIfTrue : returnTypeIfFalse;
 */
interface StringId {
    id: string;
}
interface NumberId {
    id: number;
}
type Id<T> = T extends string ? StringId : NumberId;
let idOne: Id<string>;
// equal to let idOne: StringId;
let idTwo: Id<number>;
// equal to let idTwo: NumberId;

/**
 * Utility types
Utility types are helper tools to facilitate common type transformations. Typescript offers many utility types.
 Too many to cover in this blog post. Below you can find a selection of the ones I use the most.
The official TypeScript documentation offers a great list of all utility types.
Partial
The Partial utility type allows you to transform an interface into a new interface where all properties are optional.
interface MovieChar
 */
interface MovieCharacter {
    firstname: string;
    name: string;
    movie: string;
}
function registerCharacter(character: Partial<MovieCharacter>) { }
// 👍
registerCharacter({firstname: 'Frodo',});
// 👍
registerCharacter({firstname: 'Frodo',name: 'Baggins',});
