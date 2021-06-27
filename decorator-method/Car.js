class Car {
    constructor() {
        this.price = 25000;
        this.model = "Car";
    }

    getPrice() {
        return this.price;
    }

    getDesc() {
        return this.model;
    }
}

class Tesla extends Car {
    constructor() {
        super();
        this.price = 50000;
        this.model = "Tesla Model 2S";
    }
}

class BMW extends Car {
    constructor() {
        super();
        this.price = 40000;
        this.model = "BMW X6";
    }
}


class Autopilot {
    constructor(car) {
        this.car = car;
    }

    getPrice() {
        return this.car.price += 5000;
    }

    getDesc() {
        return `${this.car.model} with Autopilot`;
    }
}