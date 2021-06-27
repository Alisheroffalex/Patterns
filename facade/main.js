/**
 * Patterns: Facade
 * 
 * 
 * This pattern helps to create instance of class without different configuration. For example we know that producing car is very difficult and there are a lot of steps and sometimes we need just produce them without knowing what is inside is going on. This pattern solves this problem
 * 
 */

 const car = new ConveyorFacade(new Car());

 car.assembleCar();