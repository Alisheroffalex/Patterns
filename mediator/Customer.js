class Customer {
    constructor(name, dealer) {
        this.name = name;
        this.dealer = dealer;
    } 

    getName() {
        return this.name;
    }

    makeOrder(auto, info) {
        this.dealer.makeOrder(this, auto, info);
    }
}