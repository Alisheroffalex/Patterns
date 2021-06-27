class Car {
    setBody() {
        console.log('Body was set');
    }

    setEngine() {
        console.log('Engine was set');
    }

    setInterior() {
        console.log('Interior was set');
    }

    setExterior() {
        console.log('Exterior was set');
    }

    setWheels() {
        console.log('Wheels was set');
    }

    paint() {
        console.log('Paint was set');
    }
}

class ConveyorFacade {
    constructor(car) {
        this.car = car;
    }

    assembleCar() {
        this.car.setBody();
        this.car.setEngine();
        this.car.setInterior();
        this.car.setExterior();
        this.car.setWheels();
        this.car.paint();
    }
}