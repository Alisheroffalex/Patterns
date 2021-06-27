class OrderStatus {
    constructor(name, nextState) {
        this.name = name
        this.nextState = nextState
    }

    toNext() {
        return new this.nextState();
    }
}

class WaitingPayment extends OrderStatus {
    constructor() {
        super('Waiting payment', Shipping)
    }
}

class Shipping extends OrderStatus {
    constructor() {
        super('Shipping', Delivered)
    }
}

class Delivered extends OrderStatus {
    constructor() {
        super('Delivering', Delivered)
    }
}