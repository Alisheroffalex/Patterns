/**
 * Prototye: Abstract Factory
 * 
 * This pattern has a function that will recieve argument of type. Then it calls function for creating new class with parameters for this type
 * 
 * @param {type} string 
 */

function factory(type) {
    if(type === 'game') {
        return produceGameLaptops();
    } else if (type === 'office') {
        return produceOfficeLaptops();
    }
}