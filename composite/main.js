class Car extends Composite {
    constructor() {
        super();
        this.setName("Audi");
    }
}

const myCar = new Car();

myCar.add(new Engine());
myCar.add(new Body());
myCar.add(new Tools());


console.log(myCar.getPrice());