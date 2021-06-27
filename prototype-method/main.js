/**
 * Pattern: Prototype
 * 
 * In this pattern every class has method that produces the clone of the class with existing own properties. Then we can edit this clones if we want 
 */

const prototypeLaptop = new Acer('Acer 2000 X', 'black', 'for gamers', 512);


let laptop1 = prototypeLaptop.produce();
let laptop2 = prototypeLaptop.produce();
let laptop3 = prototypeLaptop.produce();


laptop1.color = 'white';

console.log(laptop1);