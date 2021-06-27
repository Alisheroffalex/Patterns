class Acer {
    constructor(name, color, memory) {
        this.name = name;
        this.color = color;
        this.memory = memory;
    }
}

function produceGameLaptops()  {
    return new Acer('Acer game Laptop 2000X', 'white', 512)
}

function produceOfficeLaptops() {
    return new Acer('Acer game Laptop 2000X', 'white', 64)
}

function factory(type) {
    if(type === 'game') {
        return produceGameLaptops();
    } else if (type === 'office') {
        return produceOfficeLaptops();
    }
}


const gameLaptop = factory('game');

console.log(gameLaptop)