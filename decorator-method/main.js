/**
 * Pattern Decorator
 * 
 * This pattern has a class and seperate classes that will thange it options. For example we have a class Car. BMW and Tesla inherited from this class. But user may want to update this cars and add autopilot. We have class Autopilot that can add autopilot to any car and update it`s price;
 * 
 */


let bmwCar = new BMW();
let tesla = new Tesla();

console.log(bmwCar.getPrice());
console.log(tesla.getPrice());

bmwCar = new Autopilot(bmwCar);

console.log(bmwCar.getPrice());