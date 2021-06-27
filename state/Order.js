class Order {
    constructor() {
        this.state = new WaitingPayment();
    }

    nextState() {
        this.state = this.state.toNext();
    }
}