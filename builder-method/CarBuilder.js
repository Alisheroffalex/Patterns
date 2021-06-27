class CarBuilder {
    constructor() {
        this.car = new Car();
    }

    addAutoPilot() {
        this.car.addAutoPilot = true;
        return this;
    }

    addParkTronic() {
        this.car.addParkTronic = true;
        return this;
    }

    addSignaling() {
        this.car.signaling = true;
        return this;
    }

    updateEngine(engine) {
        this.car.engine = engine;
        return this;
    }

    build() {
        return this.car;
    }
}