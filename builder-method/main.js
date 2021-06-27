/**
 * Pattern: Builder
 * 
 * This pattern needs two classes: Class and Builder. Class`s constructor will create class with standard params. Builder will have steps to change this standard params. Every step recieve argument to update this param
 * 
 */

 const car = new CarBuilder()
                        .addAutoPilot()
                        .addParkTronic()
                        .addSignaling()
                        .updateEngine('ProMax')
                        .build()

console.log(car);